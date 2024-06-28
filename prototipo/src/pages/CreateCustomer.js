import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const CreateCustomer = (props) => {
    const navigate = useNavigate();
    
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
            JSON.parse(localStorage.getItem("customersData")) || [];
        existingData.push(formJson);

        // Save back to localStorage
        localStorage.setItem("customersData", JSON.stringify(existingData));

        alert("Cliente guardado en localStorage");
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
                            <h2>Id Cliente</h2>
                            <input name="id" required={true} />
                            <hr />
                            <h2>Nombre del cliente</h2>
                            <input name="nombre" required={true} />
                            <hr />
                            <h3>Nombre Fantasía</h3>
                            <input name="nombre_fantasia" required={true} />
                            <hr />
                            <h3>Teléfono del cliente</h3>
                            <input name="telefono" required={true} />
                            <hr />
                            <h3>Correo del cliente</h3>
                            <input name="correo" required={true} />
                            <div />
                            <button type="submit">Añadir cliente</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateCustomer;
