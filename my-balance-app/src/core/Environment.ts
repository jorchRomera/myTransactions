export class Environment {
    static getBaseUrl(): string {
        let baseUrl = '';
        // eslint-disable-next-line
        // @ts-ignore
        if (window.CONFIG) {
            // eslint-disable-next-line
            // @ts-ignore
            baseUrl = window.CONFIG.baseUrl;
        }
        return baseUrl;
    }
}
