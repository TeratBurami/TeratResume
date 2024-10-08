import {Route,Routes,BrowserRouter as Router} from 'react-router-dom';
import Home from './Pages/home/home'
import Skill from './Pages/skill/skill'
import Competition from './Pages/competition/competition';


export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/skill" element={<Skill></Skill>} />
          <Route path="/competition" element={<Competition></Competition>} />
        </Routes>
      </Router>
    </>
  );
}