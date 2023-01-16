import axios, { AxiosHeaders } from "axios";
import config from "../AppConfig.json";
import IHttp from "./Interfaces/http.interface";

export default class Http implements IHttp {
    private _axios = axios.create({
        baseURL: config.ApiBaseUrl,
        headers:{
            "Content-Type": "application/json"
        }
      });

    async Get<T>(url: string): Promise<T>{
        return this._axios.get(url).then(res => res.data);
    }
    async Post<T>(url:string,data:object): Promise<T>{
        return this._axios.post(url,data).then(res=>res.data);
    }
}