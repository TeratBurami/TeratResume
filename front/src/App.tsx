import {Route,Routes,BrowserRouter as Router} from 'react-router-dom';
import Home from './Pages/home/home'
import Activity from './Pages/activity/activity'
import Project from './Pages/project/project';


export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/activity" element={<Activity></Activity>} />
          <Route path="/project" element={<Project></Project>} />
        </Routes>
      </Router>
    </>
  );
}