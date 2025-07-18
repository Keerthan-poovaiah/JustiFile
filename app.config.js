import 'dotenv/config';

export default {
    name: 'justifileapp',
    version: '1.0.0',
    sdkVersion: '53.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
        image: './assets/splash-icon.png',
        resizeMode: 'contain',
        backgroundColor: '#ffffff'
    },
    assetBundlePatterns: ['**/*'],
    ios: {
        supportsTablet: true
    },
    android: {
        adaptiveIcon: {
            foregroundImage: './assets/adaptive-icon.png',
            backgroundColor: '#ffffff'
        }
    },
    extra: {
        googleApiKey: process.env.GOOGLE_API_KEY,
        newsApiKey: process.env.NEWS_API_KEY,
        flaskServerUrl: process.env.FLASK_SERVER_URL,
    }
};