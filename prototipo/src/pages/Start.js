import Navbar from "../components/Navbar";
import { useState } from "react";
import Sidebar from "../components/Sidebar";

const Start = (props) => {
    return (
        <div className="App">
            <Sidebar activeProject={props.activeProject} setActiveProject={props.setActiveProject}/>
            
            <div className="main-content">
                <div className="content">
                    <h1>Selecciona un proyecto desde la barra de navegación.</h1>
                </div>
            </div>
        </div>
    );
};

export default Start;
