import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import SidebarContainer from "../../components/SidebarContainer";
import ContentHeader from "../../components/ContentHeader";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert";

const ProyectosAdmin = () => {
  const [proyectos, setProyectos] = useState([]);

  const cargarProyectos = async () => {
    const response = await APIInvoke.invokeGET("/api/proyectos");
    setProyectos(response.proyectos);
  };

  useEffect(() => {
    cargarProyectos();
  }, []);

  const eliminarProyecto = async (e, idProyecto) => {
    e.preventDefault();
    const response = await APIInvoke.invokeDELETE(
      `/api/proyectos/${idProyecto}`
    );

    if (response.msg === "Producto eliminado") {
      const msg = "El producto fue borrado correctamente";
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
      cargarProyectos();
    } else {
      const msg = "El producto  fue borrado correctamente";
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
    }
  };

  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>
      <div className="content-wrapper">
        <ContentHeader
          titulo={"Listado de productos"}
          breadCrumb1={"Inicio"}
          breadCrumb2={"Productos"}
          ruta1={"/Home"}
        />
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">
              <Link to = {"/proyectos-crear"} className="btn btn-block btn-primary btn-sm">Crear nuevo pedido</Link>
            </h3>
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
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th style={{ width: "10%" }}>Id</th>
                  <th style={{ width: "75%" }}>Nombre</th>
                  <th style={{ width: "15%" }}>Opciones</th>
                </tr>
              </thead>
              <tbody>
                {proyectos.map((item) => (
                  <tr key={item._id}>
                    <td>{item._id}</td>
                    <td>{item.nombre}</td>
                    <td>
                    <Link to={`/proyectos-editar/${item._id}@${item.nombre}`} className='btn btn-sm btn-primary'>Editar</Link>
                      &nbsp;&nbsp;
                      <button
                        onClick={(e) => eliminarProyecto(e, item._id)}
                        className="btn btn-sm btn-danger"
                      >
                        Borrar
                      </button>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ProyectosAdmin;
