// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
    production: false,
    apiServerBaseUrl: 'https://lx-lms.azurewebsites.net/api/services/',
    apiPlatformBaseUrl: 'https://lx-platform.azurewebsites.net/',
    apiPlatformUrl: 'https://lx-platform.azurewebsites.net/api/services/',
    apiSocialBaseUrl: 'http://localhost:62245/',
    apiSocialServiceBaseUrl: 'http://localhost:62245/api/services/',
    apiAnalyticsBaseUrl: 'http://localhost:42245/',
    apiAnalyticsServiceBaseUrl: 'http://localhost:42245/api/services/',
    hmr: false,
    appConfig: 'appconfig.json',
    isB2CInstance: false,
    instance1EnabledTenant: 'mosaiclti',
    instance2EnabledTenant: '',
    instance3EnabledTenant: '',
    instance4EnabledTenant: '',
    azureFunctionEndPoint: 'https://irispoc.azurewebsites.net/api/ServiceBusEnqueue',

    // SSO -> OIDC Client configurations
    authority: 'https://localhost:44380/',
    client_id: 'angular',
    redirect_uri: 'http://localhost:4200/auth-callback',
    post_logout_redirect_uri: 'http://localhost:4200/',
    response_type: "code",
    scope: "openid profile default-api",
    filterProtocolClaims: true,
    loadUserInfo: true,

    instance1: {
        appConfig: 'appconfig_instance1.json',
        apiServerBaseUrl: 'http://localhost:52245/api/services/',
        apiPlatformBaseUrl: 'https://localhost:44380/',
        apiPlatformUrl: 'https://localhost:44380/api/services/',
        apiSocialBaseUrl: 'http://localhost:62245/',
        apiSocialServiceBaseUrl: 'http://localhost:62245/api/services/',
        apiAnalyticsBaseUrl: 'http://localhost:42245/',
        apiAnalyticsServiceBaseUrl: 'http://localhost:42245/api/services/',

        // SSO -> OIDC Client configurations for second instance
        authority: 'https://localhost:44380/',
        client_id: 'angular',
        redirect_uri: 'http://localhost:4200/auth-callback',
        post_logout_redirect_uri: 'http://localhost:4200/',
        response_type: "code",
        scope: "openid profile default-api",
        filterProtocolClaims: true,
        loadUserInfo: true,
        azureFunctionEndPoint: 'https://irispoc.azurewebsites.net/api/ServiceBusEnqueue'
    },

    instance2: {
        appConfig: 'appconfig_instance1.json',
        apiServerBaseUrl: 'http://localhost:52245/api/services/',
        apiPlatformBaseUrl: 'https://localhost:44380/',
        apiPlatformUrl: 'https://localhost:44380/api/services/',
        apiSocialBaseUrl: 'http://localhost:62245/',
        apiSocialServiceBaseUrl: 'http://localhost:62245/api/services/',
        apiAnalyticsBaseUrl: 'http://localhost:42245/',
        apiAnalyticsServiceBaseUrl: 'http://localhost:42245/api/services/',

        // SSO -> OIDC Client configurations for third instance
        authority: 'https://localhost:44380/',
        client_id: 'angular',
        redirect_uri: 'http://localhost:4200/auth-callback',
        post_logout_redirect_uri: 'http://localhost:4200/',
        response_type: "code",
        scope: "openid profile default-api",
        filterProtocolClaims: true,
        loadUserInfo: true,
        azureFunctionEndPoint: 'https://irispoc.azurewebsites.net/api/ServiceBusEnqueue'
    },

    instance3: {
        appConfig: 'appconfig_instance1.json',
        apiServerBaseUrl: 'http://localhost:52245/api/services/',
        apiPlatformBaseUrl: 'https://localhost:44380/',
        apiPlatformUrl: 'https://localhost:44380/api/services/',
        apiSocialBaseUrl: 'http://localhost:62245/',
        apiSocialServiceBaseUrl: 'http://localhost:62245/api/services/',
        apiAnalyticsBaseUrl: 'http://localhost:42245/',
        apiAnalyticsServiceBaseUrl: 'http://localhost:42245/api/services/',

        // SSO -> OIDC Client configurations for fourth instance
        authority: 'https://localhost:44380/',
        client_id: 'angular',
        redirect_uri: 'http://localhost:4200/auth-callback',
        post_logout_redirect_uri: 'http://localhost:4200/',
        response_type: "code",
        scope: "openid profile default-api",
        filterProtocolClaims: true,
        loadUserInfo: true,
        azureFunctionEndPoint: 'https://irispoc.azurewebsites.net/api/ServiceBusEnqueue'
    },
    instance4: {
        appConfig: 'appconfig_instance4.json',
        apiServerBaseUrl: 'http://localhost:52245/api/services/',
        apiPlatformBaseUrl: 'https://localhost:44380/',
        apiPlatformUrl: 'https://localhost:44380/api/services/',
        apiSocialBaseUrl: 'http://localhost:62245/',
        apiSocialServiceBaseUrl: 'http://localhost:62245/api/services/',
        apiAnalyticsBaseUrl: 'http://localhost:42245/',
        apiAnalyticsServiceBaseUrl: 'http://localhost:42245/api/services/',

        // SSO -> OIDC Client configurations for fourth instance
        authority: 'https://localhost:44380/',
        client_id: 'angular',
        redirect_uri: 'http://localhost:4200/auth-callback',
        post_logout_redirect_uri: 'http://localhost:4200/',
        response_type: "code",
        scope: "openid profile default-api",
        filterProtocolClaims: true,
        loadUserInfo: true,
        azureFunctionEndPoint: 'https://irispoc.azurewebsites.net/api/ServiceBusEnqueue'
    }
};
