import { Route, Routes, BrowserRouter } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Atendimento from "./pages/Atendimento";
import Acao from "./pages/Acao";


import api from './Api/Api';
import axios from 'axios';
import { useEffect } from "react";
import { useState } from "react";
function App() {

useEffect(()=>
  {
      api.get('noticia').then(res=>{
        console.log(res);
      })
  },[])


  return (
    <>
      <BrowserRouter>
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Atendimento" element={<Atendimento />} />
            <Route path="/Acao" element={<Acao />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
