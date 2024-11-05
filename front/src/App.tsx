import {Route,Routes,BrowserRouter as Router} from 'react-router-dom';
import Home from './Pages/home/home'
import Activity from './Pages/activity/activity'
import Project from './Pages/project/project';
import ScrollToTop from './components/scrollToTop';


export default function App() {
  return (
    <div>
      <Router>
        <ScrollToTop></ScrollToTop>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/experiences" element={<Activity></Activity>} />
          <Route path="/projects" element={<Project></Project>} />
        </Routes>
      </Router>
    </div>
  );
}