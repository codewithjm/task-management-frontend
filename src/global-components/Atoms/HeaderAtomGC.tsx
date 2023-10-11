
interface HeaderAtomGCModel extends AtomBaseModel{
    size : number;
    text : string;
}


const HeaderAtomGC : React.FC<HeaderAtomGCModel> = (props) => {

    const styleObj : any = {
        margin : "0px",
        padding : "0px"
    };
    const headerAtomic = () : any => {
        switch (props.size) {
            case 1:
                return (<h1 className={props.className} style={styleObj}>{props.text}</h1>);
                break;
            case 2:
                return (<h2 className={props.className} style={styleObj}>{props.text}</h2>);
                break;
            case 3:
                return (<h3 className={props.className} style={styleObj}>{props.text}</h3>);
                break;
            case 4:
                return (<h4 className={props.className} style={styleObj}>{props.text}</h4>);
                break;
            case 5:
                return (<h5 className={props.className} style={styleObj}>{props.text}</h5>);
                break;
            case 6:
                return (<h6 className={props.className} style={styleObj}>{props.text}</h6>);
                break;
            default:
                throw new Error("Header size parameter is out of bounds. 1 - 6 only.");
                break;
        }
    }

    return headerAtomic();
}


export  default  HeaderAtomGC;