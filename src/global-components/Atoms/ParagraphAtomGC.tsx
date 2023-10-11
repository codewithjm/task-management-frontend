
interface ParagraphAtomGCModel extends  AtomBaseModel{
    text : string;
}

const ParagraphAtomGC : React.FC<ParagraphAtomGCModel> = (props) => {

    return (<p className={props.className}>
        {props.text}
    </p>)
}

export default ParagraphAtomGC;