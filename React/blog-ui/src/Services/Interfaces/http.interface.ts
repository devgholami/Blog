export default interface IHttp {
    Get<T>(url: string): Promise<T>;
    Post<T>(url:string,data:object):Promise<T>;
}