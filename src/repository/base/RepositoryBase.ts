import HttpRequestService from "../../services/HttpRequestService.ts";
import {AxiosResponse} from "axios";

export interface IGetModel{
    url : string;
}

export interface IPostModel{
    url : string;
    data : any;
}
export interface IPutModel extends IPostModel{
}


export abstract class RepositoryBase<TModel> {


    getRequest(requestData: IGetModel) : Promise<AxiosResponse<TModel>>  {
        return HttpRequestService.get<TModel>(requestData.url);
   }

    postRequest(requestData: IPostModel) : Promise<AxiosResponse<TModel>>   {
        return HttpRequestService.post(requestData.url, requestData.data);
    }

    putRequest(requestData: IPutModel) : Promise<AxiosResponse<TModel>>   {
        return HttpRequestService.put(requestData.url, requestData.data);
    }

    deleteRequest(requestData: string) : Promise<AxiosResponse<TModel>>   {
        return HttpRequestService.delete(requestData);
    }
}