import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./system/Login";
import Workframe from "./system/Workframe";

function App() {
  return <Router>
  <Routes>
    <Route path="/devkit-mockup" element={<Login />} />
    <Route path="/devkit-mockup/main" element={<Workframe />} />
  </Routes>
</Router>;
}

export default App;
