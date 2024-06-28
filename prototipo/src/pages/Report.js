import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import projectsdata from "../assets/data.json";

const Report = () => {
    const { id } = useParams();

    const data = projectsdata[id];
    return (
        <div className="main-content">
            <Navbar id={id} />
            <div className="content">
                <h1>Reporte: {}</h1>
            </div>
        </div>
    );
};

export default Report;