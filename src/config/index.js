const env = import.meta.env.MODE || 'prod'
const EnvConfig = {
    dev: {
        baseApi: '/',
        mockApi: 'https://www.fastmock.site/mock/4d22645386dc61f6719959b0fadc9e73/manager'
    },
    test: {
        baseApi: '/',
        mockApi: 'https://www.fastmock.site/mock/4d22645386dc61f6719959b0fadc9e73/manager'
    },
    prod: {
        baseApi: '/',
        mockApi: 'https://www.fastmock.site/mock/4d22645386dc61f6719959b0fadc9e73/manager'
    }
}
export default {
    env: 'dev',
    mock: true,
    baseApi: '',
    nameSpace: 'manager',
    ...EnvConfig[env]
}
