import React, {useEffect, useState} from "react";
import ImageAtomGC from "../Atoms/ImageAtomGC.tsx";
import LabelTextAtomGC from "../Atoms/LabelTextAtomGC.tsx";
import SmallTextAtomGC from "../Atoms/SmallTextAtomGC.tsx";

import './SelectMultiUserMoleculeGC.scss';


export interface SelectMultiUserMoleculeGCModel {
    img : string;
    name : string;
    position : string;
    id : number;
    isActive: boolean;
}

interface SelectModel{
    data : SelectMultiUserMoleculeGCModel[];
    onSelect : any
}

const SelectMultiUserMoleculeGC : React.FC<SelectModel> = (props) => {

    const [dataCmp, setdataCmp] = useState<SelectModel>({
        data : [],
        onSelect : () => {}
    });

    useEffect(() => {
        setdataCmp(props);
    }, [props]);

    return (<div className="SelectMultiUserMoleculeGC">
        <ul>
            {
                dataCmp.data?.map(dt => <li className={(dt.isActive ? "active" : "")}
                    onClick={() => props.onSelect(dt.id)}>
                    <ImageAtomGC src={dt.img}
                                 alt="" className="" events={null} attributes={null} />
                    <div className="sl-det">
                        <LabelTextAtomGC text={dt.name} className="" events={null} attributes={null}/>
                        <SmallTextAtomGC text={dt.position} className="" events={null} attributes={null}/>
                    </div>
                </li>)
            }
        </ul>
    </div>)
}

export default SelectMultiUserMoleculeGC;