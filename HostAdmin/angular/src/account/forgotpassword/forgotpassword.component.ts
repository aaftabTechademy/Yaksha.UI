import { Component, Injector, OnInit, Inject } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { accountModuleAnimation } from '@shared/animations/routerTransition';
import { LoginService } from 'account/login/login.service';
import { UserServiceProxy, TenantServiceProxy } from '@shared/service-proxies/service-proxies';
import { ToastrService } from 'ngx-toastr';
import { ForgotPasswordDto } from './model/forgotpassworddto';
import { AppConsts } from '@shared/AppConsts';
import { Router } from '@angular/router';
import { UtilsService } from 'abp-ng2-module';
import { Constants } from '@app/models/constants';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss'],
})
export class ForgotpasswordComponent extends AppComponentBase implements OnInit {

  submitting = false;
  forgotPasswordDto = new ForgotPasswordDto();
  tenantName: string;
  commonTenant: boolean;
  isTataCommunication: boolean;
  ismosaiclti: boolean;
  isQuinnox: boolean;
  isIbm: boolean;
  isIbmAssociates: boolean;
  isHpe: boolean;
  isXoriant: boolean;
  path: string;
  constants = Constants;

  constructor(
    injector: Injector,
    public loginService: LoginService,
    private userService: UserServiceProxy,
    private toastr: ToastrService,
    private router: Router,
    private tenantServiceProxy: TenantServiceProxy,
    private _utilsService: UtilsService,
    private toastrService: ToastrService,
    private utilsService: UtilsService
    // public dialogRef: MatDialogRef<ForgotpasswordComponent>,
    // public dialog: MatDialog,
    // @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    super(injector);
    this.tenantName = this.utilsService.getCookieValue('tenantName');

    if (this.tenantName) {
      this.tenantName = this.tenantName.toLocaleLowerCase();
    }
  }

  ngOnInit() {
    this.path = this.router.url;
    this.tenantName = this.path.split('/')[1];
    if (this.tenantName === 'mosaiclti') {
      this.ismosaiclti = true;
    }
    else if (this.tenantName === 'tatacommunication' || this.tenantName === 'tatacommunications') {
      this.isTataCommunication = true;
    }
    else if (this.tenantName === 'quinnox') {
      this.isQuinnox = true;
    }
    else if (this.tenantName === 'ibm') {
      this.isIbm = true;
    }
    else if (this.tenantName === 'ibmassociates') {
      this.isIbmAssociates = true;
    }
    else if (this.tenantName === 'hpe') {
      this.isHpe = true;
    }
    else if (this.tenantName === 'xoriant') {
      this.isXoriant = true;
    }
    else {
      this.commonTenant = true;
    }
    // if (this.tenantName) {
    //   this.checkTenant(this.tenantName);
    // }
    //this.tenantName = this._utilsService.getCookieValue('tenantName');
  }

  forgotPassword() {
    this.forgotPasswordDto.tenantName = abp.utils.getCookieValue("tenantName");
    this.forgotPasswordDto.resetUrl = AppConsts.appBaseUrl + '/' + this.forgotPasswordDto.tenantName + '/account/resetpassword';
    this.userService.forgotPassword(this.forgotPasswordDto).subscribe(res => {
      if (res)
        this.toastr.info("Please check your mail for password reset link");
      else 
        this.toastr.error("Invalid Username");
    });
    // this.router.navigate([`${this.tenantName}/account/landing`]);
    // this.dialogRef.close();
  }

  goBackToLogin(){
    this.router.navigate([`${this.tenantName}/account/landing`]);
  }
  
  checkTenant(tenantName: string): void {
    this.tenantServiceProxy.GetIDProvider(tenantName, this._utilsService.getCookieValue("requestOrigin")).subscribe(res => {
      if (res) {
        const response = JSON.parse(res);
        if (response.SSOEnabled && response.TenantName === tenantName) {
          this._utilsService.setCookieValue("SSOEnabled", false + "", undefined, abp.appPath);
          this._utilsService.setCookieValue(Constants.tenantName, response.TenantName, undefined, abp.appPath);
          this.router.navigate([`${tenantName}/account/landing`]);
        }
        else if (!response.SSOEnabled && response.TenantName === tenantName) {
          this.toastrService.error(`SSO not enabled for ${tenantName}!`);
          this.router.navigate([`${tenantName}/account/landing`]);
        }
      }
      else {
        this.toastrService.error('Please check the tenant name you entered!');
        this.router.navigate([`default/account/landing`]);
      }
    },
      error => console.error(error));
  }
}
