
interface SmallTextAtomGCModel extends  AtomBaseModel{
    text : string;
}

const SmallTextAtomGC : React.FC<SmallTextAtomGCModel> = (props) => {

    return (<small className={props.className}>
        {props.text}
    </small>)
}

export default SmallTextAtomGC;