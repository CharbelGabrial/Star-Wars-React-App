import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Films } from "./components/Films";
import { Planets } from "./components/Planets";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Films" element={<Films />} />
          <Route path="/Planets" element={<Planets />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
