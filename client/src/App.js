import "./App.css";
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

import DetallesCasa from './Components/DetallesCasa/DetallesCasa'
import FormLogin from './Components/FormLogin/FormLogin'
import Navbar from "./Components/Navbar/Navbar";
import FormSignUp from "./Components/FormSignUp/FormSignUp";
import FormCrearCasa from './Components/FormCrearCasa/FormCrearCasa'
import FormCrearAvatar from "./Components/FormCrearAvatar/FormCrearAvatar";
import NotFoundPage from "./Components/NotFoundPage/404-page";


function App() {
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("effect");
    !access && navigate('/login');
  }, [access])

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Navbar setAccess={setAccess} />} />
        <Route path="/detail/:id" element={<DetallesCasa />} />
        <Route path="/login" element={<FormLogin access={access} setAccess={setAccess} />} />
        <Route path="/signup" element={<FormSignUp />} />
        <Route path="/createHouse" element={<FormCrearCasa />} />
        <Route path="/createAvatar" element={<FormCrearAvatar />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

    </div>
  );
}

export default App;
