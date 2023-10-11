import IconAtomGC from "../../../global-components/Atoms/IconAtomGC.tsx";
import ParagraphAtomGC from "../../../global-components/Atoms/ParagraphAtomGC.tsx";
import './FileTaskComponent.scss';


const FileTaskComponent  = () => {

    return (<div className="FileTaskComponent">
        <div className="file-container">
            <IconAtomGC icon="picture_as_pdf" className="icon-file" events={null} attributes={null} />
        </div>
        <ParagraphAtomGC text="documentation.pdf" className="filename" events={null} attributes={null} />
    </div>)
}

export default FileTaskComponent;