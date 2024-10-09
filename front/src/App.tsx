import {Route,Routes,BrowserRouter as Router} from 'react-router-dom';
import Home from './Pages/home/home'
import Activity from './Pages/activity/activity'
import Competition from './Pages/competition/competition';


export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/activity" element={<Activity></Activity>} />
          <Route path="/competition" element={<Competition></Competition>} />
        </Routes>
      </Router>
    </>
  );
}