import React, { useState, useEffect } from "react";
import ContentHeader from "../../components/ContentHeader";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SidebarContainer from "../../components/SidebarContainer";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const ProyectosCrear = () => {
  const navigate = useNavigate();

  const [proyecto, setProyecto] = useState({
    nombre: "",
  });

  const { nombre } = proyecto;

  const onChange = (e) => {
    setProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    crearProyecto();
  };

  const crearProyecto = async () => {
    const data = {
      nombre: proyecto.nombre,
    };
    const response = await APIInvoke.invokePOST(`/api/proyectos`, data);
    const idProyecto = response._id;

    if (idProyecto === "") {
      const msg = "El pedido No fue creado correctamente";
      swal({
        title: "Informacion",
        text: msg,
        icon: "success",
        buttons: {
          confirm: {
            text: "OK",
            value: true,
            visible: true,
            className: "btn btn-primary",
            closeModal: true,
          },
        },
      });
    } else {
        navigate("/proyectos-admin")
      const msg = "El pedido fue creado correctamente";
      swal({
        title: "Informacion",
        text: msg,
        icon: "success",
        buttons: {
          confirm: {
            text: "OK",
            value: true,
            visible: true,
            className: "btn btn-primary",
            closeModal: true,
          },
        },
      });
      setProyecto({
        nombre: ''
      })
    }
  };
  useEffect(() => {
    document.getElementById("nombre").focus();
  });

  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>
      <div className="content-wrapper">
        <ContentHeader
          titulo={"Crear nuevo proyecto"}
          breadCrumb1={"Listado de Proyectos"}
          breadCrumb2={"Creacion"}
          ruta1={"/proyectos-admin"}
        />
        <div className="card">
          <div className="card-header">
            <h3 className="card-title"></h3>
            <div className="card-tools">
              <button
                type="button"
                className="btn btn-tool"
                data-card-widget="collapse"
                title="Collapse"
              >
                <i className="fas fa-minus" />
              </button>
              <button
                type="button"
                className="btn btn-tool"
                data-card-widget="remove"
                title="Remove"
              >
                <i className="fas fa-times" />
              </button>
            </div>
          </div>
          <div className="card-body">
            <form onSubmit={onSubmit}>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="nombre">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    name="nombre"
                    placeholder="Ingrese el nombre del producto"
                    value={nombre}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="card-footer">
                  <button type="submit" className="btn btn-primary">
                    Crear
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ProyectosCrear;
