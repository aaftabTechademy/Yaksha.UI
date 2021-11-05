import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AccountRoutingModule } from './account-routing.module';
import { ServiceProxyModule } from '@shared/service-proxies/service-proxy.module';
import { SharedModule } from '@shared/shared.module';
import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginService } from './login/login.service';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { LandingComponent } from './landing/landing.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SsoInternalComponent } from './sso-internal/sso-internal.component';
import { AbpModule } from 'abp-ng2-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { TabsAccordinComponent } from './tabs-accordin/tabs-accordin.component';
import { ViewPageComponent } from './view-page/view-page.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AbpModule,
        SharedModule,
        ServiceProxyModule,
        AccountRoutingModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
    ],
    exports: [
        ForgotpasswordComponent
    ],
    declarations: [
        AccountComponent,
        LoginComponent,
        RegisterComponent,
        LandingComponent,
        ForgotpasswordComponent,
        ResetpasswordComponent,
        SsoInternalComponent,
        TableComponent,
        TabsAccordinComponent,
        ViewPageComponent,
        HeaderComponent,
        FooterComponent
    ],
    providers: [
        LoginService,
    ],
    entryComponents: [
        RegisterComponent
    ]
})
export class AccountModule {

}
