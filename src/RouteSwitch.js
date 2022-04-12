import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeBody from './pages/home/home_body';
import ProjectBody from './pages/project/project_body';
import SkillBody from './pages/skill/skill_body';
import ContactBody from './pages/contact/contact_body';

const RouteSwitch = (props) => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path={props.homeURL} element={<HomeBody />} />
                <Route path={props.projectURL} element={<ProjectBody />} />
                <Route path={props.skillURL} element={<SkillBody />} />
                <Route path={props.contactURL} element={<ContactBody />} />
            </Routes>
        </BrowserRouter>
    </div>
    
  );
};

export default RouteSwitch;