import HeaderAtomGC from "../../global-components/Atoms/HeaderAtomGC.tsx";

import './TaskComponentPage.scss';
import BoardLabelTaskComponent from "./components/BoardLabelTaskComponent.tsx";
import CardTaskComponent from "./components/CardTaskComponent.tsx";
import SmallTextAtomGC from "../../global-components/Atoms/SmallTextAtomGC.tsx";
import CircleUserImageAtomGC from "../../global-components/Atoms/CircleUserImageAtomGC.tsx";
import IconAtomGC from "../../global-components/Atoms/IconAtomGC.tsx";
import LevelTagMoleculeGC from "../../global-components/Molecules/LevelTagMoleculeGC.tsx"; 
import ParagraphAtomGC from "../../global-components/Atoms/ParagraphAtomGC.tsx";
import FileTaskComponent from "./components/FileTaskComponent.tsx";
import React, {useEffect, useState} from "react";
import {TaskOutputModel} from "../../Domain/Models/Task/Output/TaskOutputModel.ts";
import TaskRepository from "../../repository/task/TaskRepository.ts";
import {TaskBaseModel} from "../../Domain/BaseModel/Task/TaskBaseModel.ts";
import {StatusEnum} from "../../commons/enums/StatusEnum.ts";

function TaskComponentPage(){

    const [showDetails,setShowDetails] = useState(false);
    const [taskDetails, setTaskDetails] = useState<TaskBaseModel>({
        body: "",
        created_utc_date: "",
        devs: [],
        due_date: "",
        ident: "",
        requestor_ident: 0,
        task_level: 0,
        task_status: 0,
        task_title: "",
        updated_utc_date: null,
        user: undefined
    });

    const selectTask: React.FC<{taskId : string, status : number}> = (params) => {
        setShowDetails(true);
        switch (params.status) {
            case 0:
                setTaskDetails(taskState.openTasks.filter(x => x.ident == params.taskId)[0]);
                break;
            case 1:
                setTaskDetails(taskState.inProgressTasks.filter(x => x.ident == params.taskId)[0]);
                break;
            case 2:
                setTaskDetails(taskState.reviewTasks.filter(x => x.ident == params.taskId)[0]);
                break;
            case 3:
                setTaskDetails(taskState.closeTasks.filter(x => x.ident == params.taskId)[0]);
                break;
        }
    }

    const [taskState, setTaskState] = useState<TaskOutputModel>({
        closeTasks: [], files: [], inProgressTasks: [], openTasks: [], reviewTasks: [], users: []
    })

    useEffect(() => {
        var tRepo = new TaskRepository();
        tRepo.getRequest({url : '/Task'}).then(response => {
            const {data} = response;
            console.log(data);
            setTaskState(data);
        }).catch(err => {
           console.log(err)
        });
    },[]);

    return(<>
        <div className="TaskComponentPage">
            <HeaderAtomGC size={2} text="Task Board" className="content-title" events={{}} attributes={{}} />
            <br/>
            <div className="wrapper-container">
                <div className={"task-boards" + (showDetails ? " task-boards-one-show" : "")}>
                    <ul>
                        {(taskDetails.task_status === 0 || !showDetails) && <li>
                            <BoardLabelTaskComponent text="Open"/>
                            <br/>
                            <div className="task-list-wrapper">
                                {
                                    taskState.openTasks?.map(ot => <CardTaskComponent data={ot} onclick={() => selectTask({taskId:ot.ident, status :ot.task_status})}/>)
                                }
                            </div>
                        </li>}
                        {(taskDetails.task_status === 1 || !showDetails) && <li>
                            <BoardLabelTaskComponent text="In Progress"/>
                            <br/>
                            <div className="task-list-wrapper">
                                {
                                    taskState.inProgressTasks?.map(ot => <CardTaskComponent data={ot} onclick={() => selectTask({taskId:ot.ident, status :ot.task_status})}/>)
                                }
                            </div>
                        </li>}
                        {(taskDetails.task_status === 2 || !showDetails) && <li>
                            <BoardLabelTaskComponent text="Review"/>
                            <br/>
                            <div className="task-list-wrapper">
                                {
                                    taskState.reviewTasks?.map(ot => <CardTaskComponent data={ot} onclick={() => selectTask({taskId:ot.ident, status :ot.task_status})}/>)
                                }
                            </div>
                        </li>}
                        {(taskDetails.task_status === 3 || !showDetails) && <li>
                            <BoardLabelTaskComponent text="Close"/>
                            <br/>
                            <div className="task-list-wrapper">
                                {
                                    taskState.closeTasks?.map(ot => <CardTaskComponent data={ot} onclick={() => selectTask({taskId:ot.ident, status :ot.task_status})}/>)
                                }
                            </div>
                        </li>}
                    </ul>
                </div>
                {showDetails && <div className="task-full-details">
                    <HeaderAtomGC size={1} text={taskDetails.task_title} className="task-title" events={null} attributes={null} />
                    <IconAtomGC icon="close" className="btn-close" events={{onClick:()=>{
                            setShowDetails(false)
                        }}} attributes={{}}/>
                    <div className="hori-wrapper">
                        <div className="details-wrapper">
                            <div className="icon">
                                <span className="material-symbols-outlined">
                                calendar_month
                                </span>
                            </div>
                            <div className="hori-wrapper">
                                <SmallTextAtomGC text="Due:" className="label-tag" events={null} attributes={null}/>
                                <SmallTextAtomGC text={taskDetails.due_date.substring(0,10)} className="details-tag" events={null} attributes={null}/>
                            </div>
                        </div>
                        <div className="details-wrapper">
                            <div className="hori-wrapper">
                                <SmallTextAtomGC text="Developers:" className="label-tag" events={null} attributes={null}/>
                                <div className="users-img devs">
                                    {
                                        taskDetails.devs.map(dv => <CircleUserImageAtomGC src={dv.imG_PATH} alt="" className="" events={null} attributes={{
                                            title : `${dv.firsT_NAME} ${dv.lasT_NAME}`
                                        }}/>)
                                    }
                                    <div className="add-dev">
                                        <IconAtomGC icon="add" className="" events={null} attributes={null}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="details-wrapper">
                            <div className="hori-wrapper">
                                <SmallTextAtomGC text="Task Level:" className="label-tag" events={null} attributes={null}/>
                                <LevelTagMoleculeGC level={taskDetails.task_level} className="" />
                            </div>
                        </div>
                        <div className="details-wrapper">
                            <div className="hori-wrapper">
                                <SmallTextAtomGC text="Status:" className="label-tag" events={null} attributes={null}/>
                                <SmallTextAtomGC text={StatusEnum[taskDetails.task_status]} className="status-tag" events={null} attributes={null}/>
                            </div>
                        </div>
                    </div>

                    <ParagraphAtomGC text={taskDetails.body}
                                     className="body-description" events={null} attributes={null}/>
                    <br/>
                    <HeaderAtomGC size={4} text="Documentation Files" className="" events={null} attributes={null}/>
                    <ul className="files-list">
                        <li>
                            <FileTaskComponent />
                        </li>
                        <li>
                            <FileTaskComponent />
                        </li>
                        <li>
                            <FileTaskComponent />
                        </li>
                        <li>
                            <FileTaskComponent />
                        </li>
                        <li>
                            <div className="upload-file">
                                <IconAtomGC icon="upload" className="" events={null} attributes={null}/>
                            </div>
                        </li>
                    </ul>
                </div>}
            </div>
        </div>
    </>)
}

export default  TaskComponentPage ;