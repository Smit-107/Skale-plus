import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Pricing from "./components/Pricing/Pricing";
import Blogs from "./components/Blogs/Blogs";
import Events from "./components/Events/Events";
import MainPage from "./components/Search/MainPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blogs" element={<Blogs />} /> 
        <Route path="/events" element={<Events />} />
        <Route path="/search" element={<MainPage />} />
      </Routes>{" "}
      <Footer />
    </div>
  );
}

export default App;
