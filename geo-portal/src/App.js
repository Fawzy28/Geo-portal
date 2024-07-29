import logo from './logo.svg';
import './App.css';
//Import Package
import React from "react";
import { BrowserRouter } from "react-router-dom";
//Import Componant
import Navbar from "./Components/Navbar/Navbarr";
//Import Pages
import Footer from "./Components/Footer/Footer";
import RoutesConfig from "./RoutesConfig/RoutesConfig";




   
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <RoutesConfig />
      <Footer />
    </BrowserRouter>
      </>
  );
}


export default App;
