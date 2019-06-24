/*
 * Configuration values needed in js codes
 *
 * NOTE:
 * Please use the following command to avoid accidentally committing personal changes
 * git update-index --assume-unchanged src/javascript/config.js
 *
 */
const domain_config = {
    production: {
        hostname: 'www.deriv.com',
        app_id: 11780,
    },
    staging: {
        hostname: 'staging.deriv.com',
        app_id: 16303,
    },
    test: {
        app_id: 16929,
    },
    local: {
        hostname: 'localhost',
        app_id: 17044,
    },
}

const isProduction = () =>
    domain_config.production.hostname === window.location.hostname

const isStaging = () =>
    domain_config.staging.hostname === window.location.hostname

const isLocalHost = () =>
    domain_config.local.hostname === window.location.hostname

const getAppId = () => {
    let app_id = null
    const user_app_id = '' // you can insert Application ID of your registered application here
    const config_app_id = window.localStorage.getItem('config.app_id')
    if (config_app_id) {
        app_id = config_app_id
    } else if (isStaging()) {
        window.localStorage.removeItem('config.default_app_id')
        app_id = domain_config.staging.app_id
    } else if (user_app_id.length) {
        window.localStorage.setItem('config.default_app_id', user_app_id) // it's being used in endpoint chrome extension - please do not remove
        app_id = user_app_id
    } else if (isLocalHost()) {
        app_id = domain_config.local.app_id
    } else {
        window.localStorage.removeItem('config.default_app_id')
        app_id = isProduction()
            ? domain_config.production.app_id
            : domain_config.test.app_id
    }
    return app_id
}

const getSocketURL = () => {
    let server_url = window.localStorage.getItem('config.server_url')
    if (!server_url) {
        server_url = 'green.binaryws.com'
    }
    return `wss://${server_url}/websockets/v3`
}

export { getAppId, getSocketURL }
