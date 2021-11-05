// "Hot Module Replacement" enabled environment

export const environment = {
    production: false,
    apiServerBaseUrl: 'https://lx-lms.azurewebsites.net/api/services/',
    apiPlatformBaseUrl: 'https://lx-platform.azurewebsites.net/',
    apiPlatformUrl: 'https://lx-platform.azurewebsites.net/api/services/',
    apiSocialBaseUrl: 'https://lx-social.azurewebsites.net/',
    apiSocialServiceBaseUrl: 'https://lx-social.azurewebsites.net/api/services/',
    apiAnalyticsBaseUrl: '',
    apiAnalyticsServiceBaseUrl: '',
    hmr: false,
    appConfig: 'appconfig.staging.json',
    isB2CInstance: false,
    instance1EnabledTenant: 'cgi',
    instance2EnabledTenant: '',
    instance3EnabledTenant: '',
    instance4EnabledTenant: '',
    azureFunctionEndPoint: 'https://irispoc.azurewebsites.net/api/ServiceBusEnqueue',

    // SSO -> OIDC Client configurations
    authority: 'https://lx-platform.azurewebsites.net/',
    client_id: 'angular',
    redirect_uri: 'https://techademylms.azurewebsites.net/auth-callback',
    post_logout_redirect_uri: 'https://techademylms.azurewebsites.net/',
    response_type: "code",
    scope: "openid profile default-api",
    filterProtocolClaims: true,
    loadUserInfo: true,

    instance1: {
        appConfig: 'appconfig.staging_instance1.json',
        apiServerBaseUrl: 'https://lx-lms-s1.azurewebsites.net/api/services/',
        apiPlatformBaseUrl: 'https://lx-platform-s1.azurewebsites.net/',
        apiPlatformUrl: 'https://lx-platform-s1.azurewebsites.net/api/services/',
        apiSocialBaseUrl: 'https://lx-social.azurewebsites.net/',
        apiSocialServiceBaseUrl: 'https://lx-social.azurewebsites.net/api/services/',
        apiAnalyticsBaseUrl: '',
        apiAnalyticsServiceBaseUrl: '',

        // SSO -> OIDC Client configurations for second instance
        authority: 'https://lx-platform-s1.azurewebsites.net/',
        client_id: 'angular',
        redirect_uri: 'https://techademylms.azurewebsites.net/auth-callback',
        post_logout_redirect_uri: 'https://techademylms.azurewebsites.net/',
        response_type: "code",
        scope: "openid profile default-api",
        filterProtocolClaims: true,
        loadUserInfo: true,
        azureFunctionEndPoint: 'https://irispoc.azurewebsites.net/api/ServiceBusEnqueue'
    },

    instance2: {
        appConfig: 'appconfig.staging_instance1.json',
        apiServerBaseUrl: 'https://lx-lms-s1.azurewebsites.net/api/services/',
        apiPlatformBaseUrl: 'https://lx-platform-s1.azurewebsites.net/',
        apiPlatformUrl: 'https://lx-platform-s1.azurewebsites.net/api/services/',
        apiSocialBaseUrl: 'https://lx-social.azurewebsites.net/',
        apiSocialServiceBaseUrl: 'https://lx-social.azurewebsites.net/api/services/',
        apiAnalyticsBaseUrl: '',
        apiAnalyticsServiceBaseUrl: '',

        // SSO -> OIDC Client configurations for third instance
        authority: 'https://lx-platform-s1.azurewebsites.net/',
        client_id: 'angular',
        redirect_uri: 'https://techademylms.azurewebsites.net/auth-callback',
        post_logout_redirect_uri: 'https://techademylms.azurewebsites.net/',
        response_type: "code",
        scope: "openid profile default-api",
        filterProtocolClaims: true,
        loadUserInfo: true,
        azureFunctionEndPoint: 'https://irispoc.azurewebsites.net/api/ServiceBusEnqueue'
    },

    instance3: {
        appConfig: 'appconfig.staging_instance1.json',
        apiServerBaseUrl: 'https://lx-lms-s1.azurewebsites.net/api/services/',
        apiPlatformBaseUrl: 'https://lx-platform-s1.azurewebsites.net/',
        apiPlatformUrl: 'https://lx-platform-s1.azurewebsites.net/api/services/',
        apiSocialBaseUrl: 'https://lx-social.azurewebsites.net/',
        apiSocialServiceBaseUrl: 'https://lx-social.azurewebsites.net/api/services/',
        apiAnalyticsBaseUrl: '',
        apiAnalyticsServiceBaseUrl: '',
        // SSO -> OIDC Client configurations for fourth instance
        authority: 'https://lx-platform-s1.azurewebsites.net/',
        client_id: 'angular',
        redirect_uri: 'https://techademylms.azurewebsites.net/auth-callback',
        post_logout_redirect_uri: 'https://techademylms.azurewebsites.net/',
        response_type: "code",
        scope: "openid profile default-api",
        filterProtocolClaims: true,
        loadUserInfo: true,
        azureFunctionEndPoint: 'https://irispoc.azurewebsites.net/api/ServiceBusEnqueue'
    },
    instance4: {
        appConfig: 'appconfig.staging_instance1.json',
        apiServerBaseUrl: 'https://lx-lms-s1.azurewebsites.net/api/services/',
        apiPlatformBaseUrl: 'https://lx-platform-s1.azurewebsites.net/',
        apiPlatformUrl: 'https://lx-platform-s1.azurewebsites.net/api/services/',
        apiSocialBaseUrl: 'https://lx-social.azurewebsites.net/',
        apiSocialServiceBaseUrl: 'https://lx-social.azurewebsites.net/api/services/',
        apiAnalyticsBaseUrl: '',
        apiAnalyticsServiceBaseUrl: '',
        
        // SSO -> OIDC Client configurations for fourth instance
        authority: 'https://lx-platform-s1.azurewebsites.net/',
        client_id: 'angular',
        redirect_uri: 'https://techademylms.azurewebsites.net/auth-callback',
        post_logout_redirect_uri: 'https://techademylms.azurewebsites.net/',
        response_type: "code",
        scope: "openid profile default-api",
        filterProtocolClaims: true,
        loadUserInfo: true,
        azureFunctionEndPoint: 'https://irispoc.azurewebsites.net/api/ServiceBusEnqueue'
    }
};
