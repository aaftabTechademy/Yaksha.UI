import { Injectable } from '@angular/core';
import { AppConsts } from '@shared/AppConsts';
import { AuthenticateModel, AuthenticateResultModel, TokenAuthServiceProxy } from '@shared/service-proxies/service-proxies';
import { finalize } from 'rxjs/operators';
import { UrlHelper } from '@shared/helpers/UrlHelper';
import { Constants } from '@app/models/constants';
import { ToastrService } from 'ngx-toastr';
import { LogService, TokenService, UtilsService } from 'abp-ng2-module';

@Injectable()
export class LoginService {

    static readonly twoFactorRememberClientTokenName = 'TwoFactorRememberClientToken';

    authenticateModel: AuthenticateModel;
    authenticateResult: AuthenticateResultModel;
    isLoading: boolean;
    rememberMe: boolean;

    constructor(
        private _tokenAuthService: TokenAuthServiceProxy,
        private _utilsService: UtilsService,
        private _tokenService: TokenService,
        private _logService: LogService,
        private toastrService: ToastrService
    ) {
        this.clear();
    }

    authenticate(finallyCallback?: () => void): void {
        finallyCallback = finallyCallback || (() => { });

        this.authenticateModel.tenancyName = this._utilsService.getCookieValue(Constants.tenantName);

        this._tokenAuthService
            .authenticate(this.authenticateModel)
            .pipe(
                finalize(() => {
                    this.doneLoading();
                }))
            .subscribe((result: AuthenticateResultModel) => {
                this.processAuthenticateResult(result);
            });
    }

    private doneLoading(): void {
        this.isLoading = false;
    }

    getToken(finallyCallback?: () => void): void {
        this._tokenService.getToken();
    }

    private processAuthenticateResult(authenticateResult: AuthenticateResultModel) {
        this.authenticateResult = authenticateResult;
        if (authenticateResult.accessToken) {
            // Successfully logged in
            this.login(
                authenticateResult.accessToken,
                authenticateResult.encryptedAccessToken,
                authenticateResult.expireInSeconds,
                this.rememberMe);

        } else {
            this.toastrService.error(this.authenticateResult.errorMessage);
            // Unexpected result!
            //this._logService.warn('Unexpected authenticateResult!');
        }
    }

    private login(accessToken: string, encryptedAccessToken: string, expireInSeconds: number, rememberMe?: boolean): void {
        const tokenExpireDate = rememberMe ? (new Date(new Date().getTime() + 1000 * expireInSeconds)) : undefined;

        this._tokenService.setToken(
            accessToken,
            tokenExpireDate
        );

        this._utilsService.setCookieValue(
            AppConsts.authorization.encrptedAuthTokenName,
            encryptedAccessToken,
            tokenExpireDate,
            abp.appPath
        );
        let initialUrl = UrlHelper.initialUrl;
        if (initialUrl.indexOf('/account') > 0) {
            initialUrl = AppConsts.appBaseUrl;
        }
        location.href = initialUrl;
    }

    private clear(): void {
        this.authenticateModel = new AuthenticateModel();
        this.authenticateModel.rememberClient = false;
        this.authenticateResult = null;
        this.rememberMe = false;
    }
}
