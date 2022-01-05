import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import Footer from "./components/Footer";
import Trailer from "./components/pages/Trailer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/rylee816.github.io" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/trailer" element={<Trailer />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
