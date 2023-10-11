
import './TopbarTemplateGC.scss';
import HeaderAtomGC from "../Atoms/HeaderAtomGC.tsx";
import UserProfileMoleculeGC from "../Molecules/UserProfileMoleculeGC.tsx";
import LabelTextAtomGC from "../Atoms/LabelTextAtomGC.tsx";
import SmallTextAtomGC from "../Atoms/SmallTextAtomGC.tsx";
import CircleAsset from '../../assets/circle.svg';
import CircleBorderedAsset from '../../assets/bordered-circle.svg';
import PolygonAsset from '../../assets/polygon.svg';

const TopbarTemplateGC = () => {
    return (<>
        <nav className="bg-accent TopbarTemplateGC">
            <div className="inner">
                <HeaderAtomGC size={1} text="Task Management System" className="header-title color-dominant" events={{}} attributes={{}}/>
                <div className="user-details">
                    <UserProfileMoleculeGC />
                    <div className="name-title">
                        <LabelTextAtomGC text="Jm Obias" className="color-dominant fullname" events={{}} attributes={{}} />
                        <SmallTextAtomGC text="Senior Software Engineer" className="color-dominant title"  events={{}} attributes={{}}/>
                    </div>
                </div>
                <img src={CircleAsset} className="circle-bg"/>
                <img src={CircleBorderedAsset} className="circle-bordered-bg"/>
                <img src={CircleBorderedAsset} className="circle-bordered-bg-2"/>
                <img src={PolygonAsset} className="polygon-bg"/>
            </div>
        </nav>
    </>)
}

export default TopbarTemplateGC;