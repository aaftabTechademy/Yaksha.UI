import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountComponent } from './account.component';
import { TenantloginComponent } from '@shared/tenantlogin/tenantlogin.component';
import { LandingComponent } from './landing/landing.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { TableComponent } from './table/table.component';
import { TabsAccordinComponent } from './tabs-accordin/tabs-accordin.component';
import { ViewPageComponent } from './view-page/view-page.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: AccountComponent,
                children: [
                    { path: 'landing', component: LandingComponent },
                    { path: 'view-page', component: ViewPageComponent },
                    { path: 'landing/:encodedUrl', component: LandingComponent },
                    { path: 'table', component: TableComponent },
                    { path: 'tabs', component: TabsAccordinComponent },
                    { path: 'login', component: LoginComponent },
                    { path: 'register', component: RegisterComponent },
                    { path: 'resetpassword/:encodedUrl', component: ResetpasswordComponent },
                    { path: 'forgotpassword', component: ForgotpasswordComponent },
                    { path: '**', component: TenantloginComponent }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AccountRoutingModule { }
