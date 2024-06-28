import { useParams } from "react-router-dom";
import projectsdata from "../assets/data.json";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from 'react-router-dom';

const CreateBudget = (props) => {
    let navigate = useNavigate();
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

        // Get existing data and add the new budget
        const existingData =
            JSON.parse(localStorage.getItem("budgetsData")) || [];
        existingData.push(formJson);

        // Save back to localStorage
        localStorage.setItem("budgetsData", JSON.stringify(existingData));

        alert("Cotización guardada en localStorage");
        navigate('/start', { replace: true });
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
                            <h2>Id Cotizacion</h2>
                            <input name="id" required={true} />
                            <hr />
                            <h2>Nombre Proyecto</h2>
                            <input name="nombre" required={true} />
                            <hr />
                            <h2>Version</h2>
                            <input name="version" required={true} />
                            <hr />
                            <button type="submit">Crear Cotizacion</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateBudget;
