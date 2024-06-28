import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { BsTrashFill } from "react-icons/bs";
import Sidebar from "../components/Sidebar";

const IdCustomer = (props) => {
    const { id } = useParams();
    const [customerData, setCustomerData] = useState(null);
    let navigate = useNavigate();

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

    const handleDeleteCustomer = () => {
        const storedCustomers = JSON.parse(localStorage.getItem("customersData")) || [];
        const updatedCustomers = storedCustomers.filter((c) => c.id !== id);
        localStorage.setItem("customersData", JSON.stringify(updatedCustomers));
        navigate("/start", { replace: true });
    };

    const handleEditCustomer = () => {
        navigate(`/editcustomer/${id}`);
    };

    if (!customerData) {
        return (
            <div className="App">
                <Sidebar
                    activeProject={props.activeProject}
                    setActiveProject={props.setActiveProject}
                />
                <div>Loading...</div>
            </div>
        );
    }

    return (
        <div className="App">
            <Sidebar
                activeProject={props.activeProject}
                setActiveProject={props.setActiveProject}
            />
            <div className="main-content">
                <Navbar id={id} />
                <div className="content">
                    {customerData ? (
                        <>
                            <h1>Nombre: {customerData.nombre}</h1>
                            <h6>Nombre Fantasía: {customerData.nombre_fantasia}</h6>
                            <h6>Teléfono: {customerData.telefono}</h6>
                            <h6>Correo: {customerData.correo}</h6>
                            <h2 onClick={handleDeleteCustomer} style={{ color: "red", cursor: "pointer" }}>
                                Eliminar Cliente <BsTrashFill />
                            </h2>
                            <h2 onClick={handleEditCustomer} style={{ color: "green", cursor: "pointer" }}>
                                Editar Cliente
                            </h2>
                        </>
                    ) : (
                        <div>Loading...</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default IdCustomer;
