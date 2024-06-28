import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
    return (
        <header className="header">
            <ul>
                <NavLink
                    to={`/idproject/${props.id}`}
                    className={({ isActive }) =>
                        isActive ? "active" : "button"
                    }
                >
                    <li>
                        <h3>Proyecto</h3>
                    </li>
                </NavLink>
                <NavLink
                    to={`/billing/${props.id}`}
                    className={({ isActive }) =>
                        isActive ? "active" : "button"
                    }
                >
                    <li>
                        <h3>Cotizaciones y facturación</h3>
                    </li>
                </NavLink>
                <NavLink
                    to={`/customer/${props.id}`}
                    className={({ isActive }) =>
                        isActive ? "active" : "button"
                    }
                >
                    <li>
                        <h3>Información del cliente</h3>
                    </li>
                </NavLink>
                <NavLink
                    to={`/report/${props.id}`}
                    className={({ isActive }) =>
                        isActive ? "active" : "button"
                    }
                >
                    <li>
                        <h3>Reporte Operacional</h3>
                    </li>
                </NavLink>
            </ul>
        </header>
    );
};

export default Navbar;
