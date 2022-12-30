
class HttpResponseModel<T> {
  constructor(public item: T,public message: string,public statusCode: number){
  }
};
export default HttpResponseModel;
