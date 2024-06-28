import "./Sidebar.css";
import ListedProject from "./ListedProject";
import ListedBudget from "./ListedBudget";
import ListedCustomer from "./ListedCustomer";
import {
    BsArrowReturnRight,
    BsSearch,
    BsFilter,
    BsPlusSquare,
} from "react-icons/bs";
import { NavLink } from "react-router-dom";
import customersData from "../assets/customers.json"; // Importa los datos de clientes
import { useState, useEffect } from "react";


const Sidebar = (props) => {
    const [budgetsData, setBudgetsData] = useState([]);
    const [projectsData, setProjectsData] = useState([]);
    const [customersData, setCustomersData] = useState([]);
    const [clients, setClients] = useState([]); // Inicializa el estado de clientes

    useEffect(() => {
        const storedBudgets = JSON.parse(localStorage.getItem('budgetsData')) || [];
        const storedProjects = JSON.parse(localStorage.getItem('projectsData')) || [];
        const storedCustomers = JSON.parse(localStorage.getItem('customersData')) || [];
        setBudgetsData(storedBudgets);
        setProjectsData(storedProjects);
        setCustomersData(storedCustomers);
        setClients(customersData); // Carga los datos de clientes desde customers.json
    }, []);
    return (
        <div className="sidebar">
            <div className="bar" id="company">
                Empresa
            </div>
            <div className="bar">
                <BsArrowReturnRight className="smaller" />
                Nombre Empleado
            </div>
            
            <div className="bar barWithIcon" id="search">
                Buscar Cotizacion
                <div className="icons">
                    <BsSearch />
                    <BsFilter />
                </div>
            </div>
            <div className="list">
            <div className="barWithIcon">
                    Cotizaciones
                    <NavLink
                        to={`/createbudget`}
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        <BsPlusSquare />
                    </NavLink>
                </div>
                <ul>
                {budgetsData.map((data) => (
                        <li key={data.id}>
                            <ListedBudget data={data} activeProject={props.activeProject} setActiveProject={props.setActiveProject}/>
                        </li>
                    ))}
                </ul>
                <hr />
                <div className="barWithIcon">
                    Proyectos
                    
                </div>
                <ul>
                {projectsData.map((data) => (
                        <li key={data.id}>
                            <ListedProject data={data} activeProject={props.activeProject} setActiveProject={props.setActiveProject}/>
                        </li>
                    ))}
                </ul>
                <hr />
                <br />
                <div className="barWithIcon">
                    Clientes
                    <NavLink
                        to={`/createcustomer`}
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        <BsPlusSquare />
                    </NavLink>
                </div>
                <ul>
                {customersData.map((data) => (
                        <li key={data.id}>
                            <ListedCustomer data={data} activeProject={props.activeProject} setActiveProject={props.setActiveProject}/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
