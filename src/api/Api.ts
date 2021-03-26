export default class FetchApi<T> {

    constructor(public url: string) {
    }

    private async createQuery(url: string = '', config?: any, body?: any):Promise<T[]> {
        url = this.url + url;
        return await (await fetch(url, {...config, body})).json();
    }

    async get(url: string = '', config?: any, body?: any): Promise<T[]> {
        return this.createQuery(url, config, body);
    }
}