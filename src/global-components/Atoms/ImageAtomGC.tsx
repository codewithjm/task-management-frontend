
interface ImageAtomGCModel extends AtomBaseModel{
    src : string;
    alt : string;
}


const ImageAtomGC : React.FC<ImageAtomGCModel> = (props) => {

    return (<img
        src={props.src}
        className={props.className}
        alt={props.alt}
        {...props.attributes}
        {...props.events}
    />)
}


export  default  ImageAtomGC;