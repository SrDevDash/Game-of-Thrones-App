import "./App.css";
import MostrarCartas from "./Components/MostrarCartas/MostrarCartas"
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import LandingPage from "./Components/LandindPage/LandingPage.jsx"

function App() {
  return (
    
    <>
    <div className="App">
      {/* <h1>GoT</h1> */}

<Routes>
<Route exact path="/" element={<LandingPage />}  />
<Route exact path="/personajes" element={<MostrarCartas />}  />
</Routes>


    </div>
    <Footer />
    </>
  );
}

export default App;
