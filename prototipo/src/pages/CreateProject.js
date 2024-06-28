import { useParams } from "react-router-dom";
import projectsdata from "../assets/data.json";
import { useState } from "react";
import Sidebar from "../components/Sidebar";

const CreateProject = (props) => {
    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);

        // You can pass formData as a fetch body directly:
        //fetch('/some-api', { method: form.method, body: formData });

        // Or you can work with it as a plain object:
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
    }

    return (
        <div className="App">
            <Sidebar
                activeProject={props.activeProject}
                setActiveProject={props.setActiveProject}
            />
            <div className="main-content">
                <form onSubmit={handleSubmit}>
                    <div className="content CPcontent">
                        <div className="column">
                            <h2>Nombre del proyecto</h2>
                            <input name="nombre" required={true} />
                            <hr />
                            <h3>Fecha estimada de Inicio</h3>
                            <input type="date" name="fechainicio" />
                            <hr />
                            <h3>Fecha estimada de Término</h3>
                            <input type="date" name="fechafin" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateProject;
