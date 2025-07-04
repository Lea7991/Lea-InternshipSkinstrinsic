import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import Intro from "./pages/Intro/Intro";



function App() {
  return (
    <div>
      <Router>
       <Nav />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Intro" element={<Intro />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
