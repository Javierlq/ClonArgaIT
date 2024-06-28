import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { BsTrashFill } from "react-icons/bs";
import Sidebar from "../components/Sidebar";
//import { NavLink } from "react-router-dom";

const IdBudget = (props) => {
    const { id } = useParams();
    const [budgetData, setBudgetData] = useState(null);
    let navigate = useNavigate();

    useEffect(() => {
        const storedBudgets = JSON.parse(localStorage.getItem("budgetsData")) || [];
        const budget = storedBudgets.find((b) => b.id === id);
        if (budget) {
            setBudgetData(budget);
        } else {
            // Manejar el caso donde no se encuentra el presupuesto con el id dado
            console.log(`No se encontró ningún presupuesto con el id ${id}`);
        }
    }, [id]);

    const handleDeleteBudget = () => {
        // Get current stored budgets
        const storedBudgets =
            JSON.parse(localStorage.getItem("budgetsData")) || [];

        // Filter out the budget to delete
        const updatedBudgets = storedBudgets.filter((b) => b.id !== id);

        // Update localStorage with the updated budgets
        localStorage.setItem("budgetsData", JSON.stringify(updatedBudgets));

        // Redirect or navigate to another page (optional)
        navigate("/start", { replace: true });
    };

    const handleCreateProject = () => {
        // Get current stored budgets
        const storedBudgets = JSON.parse(localStorage.getItem("budgetsData")) || [];
    
        // Find the budget to convert into project
        const budgetToConvert = storedBudgets.find((b) => b.id === id);
    
        // Guard against missing budget
        if (!budgetToConvert) {
            alert("No se encontró la cotización para convertir en proyecto.");
            return;
        }
    
        // Get existing projects data
        const existingProjects = JSON.parse(localStorage.getItem("projectsData")) || [];
    
        // Add new project to existing projects
        existingProjects.push(budgetToConvert);
    
        // Save back to localStorage
        localStorage.setItem("projectsData", JSON.stringify(existingProjects));
    
        // Optionally, update budgetsData by filtering out the converted budget
        const updatedBudgets = storedBudgets.filter((b) => b.id !== id);
        localStorage.setItem("budgetsData", JSON.stringify(updatedBudgets));
    
        // Notify user and navigate
        console.log();
        alert("Proyecto guardado en localStorage");
        navigate('/start', { replace: true });
    };

    if (!budgetData) {
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
                    {budgetData ? (
                        <>
                            <h1>Nombre: {budgetData.nombre}</h1>
                            <h6>Version: {budgetData.version}</h6>
                            <h6>Id: {budgetData.id}</h6>
                            <h2 onClick={handleDeleteBudget} style={{ color: "red", cursor: "pointer" }}>
                                Eliminar Cotización <BsTrashFill />
                            </h2>
                            <h2 onClick={handleCreateProject} style={{ color: "green", cursor: "pointer" }}>
                                Crear proyecto de cotización
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

export default IdBudget;
