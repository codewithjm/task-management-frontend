import HeaderAtomGC from "../../../global-components/Atoms/HeaderAtomGC.tsx";
import { StatusEnum } from '../../../commons/enums/StatusEnum.ts';
import './BoardLabelTaskComponent.scss'
import {Link} from "react-router-dom";

const BoardLabelTaskComponent = ({text = ""}) => {

    const LabelTheme = (): any => {
        switch (text.replace(" ","")) {
            case StatusEnum[StatusEnum.Open] :
                return (<HeaderAtomGC size={3} text={text} className="label" events={{}} attributes={{}} />);
                break;
            case StatusEnum[StatusEnum.InProgress] :
                return (<HeaderAtomGC size={3} text={text} className="label" events={{}} attributes={{}} />);
                break;
            case StatusEnum[StatusEnum.Review] :
                return (<HeaderAtomGC size={3} text={text} className="label" events={{}} attributes={{}} />);
                break;
            case StatusEnum[StatusEnum.Close] :
                return (<HeaderAtomGC size={3} text={text} className="label" events={{}} attributes={{}} />);
                break;
            default :
                throw new Error("label out of bounds");
                break;
        }
    }

    return (<div className={"BoardLabelTaskComponent " + text.replace(" ","")}>
        {LabelTheme()}
        { StatusEnum[StatusEnum.Open] === text && <Link to="/create"><span className="material-symbols-outlined">add</span> </Link>}
    </div>)
}

export default BoardLabelTaskComponent;