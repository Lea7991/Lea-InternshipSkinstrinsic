import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import Intro from "./pages/Intro/Intro";
import Analysis from "./pages/Analysis/Analysis";
import Demographics from "./pages/Demographics/Demographics";
import Results from "./pages/Results/Results";



function App() {
  return (
    <div>
      <Router>
       <Nav />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Intro" element={<Intro />} />
            <Route path="/Analysis" element={<Analysis />} />
            <Route path="/Results" element={<Results />} />
            <Route path="/Demographics" element={<Demographics />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
