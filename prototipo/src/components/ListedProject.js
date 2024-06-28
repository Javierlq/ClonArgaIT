import "./ListedProject.css";
import { NavLink } from "react-router-dom";
import { BsPencilSquare, BsChevronRight } from "react-icons/bs";

const ListedProject = (props) => {
    return (
        <div className="project">
            <NavLink
                to={`/idproject/${props.data.id}`}
                className={() => (props.activeProject === props.data.id ? "project active" : "project")}
                onClick={() => {
                    props.setActiveProject(props.data.id);
                }}
            >
                <div className="icons">
                    <BsChevronRight className="smaller" />
                    {props.data.nombre}
                </div>
            </NavLink>
            <NavLink
                to={`/modifyproject/${props.data.id}`}
                className={({ isActive }) => (isActive ? "active" : "")}
            >
                <BsPencilSquare />
            </NavLink>
        </div>
    );
};

export default ListedProject;