import {TaskBaseModel} from "../../../BaseModel/Task/TaskBaseModel.ts";
import {UserBaseModel} from "../../../BaseModel/Task/UserBaseModel.ts";


export interface TaskOutputModel{
    openTasks : TaskBaseModel[];
    inProgressTasks : TaskBaseModel[];
    reviewTasks : TaskBaseModel[];
    closeTasks : TaskBaseModel[];
    files : TaskFileBaseModel[];
    users : UserBaseModel[];
}