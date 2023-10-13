import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Apartment from "./pages/Apartment/Apartment";
import Error from "./pages/Error/Error";
import Header from "./pages/layouts/Header/Header";
import Footer from "./pages/layouts/Footer/Footer";
import "./app.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/apartment/:productId" element={<Apartment />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
