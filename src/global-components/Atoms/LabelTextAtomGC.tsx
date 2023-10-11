
interface LabelTextAtomGCModel extends  AtomBaseModel{
    text : string;
}

const LabelTextAtomGC : React.FC<LabelTextAtomGCModel> = (props) => {

    return (<label className={props.className}>
        {props.text}
    </label>)
}

export default LabelTextAtomGC;