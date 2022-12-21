import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import CrearCuenta from "./pages/auth/CrearCuenta";
import Home from "./pages/Home";
import ProyectosAdmin from "./pages/proyectos/ProyectosAdmin";
import ProyectosCrear from "./pages/proyectos/ProyectosCrear";
import ProyectosEditar from "./pages/proyectos/ProyectosEditar";
function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/crear-cuenta" exact element={<CrearCuenta />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/proyectos-admin" exact element = {<ProyectosAdmin/>} />
          <Route path="/proyectos-crear" exact element = {<ProyectosCrear/>} />
          <Route path="/proyectos-editar/:idproyecto" exact element = {<ProyectosEditar/>} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
