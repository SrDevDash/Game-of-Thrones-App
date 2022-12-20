import "./App.css";
import { Routes, Route } from 'react-router-dom';

import DetallesCasa from './Components/DetallesCasa/DetallesCasa'
import FormLogin from './Components/FormLogin/FormLogin'
import Navbar from "./Components/Navbar/Navbar";
import FormSingUp from "./Components/FormSignUp/FormSignUp";
import FormCrearCasa from './Components/FormCrearCasa/FormCrearCasa'
import FormCrearAvatar from "./Components/FormCrearAvatar/FormCrearAvatar";
import NotFoundPage from "./Components/NotFoundPage/404-page";


function App() {
  return (
    <div className="App">


      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/detail/:id" element={<DetallesCasa />} />
        <Route path="/login" element={<FormLogin />} />
        <Route path="/singup" element={<FormSingUp />} />
        <Route path="/createHouse" element={<FormCrearCasa />} />
        <Route path="/createAvatar" element={<FormCrearAvatar />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>



    </div>
  );
}

export default App;
