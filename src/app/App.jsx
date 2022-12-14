import { useState } from "react";
import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../footer/Footer";
import "./App.css";

function App() {

  return (
    <div className="App">     

      <div className="wrapper">
        <Header />

        <Main />

        <Footer />        
      </div>
    </div>
  );
}

export default App;
