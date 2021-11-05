import { Component, OnInit, Injector } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TenantServiceProxy } from '@shared/service-proxies/service-proxies';
import { AppComponentBase } from '@shared/app-component-base';
import { AppAuthService } from '@shared/auth/app-auth.service';
import { Constants } from '@app/models/constants';
import { UtilsService } from 'abp-ng2-module';

@Component({
  selector: 'app-tenantlogin',
  templateUrl: './tenantlogin.component.html',
  styleUrls: ['./tenantlogin.component.css']
})
export class TenantloginComponent extends AppComponentBase implements OnInit {
  path: string;

  constructor(injector: Injector,
    private router: Router,
    private tenantServiceProxy: TenantServiceProxy,
    private _appAuthService: AppAuthService,
    private _utilsService: UtilsService,
    private activatedRoute: ActivatedRoute) {
    super(injector);
  }

  ngOnInit() {
    this.path = this.router.url;

    if (this.path === '/') {
      this.path = this._utilsService.getCookieValue(Constants.tenantName);
    }

    if (this.path === null) {
      this.path = Constants.default.toLocaleLowerCase();
    }

    if (this.appSession.user && this.appSession.user.id) {
      console.log('Tenant login: ' + this.path);
      this.router.navigate([`${this.path}/app/home`]);
    }
    else if (this.path.length < 64) {
      const tenantName = this.path.replace(/^\/+/g, '').toLocaleLowerCase();
      this.path = tenantName;
      this.checkTenantName(tenantName);
    }
    else {
      try {
        this._appAuthService.completeAuthentication();
      }
      catch (ex) {
        console.log(ex);
      }
    }
  }

  checkTenantName(tenantName: string): void {
    const format = /[!@#$%^&*()+\=\[\]{};':"\\|,.<>\/?]+/;
    this._utilsService.setCookieValue("requestOrigin", document.referrer);
    if (format.test(tenantName)) {
      this.router.navigate(['/default/account/landing']);
    } else {
      this.tenantServiceProxy.GetIDProvider(tenantName, this._utilsService.getCookieValue("requestOrigin")).
        subscribe(res => {
          // If tenant not exists then redirect to landing page 
          // If SSO is not enabled then set tenant details in cookie & redirect to landing page
          // If SSO is enabled then set tenant details in cookie & challenge the user for authentication
          let response: any;

          if (res && res !== undefined && res !== null && res !== '') {
            response = JSON.parse(res);
            this._utilsService.setCookieValue("isValidAuthRequst", response.IsRedirectionWhitelisted);
            if (!response.IsRedirectionWhitelisted) {
              toastr.warning(response.Message);
              return setTimeout(function () {
                return this.router.navigate([`/${this.path}/account/landing`]);
              }, 5000);
            }

            this._utilsService.setCookieValue("SSOEnabled", response.SSOEnabled + "", undefined, abp.appPath);
            this._utilsService.setCookieValue(Constants.tenantName, response.TenantName, undefined, abp.appPath);

            if (response && response.TenantName !== tenantName && !response.SSOEnabled) {
              this._utilsService.setCookieValue(Constants.tenantName, Constants.default.toLowerCase());
              return this.router.navigate(['/default/account/landing']);
            }

            if (response && response.TenantName === tenantName && !response.SSOEnabled) {
              return this.router.navigate([`/${this.path}/account/landing`]);
            }

          }
          else {
            return this.router.navigate(['/default/account/landing']);
          }

          if (response && tenantName && response.TenantName === tenantName && response.SSOEnabled) {
            if (!this._appAuthService.isLoggedIn() && tenantName.toLowerCase() !== Constants.default.toLowerCase()) {
              this._appAuthService.startAuthentication();
            }
            else if (this._appAuthService.isLoggedIn() && tenantName.toLowerCase() !== Constants.default.toLowerCase()) {
              this._appAuthService.setToken(this._appAuthService.getToken());
              this._appAuthService.completeAuthentication();
            }
            else if (tenantName.toLowerCase() === Constants.default.toLowerCase()) {
              this._utilsService.setCookieValue(Constants.tenantName, null);
              return this.router.navigate(['/default/account/landing']);
            }
            else {
              this._appAuthService.completeAuthentication();
            }
          }
          else {
            return this.router.navigate(['/default/account/landing']);
          }
        });
    }
  }
}