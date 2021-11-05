import { Component, Injector, OnInit, Inject } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { accountModuleAnimation } from '@shared/animations/routerTransition';
import { LoginService } from './login.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ForgotpasswordComponent } from 'account/forgotpassword/forgotpassword.component';
import { AbpSessionService } from 'abp-ng2-module';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [accountModuleAnimation()]
})
export class LoginComponent extends AppComponentBase implements OnInit {
  submitting = false;
  style: object = {};
  params: object = {};
  width: number = 100;
  height: number = 100;
  isLoading: boolean;

  constructor(
    injector: Injector,
    public loginService: LoginService,
    private _sessionService: AbpSessionService,
    public dialogRef: MatDialogRef<LoginComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    super(injector);
  }

  ngOnInit() {
    
  }
  
  get multiTenancySideIsTeanant(): boolean {
    return this._sessionService.tenantId > 0;
  }

  get isSelfRegistrationAllowed(): boolean {
    if (!this._sessionService.tenantId) {
      return false;
    }
    return true;
  }

  login(): void {
    this.submitting = true;
    this.isLoading = true;
    this.loginService.authenticate(() => (this.submitting = false));
  }

  openForgotPassword():void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    this.dialogRef.close();
    const dialogRef = this.dialog.open(ForgotpasswordComponent, dialogConfig);
  }
}