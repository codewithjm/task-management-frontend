import {BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import TaskComponentPage from "../pages/Task/TaskComponentPage.tsx";
import NotFoundComponentPage from "../pages/Errors/NotFoundComponentPage.tsx";
import NotAuthenticatedComponentPage from "../pages/Errors/NotAuthenticatedComponentPage.tsx";
import RouteGuard from "./guards/RouteGuard.tsx";
import TopbarTemplateGC from "../global-components/Templates/TopbarTemplateGC.tsx";
import CreateTaskComponentPage from "../pages/Task/CreateTaskComponentPage.tsx";


function AppRoutingCore(){
    return (<>
        <TopbarTemplateGC />
        <main className="main-component bg-secondary">
            <Router>
                <Routes>
                    <Route path="/" element={<RouteGuard component={<TaskComponentPage />}/>} />
                    <Route path="/create" element={<RouteGuard component={<CreateTaskComponentPage />}/>} />
                    <Route path={'not-authenticated'} Component={NotAuthenticatedComponentPage} />
                    <Route Component={NotFoundComponentPage} />
                </Routes>
            </Router>
        </main>
    </>);
}


export default AppRoutingCore;
