import "./App.css";
import { Navbar, Home, MyBio } from "./mainComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/nav" element={<Navbar />} />
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<MyBio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
