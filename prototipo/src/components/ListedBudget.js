import "./ListedBudget.css";
import { NavLink } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";

const ListedBudget = (props) => {
    props.setActiveProject(undefined);
    return (
        <div className="Budget">
            <NavLink
                to={`/idbudget/${props.data.id}`}
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
        </div>
    );
};

export default ListedBudget;