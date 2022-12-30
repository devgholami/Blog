export default interface IHttp {
    get<T>(url: string): Promise<T>;
}