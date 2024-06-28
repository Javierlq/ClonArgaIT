import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { BsTrashFill } from "react-icons/bs";

const IdProject = (props) => {
    const { id } = useParams();
    const [projectData, setProjectData] = useState(null);
    let navigate = useNavigate();

    const handleDeleteProject = () => {
        // Get current stored budgets
        const storedProjects =
            JSON.parse(localStorage.getItem("projectsData")) || [];

        // Filter out the budget to delete
        const updatedProjects = storedProjects.filter((b) => b.id !== id);

        // Update localStorage with the updated budgets
        localStorage.setItem("projectsData", JSON.stringify(updatedProjects));

        // Redirect or navigate to another page (optional)
        navigate("/start", { replace: true });
    };
    useEffect(() => {
        const storedProjects = JSON.parse(localStorage.getItem("projectsData")) || [];
        const project = storedProjects.find((b) => b.id === id);
        if (project) {
            setProjectData(project);
        } else {
            // Manejar el caso donde no se encuentra el presupuesto con el id dado
            console.log(`No se encontró ningún presupuesto con el id ${id}`);
        }
    }, [id]);

    return (
        <div className="App">
        <Sidebar
            activeProject={props.activeProject}
            setActiveProject={props.setActiveProject}
        />
        <div className="main-content">
            <Navbar id={id} />
            <div className="content">
            {projectData ? (
                        <>
                            <h1>Nombre: {projectData.nombre}</h1>
                            <h6>Version: {projectData.version}</h6>
                            <h6>Id: {projectData.id}</h6>
                            <h2 onClick={handleDeleteProject} style={{ color: "red", cursor: "pointer" }}>
                                Eliminar Proyecto <BsTrashFill />
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

export default IdProject;
