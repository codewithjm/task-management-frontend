

interface ButtonAtomGCModel extends  AtomBaseModel{
    text : string;
    type: string;
}

const ButtonAtomGC : React.FC<ButtonAtomGCModel> = (props) => {

    return (<button type={props.type} className={props.className}
                    {...props.attributes} {...props.events}>
        {props.text}
    </button>);
}

export default ButtonAtomGC;