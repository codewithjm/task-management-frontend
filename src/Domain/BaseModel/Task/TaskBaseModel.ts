import {UserBaseModel} from "./UserBaseModel.ts";


export interface TaskBaseModel {
    ident : string;
    task_title : string;
    body : string;
    created_utc_date : string;
    updated_utc_date : string | null;
    task_status : number;
    task_level : number;
    due_date : string;
    requestor_ident : number;
    user : UserBaseModel;
    devs : UserBaseModel[];
}
