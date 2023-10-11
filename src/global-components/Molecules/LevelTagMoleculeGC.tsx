import SmallTextAtomGC from "../Atoms/SmallTextAtomGC.tsx";
import {LevelEnum} from "../../commons/enums/LevelEnum.ts";
import './LevelTagMoleculeGC.scss'
interface LevelTagMoleculeGCModel {
    level : LevelEnum;
    className : string;
}

const LevelTagMoleculeGC : React.FC<LevelTagMoleculeGCModel> = ({level,className}) => {

    const addSpace = (inputString: string): string => {
        return inputString.replace(/([A-Z])/g, ' $1');
    }

    return (<SmallTextAtomGC
                text={addSpace(LevelEnum[level])}
                className={"level-tag "+LevelEnum[level] + " " + className }
                events={null} attributes={null} />);
}

export default  LevelTagMoleculeGC;