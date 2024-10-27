export const privateConfig = { 

}
export const appConfig = {
    project_name :  process.env.PROJECT_NAME || "Migriño Portfolio"
}
export const publicConfig = {
    primaryColor: process.env.NUXT_PUBLIC_PRIMARY_COLOR || '#900303',
    secondaryColor: process.env.NUXT_PUBLIC_SECONDARY_COLOR || '#F6C500',
    lightSecondaryColor: process.env.NUXT_PUBLIC_LIGHT_SECONDARY_COLOR || '#fae17f',
    hoverColor: process.env.NUXT_PUBLIC_HOVER_COLOR || '#9c201c',
    primaryTextActiveColor: process.env.NUXT_PUBLIC_PRIMARY_TEXT_ACTIVE_COLOR || '#690003',
    primaryBorderColor: process.env.NUXT_PUBLIC_PRIMARY_BORDER_COLOR || '#b5645b',
    primaryBorderHoverColor: process.env.NUXT_PUBLIC_PRIMARY_BORDER_HOVER_COLOR || '#a84139',
    primaryBgHoverColor: process.env.NUXT_PUBLIC_PRIMARY_BG_HOVER_COLOR || '#c28980',
    primaryBgColor: process.env.NUXT_PUBLIC_PRIMARY_BG_COLOR || '#cfbdba',
    color: {
        blue: process.env.NUXT_PUBLIC_COLOR_BLUE || '#1890FF',
        blueAlt: process.env.NUXT_PUBLIC_COLOR_BLUE_ALT || '#E6F7FF',
        lightBlue: process.env.NUXT_PUBLIC_COLOR_LIGHT_Blue || '#91D5FF',
        lightBlueAlt: process.env.NUXT_PUBLIC_COLOR_LIGHT_Blue_ALT || '#E6F7FF',
        green: process.env.NUXT_PUBLIC_COLOR_GREEN || '#52C41A',
        greenAlt: process.env.NUXT_PUBLIC_COLOR_GREEN_ALT || '#F6FFED',
        gold: process.env.NUXT_PUBLIC_COLOR_GOLD || '#FAAD14',
        goldAlt: process.env.NUXT_PUBLIC_COLOR_GOLD_ALT || '#FFFBE6',
        danger: process.env.NUXT_PUBLIC_COLOR_DANGER || '#FF4D4F',
        dangerAlt: process.env.NUXT_PUBLIC_COLOR_DANGER_ALT || '#FFF1F0',
        orange: process.env.NUXT_PUBLIC_COLOR_ORANGE || '#FA8C16',
        orangeAlt: process.env.NUXT_PUBLIC_COLOR_ORANGE_ALT || '#FFF7E6',
        magenta: process.env.NUXT_PUBLIC_COLOR_MAGENTA || '#EB2F96',
        magentaAlt: process.env.NUXT_PUBLIC_COLOR_MAGENTA_ALT || '#FFF0F6',
        purple: process.env.NUXT_PUBLIC_COLOR_PURPLE || '#9254DE',
        purpleAlt: process.env.NUXT_PUBLIC_COLOR_PURPLE_ALT || '#F9F0FF',
        cyan: process.env.NUXT_PUBLIC_COLOR_CYAN || '#13C2C2',
        cyanAlt: process.env.NUXT_PUBLIC_COLOR_CYAN_ALT || '#E6FFFB',
        text: process.env.NUXT_PUBLIC_COLOR_TEXT || '#000000D9',
        textAlt: process.env.NUXT_PUBLIC_COLOR_TEXT_ALT || '#00000073',
        white: process.env.NUXT_PUBLIC_COLOR_WHITE || '#FFFFFF',
        whiteAlt: process.env.NUXT_PUBLIC_COLOR_WHITE_ALT || '#FFFFFFA6',
        gray: process.env.NUXT_PUBLIC_COLOR_GRAY || '#F8F9FA',
        sidebar: process.env.NUXT_PUBLIC_COLOR_SIDEBAR || '#191970',
        bgSidebar: process.env.NUXT_PUBLIC_COLOR_BG_SIDEBAR || '#1919701A',
        bgAnnouncement: process.env.NUXT_PUBLIC_COLOR_BG_ANNOUNCEMENT || '#50508E',
        bgBody: process.env.NUXT_PUBLIC_COLOR_BG_BODY || '#F0F2F5',
    },
    baseURL: process.env.NUXT_PUBLIC_BASE_URL || 'https://api.sandbox.centralizedinc.com',
    serviceUrl: process.env.NUXT_PUBLIC_SERVICE_URL || 'http://localhost:5700/',
    appTitle: 'Security Center Command',
    api: {
       
    },
    auth: {
        // baseURL: process.env.NUXT_PUBLIC_AUTH_BASE_URL,
        // computed: {
        //     origin: process.env.NUXT_PUBLIC_AUTH_COMPUTED_ORIGIN,
        //     fullBaseUrl: process.env.NUXT_PUBLIC_AUTH_COMPUTED_FULL_BASE_URL',
        //     pathname: '/',
        // },
        // provider: {
        //     endpoints: {
        //         getSession: { 
        //             method: process.env.NUXT_PUBLIC_AUTH_PROVIDER_ENDPOINTS_GET_SESSION_METHOD , 
        //             path: process.env.NUXT_PUBLIC_AUTH_PROVIDER_ENDPOINTS_GET_SESSION_PATH 
        //         },
        //         signIn: { 
        //             method: process.env.NUXT_PUBLIC_AUTH_PROVIDER_ENDPOINTS_SIGN_IN_METHOD , 
        //             path: process.env.NUXT_PUBLIC_AUTH_PROVIDER_ENDPOINTS_SIGN_IN_PATH
        //         },
        //     }
        // }
    }
}
