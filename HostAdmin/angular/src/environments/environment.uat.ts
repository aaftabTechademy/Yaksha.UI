// "Hot Module Replacement" enabled environment

export const environment = {
    production: true,
    apiServerBaseUrl: 'https://api-iris.azurewebsites.net/api/services/',
    apiPlatformBaseUrl: 'https://iamserver.azurewebsites.net/',
    apiPlatformUrl: 'https://iamserver.azurewebsites.net/api/services/',
    apiSocialBaseUrl: 'https://api-social-iris.azurewebsites.net/',
    apiSocialServiceBaseUrl: 'https://api-social-iris.azurewebsites.net/api/services/',
    apiAnalyticsBaseUrl: 'https://api-analytics-iris.azurewebsites.net/',
    apiAnalyticsServiceBaseUrl: 'https://api-analytics-iris.azurewebsites.net/api/services/',
    hmr: false,
    appConfig: 'appconfig.uat.json',
    isB2CInstance: false,
    instance1EnabledTenant: 'mosaiclti',
    instance2EnabledTenant: '',
    instance3EnabledTenant: '',
    instance4EnabledTenant: '',
    azureFunctionEndPoint: 'https://iris-uat-sbfn.azurewebsites.net/api/ServiceBusEnqueue',

    // SSO -> OIDC Client configurations
    authority: 'https://iamserver.azurewebsites.net/',
    client_id: 'angular',
    redirect_uri: 'https://ui-iris.azurewebsites.net/auth-callback',
    post_logout_redirect_uri: 'https://ui-iris.azurewebsites.net/',
    response_type: "code",
    scope: "openid profile default-api",
    filterProtocolClaims: true,
    loadUserInfo: true,

    instance1: {
        appConfig: 'appconfig.uat_instance1.json',
        apiServerBaseUrl: 'https://api-iris.azurewebsites.net/api/services/',
        apiPlatformBaseUrl: 'https://iamserver.azurewebsites.net/',
        apiPlatformUrl: 'https://iamserver.azurewebsites.net/api/services/',
        apiSocialBaseUrl: 'https://api-social-iris.azurewebsites.net/',
        apiSocialServiceBaseUrl: 'https://api-social-iris.azurewebsites.net/api/services/',
        apiAnalyticsBaseUrl: 'https://api-analytics-iris.azurewebsites.net/',
        apiAnalyticsServiceBaseUrl: 'https://api-analytics-iris.azurewebsites.net/api/services/',
        
        // SSO -> OIDC Client configurations for second instance
        authority: 'https://iamserver.azurewebsites.net/',
        client_id: 'angular',
        redirect_uri: 'https://ui-iris.azurewebsites.net/auth-callback',
        post_logout_redirect_uri: 'https://ui-iris.azurewebsites.net/',
        response_type: "code",
        scope: "openid profile default-api",
        filterProtocolClaims: true,
        loadUserInfo: true,
        azureFunctionEndPoint: 'https://iris-uat-sbfn.azurewebsites.net/api/ServiceBusEnqueue'
    },

    instance2: {
        appConfig: 'appconfig.uat_instance1.json',
        apiServerBaseUrl: 'https://api-iris.azurewebsites.net/api/services/',
        apiPlatformBaseUrl: 'https://iamserver.azurewebsites.net/',
        apiPlatformUrl: 'https://iamserver.azurewebsites.net/api/services/',
        apiSocialBaseUrl: 'https://api-social-iris.azurewebsites.net/',
        apiSocialServiceBaseUrl: 'https://api-social-iris.azurewebsites.net/api/services/',
        apiAnalyticsBaseUrl: 'https://api-analytics-iris.azurewebsites.net/',
        apiAnalyticsServiceBaseUrl: 'https://api-analytics-iris.azurewebsites.net/api/services/',
        
        // SSO -> OIDC Client configurations for third instance
        authority: 'https://iamserver.azurewebsites.net/',
        client_id: 'angular',
        redirect_uri: 'https://ui-iris.azurewebsites.net/auth-callback',
        post_logout_redirect_uri: 'https://ui-iris.azurewebsites.net/',
        response_type: "code",
        scope: "openid profile default-api",
        filterProtocolClaims: true,
        loadUserInfo: true,
        azureFunctionEndPoint: 'https://iris-uat-sbfn.azurewebsites.net/api/ServiceBusEnqueue'
    },

    instance3: {
        appConfig: 'appconfig.uat_instance1.json',
        apiServerBaseUrl: 'https://api-iris.azurewebsites.net/api/services/',
        apiPlatformBaseUrl: 'https://iamserver.azurewebsites.net/',
        apiPlatformUrl: 'https://iamserver.azurewebsites.net/api/services/',
        apiSocialBaseUrl: 'https://api-social-iris.azurewebsites.net/',
        apiSocialServiceBaseUrl: 'https://api-social-iris.azurewebsites.net/api/services/',
        apiAnalyticsBaseUrl: 'https://api-analytics-iris.azurewebsites.net/',
        apiAnalyticsServiceBaseUrl: 'https://api-analytics-iris.azurewebsites.net/api/services/',
        
        // SSO -> OIDC Client configurations for fourth instance
        authority: 'https://iamserver.azurewebsites.net/',
        client_id: 'angular',
        redirect_uri: 'https://ui-iris.azurewebsites.net/auth-callback',
        post_logout_redirect_uri: 'https://ui-iris.azurewebsites.net/',
        response_type: "code",
        scope: "openid profile default-api",
        filterProtocolClaims: true,
        loadUserInfo: true,
        azureFunctionEndPoint: 'https://iris-uat-sbfn.azurewebsites.net/api/ServiceBusEnqueue'
    },
    
    instance4: {
        appConfig: 'appconfig.uat_instance1.json',
        apiServerBaseUrl: 'https://api-iris.azurewebsites.net/api/services/',
        apiPlatformBaseUrl: 'https://iamserver.azurewebsites.net/',
        apiPlatformUrl: 'https://iamserver.azurewebsites.net/api/services/',
        apiSocialBaseUrl: 'https://api-social-iris.azurewebsites.net/',
        apiSocialServiceBaseUrl: 'https://api-social-iris.azurewebsites.net/api/services/',
        apiAnalyticsBaseUrl: 'https://api-analytics-iris.azurewebsites.net/',
        apiAnalyticsServiceBaseUrl: 'https://api-analytics-iris.azurewebsites.net/api/services/',
        
        // SSO -> OIDC Client configurations for fourth instance
        authority: 'https://iamserver.azurewebsites.net/',
        client_id: 'angular',
        redirect_uri: 'https://ui-iris.azurewebsites.net/auth-callback',
        post_logout_redirect_uri: 'https://ui-iris.azurewebsites.net/',
        response_type: "code",
        scope: "openid profile default-api",
        filterProtocolClaims: true,
        loadUserInfo: true,
        azureFunctionEndPoint: 'https://iris-uat-sbfn.azurewebsites.net/api/ServiceBusEnqueue'
    }
};
