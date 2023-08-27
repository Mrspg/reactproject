import './App.css';
import Team from "./components/Team/Team";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mentor from "./components/Mentor/Mentor";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/team' element={<Team />} />
        <Route path='/mentor' element={<Mentor />} />
      </Routes>
    </Router>
  );
}

export default App;
