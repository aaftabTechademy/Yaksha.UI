import { Component, Injector, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { ToastrService } from 'ngx-toastr';
import { AppAuthService } from '@shared/auth/app-auth.service';
import { SignalRAspNetCoreHelper } from '@shared/helpers/SignalRAspNetCoreHelper';
import { filter, pairwise } from 'rxjs/operators';
import { dataService } from './service/common/dataService';
import { CourseService } from './service';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { Subject } from 'rxjs';
import { UtilsService } from 'abp-ng2-module';
import { AppSessionService } from '@shared/session/app-session.service';

@Component({
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],

})
export class AppComponent extends AppComponentBase implements OnInit, AfterViewInit {
    loading: boolean = true;
    fuseConfig: any;
    navigation: any;

    // Private
    private _unsubscribeAll: Subject<any>;

    constructor(
        private idle: Idle,
        private router: Router,
        private toastr: ToastrService,
        private authService: AppAuthService,
        private dataService: dataService,
        private courseService: CourseService,
        private _appSessionService: AppSessionService,
        private _platform: Platform,
        private utilsService: UtilsService,
        injector: Injector,
        @Inject(DOCUMENT) private document: any,
        @Inject(PLATFORM_ID) private platformId: Object
    ) {
        super(injector);
        //checking for session timeout on user idle
        idle.setIdle(21600);
        idle.setTimeout(10);
        idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
        idle.onTimeoutWarning.subscribe((countdown) => {
            if (countdown == 10) {
                this.toastr.warning("Your session will expire in " + countdown + " seconds!");
            }
        });
        idle.onTimeout.subscribe(() => {
            this.authService.logout(true);
            this.toastr.error("Session got expired. Please login into the session again");
        });
        this.reset();

        router.events.subscribe((routerEvent: Event) => {
            this.checkRouterEvent(routerEvent);
        });

        router.events
            .pipe(filter((evt: any) => evt instanceof RoutesRecognized), pairwise())
            .subscribe((events: RoutesRecognized[]) => {

            });

        // Add is-mobile class to the body if the platform is mobile
        if (this._platform.ANDROID || this._platform.IOS) {
            this.document.body.classList.add('is-mobile');
        }

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    reset() {
        this.idle.watch();
    }

    checkRouterEvent(routerEvent: Event): void {
        if (routerEvent instanceof NavigationStart) {
            this.loading = true;
        }
        if (routerEvent instanceof NavigationEnd ||
            routerEvent instanceof NavigationCancel ||
            routerEvent instanceof NavigationError) {
            this.loading = false;
        }
    }

    ngOnInit(): void {
        this.appInit();
    }

    ngAfterViewInit(): void {
        $.AdminBSB.activateAll();
        $.AdminBSB.activateDemo();
    }

    onResize(event) {
        // exported from $.AdminBSB.activateAll
        $.AdminBSB.leftSideBar.setMenuHeight();
        $.AdminBSB.leftSideBar.checkStatuForResize(false);

        // exported from $.AdminBSB.activateDemo
        $.AdminBSB.demo.setSkinListHeightAndScroll();
        $.AdminBSB.demo.setSettingListHeightAndScroll();
    }

    appInit() {
        SignalRAspNetCoreHelper.initSignalR();
        abp.event.on('abp.notifications.received', userNotification => {
            abp.notifications.showUiNotifyForUserNotification(userNotification);
            // Desktop notification
            Push.create('AbpZeroTemplate', {
                body: userNotification.notification.data.message,
                icon: abp.appPath + 'assets/app-logo-small.png',
                timeout: 6000,
                onClick: function () {
                    window.focus();
                    this.close();
                }
            });
        });

    }
}