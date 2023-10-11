import LevelTagMoleculeGC from "../../../global-components/Molecules/LevelTagMoleculeGC.tsx";
import {LevelEnum} from "../../../commons/enums/LevelEnum.ts";
import './CardTaskComponent.scss'
import LabelTextAtomGC from "../../../global-components/Atoms/LabelTextAtomGC.tsx";
import ParagraphAtomGC from "../../../global-components/Atoms/ParagraphAtomGC.tsx";
import SmallTextAtomGC from "../../../global-components/Atoms/SmallTextAtomGC.tsx";
import CircleUserImageAtomGC from "../../../global-components/Atoms/CircleUserImageAtomGC.tsx";
import {TaskBaseModel} from "../../../Domain/BaseModel/Task/TaskBaseModel.ts";
import {StatusEnum} from "../../../commons/enums/StatusEnum.ts";

interface CardTaskModel{
    data : TaskBaseModel;
    onclick : any;
}
const CardTaskComponent : React.FC<CardTaskModel> = (props) => {



    return (<div className="CardTaskComponent" onClick={props.onclick}>
        <LevelTagMoleculeGC level={props.data.task_level} className="" />
        <hr/>
        <div className={"body-brief "+LevelEnum[props.data.task_level]}>
            <LabelTextAtomGC text={props.data.task_title} className="title" events={null} attributes={null}/>
            <ParagraphAtomGC text={props.data.body}
                             className="desc" events={null} attributes={null}/>
        </div>
        <div className="details-row">
            <div className="details-wrapper">
                <div className="icon">
                    <span className="material-symbols-outlined">
                    calendar_month
                    </span>
                </div>
                <div className="hori-wrapper">
                    <SmallTextAtomGC text="Due:" className="label-tag" events={null} attributes={null}/>
                    <SmallTextAtomGC text={props.data.due_date.substring(0,10)} className="details-tag" events={null} attributes={null}/>
                </div>
            </div>
            <div className="details-wrapper">
                <div className="hori-wrapper">
                    <SmallTextAtomGC text="Status:" className="label-tag" events={null} attributes={null}/>
                    <SmallTextAtomGC text={StatusEnum[props.data.task_status]} className="status-tag" events={null} attributes={null}/>
                </div>
            </div>
        </div>
        <div className="details-row">
            <div className="details-wrapper">
                <div className="hori-wrapper">
                    <SmallTextAtomGC text="Requestor:" className="label-tag" events={null} attributes={null}/>
                    <div className="users-img">
                        <CircleUserImageAtomGC src={props.data.user.imG_PATH}
                                               alt="" className="" events={null} attributes={{
                            title : `${props.data.user.firsT_NAME} ${props.data.user.lasT_NAME}`
                        }}/>
                    </div>
                </div>
            </div>
            <div className="details-wrapper">
                <div className="hori-wrapper">
                    <SmallTextAtomGC text="Developers:" className="label-tag" events={null} attributes={null}/>
                    <div className="users-img devs">
                        {
                            props.data.devs.map(dv => <CircleUserImageAtomGC src={dv.imG_PATH} alt="" className="" events={null} attributes={{
                                title : `${dv.firsT_NAME} ${dv.lasT_NAME}`
                            }}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default  CardTaskComponent;