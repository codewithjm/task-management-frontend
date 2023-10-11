import './CircleUserImageAtomGC.scss'
interface CircleUserImageAtomGCModel extends AtomBaseModel{
    src : string;
    alt : string;
}


const CircleUserImageAtomGC : React.FC<CircleUserImageAtomGCModel> = (props) => {

    return (<img
        src={props.src}
        className={"CircleUserImageAtomGCModel "+props.className}
        alt={props.alt}
        {...props.attributes}
        {...props.events}
    />)
}


export  default  CircleUserImageAtomGC;