import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import projectsdata from "../assets/data.json";
import Sidebar from "../components/Sidebar";

const Billing = (props) => {
    const { id } = useParams();

    const data = projectsdata[id];

    return (
        <div className="App">
            <Sidebar activeProject={props.activeProject} setActiveProject={props.setActiveProject}/>
            <div className="main-content">
                <Navbar id={id} />
                <div className="content">
                    <h1>Cotización: </h1>
                
                </div>
            </div>
        </div>
    );
};

export default Billing;
