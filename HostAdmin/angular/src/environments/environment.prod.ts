// "Production" enabled environment

export const environment = {
    production: true,
    apiServerBaseUrl: 'https://api-prod-iris.azurewebsites.net/api/services/',
    apiPlatformBaseUrl: 'https://idp-prod-iris.azurewebsites.net/',
    apiPlatformUrl: 'https://idp-prod-iris.azurewebsites.net/api/services/',
    apiSocialBaseUrl: 'https://api-prod-social-iris.azurewebsites.net/',
    apiSocialServiceBaseUrl: 'https://api-prod-social-iris.azurewebsites.net/api/services/',
    apiAnalyticsBaseUrl: 'https://api-prod-analytics-iris.azurewebsites.net/',
    apiAnalyticsServiceBaseUrl: 'https://api-prod-analytics-iris.azurewebsites.net/api/services/',
    
    hmr: false,
    appConfig: 'appconfig.production.json',
    isB2CInstance: false,
    instance1EnabledTenant: 'quinnox',
    instance2EnabledTenant: 'cloudassert',
    instance3EnabledTenant: 'tcsion',
    instance4EnabledTenant: 'hpe',
    azureFunctionEndPoint: 'https://iris-prod-sbfn.azurewebsites.net/api/ServiceBusEnqueue',

    // SSO -> OIDC Client configurations
    authority: 'https://idp-prod-iris.azurewebsites.net/',
    client_id: 'angular',
    redirect_uri: 'https://techademy.in/auth-callback',
    post_logout_redirect_uri: 'https://techademy.in/',
    response_type: "code",
    scope: "openid profile default-api",
    filterProtocolClaims: true,
    loadUserInfo: true,
    
    instance1: {
        appConfig: 'appconfig.production_instance1.json',
        apiServerBaseUrl: 'https://api-prod-iris-quinnox.azurewebsites.net/api/services/',
        apiPlatformBaseUrl: 'https://idp-prod-iris-quinnox.azurewebsites.net/',
        apiPlatformUrl: 'https://idp-prod-iris-quinnox.azurewebsites.net/api/services/',
        apiSocialBaseUrl: 'https://api-prod-social-iris-quinnox.azurewebsites.net/',
        apiSocialServiceBaseUrl: 'https://api-prod-social-iris-quinnox.azurewebsites.net/api/services/',
        apiAnalyticsBaseUrl: 'https://api-prod-analytics-iris-quinnox.azurewebsites.net/',
        apiAnalyticsServiceBaseUrl: 'https://api-prod-analytics-iris-quinnox.azurewebsites.net/api/services/',
               
        // SSO -> OIDC Client configurations for second instance
        authority: 'https://idp-prod-iris-quinnox.azurewebsites.net/',
        client_id: 'angular',
        redirect_uri: 'https://techademy.in/auth-callback',
        post_logout_redirect_uri: 'https://techademy.in/',
        response_type: "code",
        scope: "openid profile default-api",
        filterProtocolClaims: true,
        loadUserInfo: true,
        azureFunctionEndPoint: 'https://iris-prod-sbfn.azurewebsites.net/api/ServiceBusEnqueue'
    },

    instance2: {
        appConfig: 'appconfig.production_instance2.json',
        apiServerBaseUrl: 'https://api-prod-iris-cloudassert.azurewebsites.net/api/services/',
        apiPlatformBaseUrl: 'https://idp-prod-iris-cloudassert.azurewebsites.net/',
        apiPlatformUrl: 'https://idp-prod-iris-cloudassert.azurewebsites.net/api/services/',
        apiSocialBaseUrl: 'https://api-prod-social-iris-cloudassert.azurewebsites.net/',
        apiSocialServiceBaseUrl: 'https://api-prod-social-iris-cloudassert.azurewebsites.net/api/services/',
        apiAnalyticsBaseUrl: 'https://api-prod-analytics-iris-cloudassert.azurewebsites.net/',
        apiAnalyticsServiceBaseUrl: 'https://api-prod-analytics-iris-cloudassert.azurewebsites.net/api/services/',
                
        // SSO -> OIDC Client configurations for third instance
        authority: 'https://idp-prod-iris-cloudassert.azurewebsites.net/',
        client_id: 'angular',
        redirect_uri: 'https://techademy.in/auth-callback',
        post_logout_redirect_uri: 'https://techademy.in/',
        response_type: "code",
        scope: "openid profile default-api",
        filterProtocolClaims: true,
        loadUserInfo: true,
        azureFunctionEndPoint: 'https://iris-prod-sbfn.azurewebsites.net/api/ServiceBusEnqueue'
    },

    instance3: {
        appConfig: 'appconfig.production_instance3.json',
        apiServerBaseUrl: 'https://api-prod-iris-tcsion.azurewebsites.net/api/services/',
        apiPlatformBaseUrl: 'https://idp-prod-iris-tcsion.azurewebsites.net/',
        apiPlatformUrl: 'https://idp-prod-iris-tcsion.azurewebsites.net/api/services/',
        apiSocialBaseUrl: 'https://api-prod-social-iris-tcsion.azurewebsites.net/',
        apiSocialServiceBaseUrl: 'https://api-prod-social-iris-tcsion.azurewebsites.net/api/services/',
        apiAnalyticsBaseUrl: 'https://api-prod-analytics-iris-tcsion.azurewebsites.net/',
        apiAnalyticsServiceBaseUrl: 'https://api-prod-analytics-iris-tcsion.azurewebsites.net/api/services/',
               
        // SSO -> OIDC Client configurations for third instance
        authority: 'https://idp-prod-iris-tcsion.azurewebsites.net/',
        client_id: 'angular',
        redirect_uri: 'https://techademy.in/auth-callback',
        post_logout_redirect_uri: 'https://techademy.in/',
        response_type: "code",
        scope: "openid profile default-api",
        filterProtocolClaims: true,
        loadUserInfo: true,
        azureFunctionEndPoint: 'https://iris-prod-sbfn.azurewebsites.net/api/ServiceBusEnqueue'
    },

    instance4: {
        appConfig: 'appconfig.production_instance4.json',
        apiServerBaseUrl: 'https://api-prod-iris-hpe.azurewebsites.net/api/services/',
        apiPlatformBaseUrl: 'https://idp-prod-iris-hpe.azurewebsites.net/',
        apiPlatformUrl: 'https://idp-prod-iris-hpe.azurewebsites.net/api/services/',
        apiSocialBaseUrl: 'https://api-prod-social-iris-hpe.azurewebsites.net/',
        apiSocialServiceBaseUrl: 'https://api-prod-social-iris-hpe.azurewebsites.net/api/services/',
        apiAnalyticsBaseUrl: 'https://api-prod-analytics-iris-hpe.azurewebsites.net/',
        apiAnalyticsServiceBaseUrl: 'https://api-prod-analytics-iris-hpe.azurewebsites.net/api/services/',
        // SSO -> OIDC Client configurations for third instance
        authority: 'https://idp-prod-iris-hpe.azurewebsites.net/',
        client_id: 'angular',
        redirect_uri: 'https://techademy.in/auth-callback',
        post_logout_redirect_uri: 'https://techademy.in/',
        response_type: "code",
        scope: "openid profile default-api",
        filterProtocolClaims: true,
        loadUserInfo: true,
        azureFunctionEndPoint: 'https://iris-prod-sbfn.azurewebsites.net/api/ServiceBusEnqueue'
    },
};
