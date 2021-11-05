import { Component, Injector, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { AppComponentBase } from '@shared/app-component-base';
import { accountModuleAnimation } from '@shared/animations/routerTransition';
import { Constants } from '@app/models/constants';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WhiteSpaceValidators } from '@app/shared/validators/whitespace.validator';
import { ToastrService } from 'ngx-toastr';
import { CourseService } from '@app/service';
import { Pattern } from '@app/shared/validators/pattern';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent extends AppComponentBase implements OnInit {
  constants = Constants;
  registerForm: FormGroup;
  hidePassword: boolean = true;
  hideConfirmPassword: boolean = true;
  isLoading: boolean = false;
  submitted: boolean = false;
  tenantName: string;
 
  constructor(
    injector: Injector,
    private _router: Router,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private courseService: CourseService,    
    public dialogRef: MatDialogRef<RegisterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    super(injector);
  }

  ngOnInit() {
    this.initRegisterForm();
    this.displayValue();
    this.tenantName = this.data.tenantName;
  }

  initRegisterForm(): void {
    this.registerForm = this.formBuilder.group({
      isOnsiteUser: '',
      email: [{ value: '', disabled: true }, [Validators.required, WhiteSpaceValidators.emptySpace(), Validators.pattern(Pattern.email)]],
      name: ['', [Validators.required, WhiteSpaceValidators.emptySpace()]],
      surname: ['', [Validators.required, WhiteSpaceValidators.emptySpace()]],
      userIdNumber: '',
      businessUnitName: ['', [Validators.required, WhiteSpaceValidators.emptySpace()]],
      managerName: '',
      managerEmail: '',
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, WhiteSpaceValidators.compareValidator('password')]],
      acceptTerms:['',[Validators.required]]
    });
  }

  displayValue(): void {
    this.registerForm.patchValue({
      email: this.data.email
    });
  }

  register(): void {
    if (this.registerForm.valid) {
      console.log()
      this.isLoading = true;
      this.submitted = true;
      let userDetails = {
        tenantId: +this.data.tenantId
      };
      let data = {
        encodedUrl: this.data.encodedUrl,
        userDetails: { ...userDetails, ...this.registerForm.getRawValue() }
      };
      delete data.userDetails.confirmPassword;
      // this.courseService.createUserOnboard(data).pipe(
      //   finalize(() => {
      //     this.doneLoading();
      //   })).subscribe(res => {
      //     if (res.success && res.result) {
      //       this.dialogRef.close();
      //       this.toastrService.success(Constants.registrationCompletedSuccessfullyKindlyLoginToThePortalWithYourCredential);
      //       this._router.navigate([`${this.tenantName}/account/landing`]);
      //     }
      //   },
      //     error => {
      //       if (error.error.error) {
      //         this.toastrService.error(error.error.error.message);
      //         this._router.navigate([`${this.tenantName}/account/landing`]);
      //       }
      //       this.dialogRef.close();
      //       console.error(error);
      //     });
    }
    else {
      // this.toastrService.error(Constants.pleaseCheckTheValidationErrors);
    }
  }

  close(): void {
    this.dialogRef.close();
  }

  redirectToLogin():void{
    this.dialogRef.close();
    this._router.navigate([`${this.tenantName}/account/landing`]);
  }

  doneLoading(): void {
    this.isLoading = false;
    this.submitted = false;
  }
}