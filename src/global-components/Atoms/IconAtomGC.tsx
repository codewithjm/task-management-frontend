
interface IconAtomGCModel extends AtomBaseModel{
    icon : string;
}

const IconAtomGC : React.FC<IconAtomGCModel> = (props) => {
    return (<span className={"material-symbols-outlined" + ` ${props.className}`} {...props.events}>
                {props.icon}
            </span>)
}

export default  IconAtomGC;