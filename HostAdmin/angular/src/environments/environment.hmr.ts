// "Hot Module Replacement" enabled environment

export const environment = {
    production: false,
    apiServerBaseUrl: 'http://localhost:52245/api/services/',
    apiPlatformBaseUrl: 'https://localhost:44380/',
    apiPlatformUrl: 'https://localhost:44380/api/services/',
    hmr: true,
    appConfig: 'appconfig.json',
    isB2CInstance: false,
    instance1EnabledTenant: 'quinnox',
    instance2EnabledTenant: '',
    instance3EnabledTenant: '',

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
        
        // SSO -> OIDC Client configurations for second instance
        authority: 'https://localhost:44380/',
        client_id: 'angular',
        redirect_uri: 'http://localhost:4200/auth-callback',
        post_logout_redirect_uri: 'http://localhost:4200/',
        response_type: "code",
        scope: "openid profile default-api",
        filterProtocolClaims: true,
        loadUserInfo: true
    },
    
    instance2: {
        appConfig: 'appconfig_instance1.json',
        apiServerBaseUrl: 'http://localhost:52245/api/services/',
        apiPlatformBaseUrl: 'https://localhost:44380/',
        apiPlatformUrl: 'https://localhost:44380/api/services/',
        
        // SSO -> OIDC Client configurations for third instance
        authority: 'https://localhost:44380/',
        client_id: 'angular',
        redirect_uri: 'http://localhost:4200/auth-callback',
        post_logout_redirect_uri: 'http://localhost:4200/',
        response_type: "code",
        scope: "openid profile default-api",
        filterProtocolClaims: true,
        loadUserInfo: true
    },
    
    instance3: {
        appConfig: 'appconfig_instance1.json',
        apiServerBaseUrl: 'http://localhost:52245/api/services/',
        apiPlatformBaseUrl: 'https://localhost:44380/',
        apiPlatformUrl: 'https://localhost:44380/api/services/',
        
        // SSO -> OIDC Client configurations for fourth instance
        authority: 'https://localhost:44380/',
        client_id: 'angular',
        redirect_uri: 'http://localhost:4200/auth-callback',
        post_logout_redirect_uri: 'http://localhost:4200/',
        response_type: "code",
        scope: "openid profile default-api",
        filterProtocolClaims: true,
        loadUserInfo: true
    },

    instance4: {
        appConfig: 'appconfig_instance1.json',
        apiServerBaseUrl: 'http://localhost:52245/api/services/',
        apiPlatformBaseUrl: 'https://localhost:44380/',
        apiPlatformUrl: 'https://localhost:44380/api/services/',
        
        // SSO -> OIDC Client configurations for fourth instance
        authority: 'https://localhost:44380/',
        client_id: 'angular',
        redirect_uri: 'http://localhost:4200/auth-callback',
        post_logout_redirect_uri: 'http://localhost:4200/',
        response_type: "code",
        scope: "openid profile default-api",
        filterProtocolClaims: true,
        loadUserInfo: true
    }
};
