import { Routes , Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Apartment from "./pages/Apartment/Apartment";
import Error from "./pages/Error/Error";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./app.scss";

function App() {
  return (
    <div className="App">
       
       <div class="container">
      
      <Header/>
      
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route  path="/about" element={<About />}/> 
        <Route  path="/apartment/:id" element={<Apartment />}/>
         <Route  path="*" element={<Error />}/> 
      </Routes>
       <Footer /> 
       
       </div>
    
    </div>
  );
}

export default App;