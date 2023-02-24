import axios, { AxiosHeaders } from "axios";
import config from "../AppConfig.json";
import IHttp from "./Interfaces/http.interface";
import { toast } from "react-toastify";

export default class Http implements IHttp {
    private _axios = axios.create({
        baseURL: config.ApiBaseUrl,
        timeout:8000,
        headers:{
            "Content-Type": "application/json"
        }
      });

    async Get<T>(url: string): Promise<T>{
        return await this._axios.get(url).then(res => res.data).catch(err => toast.error(err.message));
    }
    async Post<T>(url:string,data:object): Promise<T>{
        return this._axios.post(url,data).then(res=>res.data).catch(err => toast.error(err.message));
    }
}