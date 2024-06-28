// EditCustomer.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const EditCustomer = (props) => {
    const { id } = useParams();
    const [customerData, setCustomerData] = useState({
        nombre: "",
        nombre_fantasia: "",
        telefono: "",
        correo: ""
    });
    const navigate = useNavigate();

    useEffect(() => {
        const storedCustomers = JSON.parse(localStorage.getItem("customersData")) || [];
        const customer = storedCustomers.find((b) => b.id === id);
        if (customer) {
            setCustomerData(customer);
        } else {
            // Manejar el caso donde no se encuentra el cliente con el id dado
            console.log(`No se encontró ningún cliente con el id ${id}`);
        }
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCustomerData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Manejador para guardar los cambios
    const handleGuardarCambios = () => {
        const storedCustomers = JSON.parse(localStorage.getItem("customersData")) || [];
        const updatedCustomers = storedCustomers.map((customer) =>
            customer.id === id ? customerData : customer
        );
        localStorage.setItem("customersData", JSON.stringify(updatedCustomers));
        
        // Redirigir de vuelta a la página de detalles del cliente
        navigate(`/idcustomer/${id}`);
    };

    return (
        <div className="App">
            <Sidebar
                activeProject={props.activeProject}
                setActiveProject={props.setActiveProject}
            />
            <div className="main-content">
                <div className="content">
                    <h1>Editar Cliente</h1>
                    <form>
                        <label>Nombre:</label>
                        <input
                            name="nombre"
                            type="text"
                            value={customerData.nombre}
                            onChange={handleInputChange}
                        />
                        <br />
                        <label>Nombre Fantasía:</label>
                        <input
                            name="nombre_fantasia"
                            type="text"
                            value={customerData.nombre_fantasia}
                            onChange={handleInputChange}
                        />
                        <br />
                        <label>Teléfono:</label>
                        <input
                            name="telefono"
                            type="text"
                            value={customerData.telefono}
                            onChange={handleInputChange}
                        />
                        <br />
                        <label>Correo:</label>
                        <input
                            name="correo"
                            type="text"
                            value={customerData.correo}
                            onChange={handleInputChange}
                        />
                        <br />
                        <button
                            type="button"
                            onClick={handleGuardarCambios}
                        >
                            Guardar Cambios
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditCustomer;
