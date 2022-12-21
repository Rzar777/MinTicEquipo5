import React from "react";
import ContentHeader from "../components/ContentHeader";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SidebarContainer from "../components/SidebarContainer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>
      <div className="content-wrapper">
        <ContentHeader 
            titulo={"Dashboard"}
            breadCrumb1={"Inicio"}
            breadCrumb2={"Dashboard"}
            ruta1={"/Home"}
        />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-6">
              <div className="small-box bg-info">
                <div class="inner">
                  <h3>Productos</h3>
                  <p>&nbsp;</p>
                </div>
                <div className="icon">
                  <i className="fa fa-edit" />
                </div>
                <Link to={"/proyectos-admin"} class="small-box-footer">
                  Ver productos <i class="fas fa-arrow-circle-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
