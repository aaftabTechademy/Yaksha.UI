import { AfterViewInit, Component, Injector, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginComponent } from 'account/login/login.component';
import { Constants } from '@app/models/constants';
import { AppConsts } from '@shared/AppConsts';
import { AppComponentBase } from '@shared/app-component-base';
import { Router, ActivatedRoute } from '@angular/router';
import { dataService } from '@app/service/common/dataService';
import { TenantServiceProxy } from '@shared/service-proxies/service-proxies';
import { AppAuthService } from '@shared/auth/app-auth.service';
import { UtilsService } from 'abp-ng2-module';
import { LoginService } from 'account/login/login.service';
import { ToastrService } from 'ngx-toastr';
import { DynamicScriptService } from 'app/service/api/dynamic-script.service';

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})

export class LandingComponent extends AppComponentBase implements OnInit {
  tenantName: string;
  submitting: boolean;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(injector: Injector,
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    public loginService: LoginService,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    private dataService: dataService,
    private tenantServiceProxy: TenantServiceProxy,
    private _appAuthService: AppAuthService,
    private toastrService: ToastrService,
    private utilsService: UtilsService,
    private dynamicScriptService: DynamicScriptService) {
    super(injector);
    this.tenantName = this.utilsService.getCookieValue('tenantName');

    if (this.tenantName) {
      this.tenantName = this.tenantName.toLocaleLowerCase();
    }

    if (this.appSession && this.appSession.user && this.appSession.user.id) {
      this.router.navigate([`${this.tenantName}/app/home`]);
    }
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {

    });
    this.dynamicScriptService.loadScripts();
  }

  b2cLogin() {
    this.corpLogin();
  }

  openLogin(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.width = '40vw';
    const dialogRef = this.dialog.open(LoginComponent, dialogConfig);
  }

  corpLogin(): void {
    let tenantName = abp.utils.getCookieValue("tenantName");
    if (tenantName && tenantName.toLowerCase() != Constants.default.toLowerCase()) {
      toastr.options.positionClass = "toast-top-right";
      toastr.info("Taking you to your organization login", "Corp account");
      location.href = AppConsts.appBaseUrl + "/" + tenantName;
    }
    else {
      toastr.options.positionClass = "toast-top-right";
      toastr.info("Corp tenant is not set, Kindly make use of Link provided by your organization", "Corp account");
      // this.openLogin();
    }
  }

  checkLogin(tenantName: string): void {
    this.tenantServiceProxy.GetIDProvider(tenantName, this.utilsService.getCookieValue("requestOrigin")).subscribe(res => {
      if (res) {
        let response = JSON.parse(res);
        this.utilsService.setCookieValue("isValidAuthRequst", response.IsRedirectionWhitelisted);
        if (!response.IsRedirectionWhitelisted) {
          toastr.warning(response.Message);
          return setTimeout(function () {
            return this.router.navigate([`/${this.path}/account/landing`]);
          }, 5000);
        }
        if (response.SSOEnabled) {
          this.utilsService.setCookieValue("SSOEnabled", response.SSOEnabled + "", undefined, abp.appPath);
          this.utilsService.setCookieValue(Constants.tenantName, response.TenantName, undefined, abp.appPath);
          if (!this._appAuthService.isLoggedIn()) {
            this._appAuthService.startAuthentication();
          }
          else if (this._appAuthService.isLoggedIn()) {
            this._appAuthService.setToken(this._appAuthService.getToken());
            this._appAuthService.completeAuthentication();
          }
        }
        else {
          if (this.appSession.user && this.appSession.user.id) {
            this.router.navigate([`${tenantName}/app/home`]);
          }
        }
      }
    },
      error => console.error(error));
  }

  login(): void {
    if (this.loginService.authenticateModel.userNameOrEmailAddress.trim() && this.loginService.authenticateModel.password.trim()) {
      this.submitting = true;
      this.loginService.authenticate(() => (this.submitting = false));
    }
    else {
      this.toastrService.error();
      this.submitting = false;
    }
  }
}