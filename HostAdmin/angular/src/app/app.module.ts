import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceProxyModule } from '@shared/service-proxies/service-proxy.module';
import { SharedModule } from '@shared/shared.module';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { LoginService } from '../account/login/login.service';
import { TokenizedInterceptor } from '@shared/Interceptor/TokenizedInterceptor';
import { SafePipe } from './service/common/safe.pipe';
import { DragDropDirective } from './drag-drop.directive';
import { CookieService } from 'ngx-cookie-service';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { LayoutModule } from '@angular/cdk/layout';
import { UserInfo } from './UserInfo';
import { IframeComponent } from './iframe/iframe.component';
import { AbpModule } from 'abp-ng2-module';
import { ViewFormsComponent } from './view-forms/view-forms.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { JobListingComponent } from './job-listing/job-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    DragDropDirective,
    AuthCallbackComponent,
    IframeComponent,
    ViewFormsComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    JobListingComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AbpModule,
    AppRoutingModule,
    ServiceProxyModule,
    SharedModule,
    NgxPaginationModule,
    NgIdleKeepaliveModule.forRoot(),
    LayoutModule,
  ],
  providers: [
    CookieService,
    LoginService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenizedInterceptor,
      multi: true
    },
    UserInfo,
  ],
  entryComponents: [
   
  ]
})
export class AppModule {

}