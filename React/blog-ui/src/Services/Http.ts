import axios from "axios";
import config from "../AppConfig.json";
import IHttp from "./Interfaces/http.interface";

export default class Http implements IHttp {
    private _axios = axios.create({
        baseURL: config.ApiBaseUrl
      });
    async get<T>(url: string): Promise<T>{
        return this._axios.get(url).then(res => res.data);
    }
}