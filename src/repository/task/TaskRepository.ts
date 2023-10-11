import {IGetModel, IPostModel, RepositoryBase} from "../base/RepositoryBase.ts";
import {AxiosResponse} from "axios";
import HttpRequestService from "../../services/HttpRequestService.ts";
import {TaskOutputModel} from "../../Domain/Models/Task/Output/TaskOutputModel.ts";

export default class TaskRepository extends RepositoryBase<TaskOutputModel> {

    getRequest(requestData: IGetModel) : Promise<AxiosResponse<TaskOutputModel>>   {
        return HttpRequestService.get<TaskOutputModel>(requestData.url);
    }

    postRequest(requestData: IPostModel): Promise<AxiosResponse<any>> {
        return  HttpRequestService.post<any>(requestData.url, requestData.data);
    }


}