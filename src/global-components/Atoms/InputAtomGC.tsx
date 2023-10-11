

interface InputAtomGCModel extends AtomBaseModel{
    type: string;
    placeholder: string;
    value : string;
}

const InputAtomGC : React.FC<InputAtomGCModel> = (props) => {

    return (<input
        type={props.type}
        className={props.className}
        placeholder={props.placeholder}
        value={props.value}
        {...props.attributes}
        {...props.events}
    />)
}

export default InputAtomGC;