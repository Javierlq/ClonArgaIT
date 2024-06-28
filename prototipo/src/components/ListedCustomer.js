// ListedCustomer.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsPencilSquare, BsChevronRight } from 'react-icons/bs';

const ListedCustomer = ({ data }) => {
    return (
        <div className="client">
            <NavLink to={`/idcustomer/${data.id}`} className="client-link">
                <div className="icons">
                    <BsChevronRight className="smaller" />
                    {data.nombre_fantasia || data.nombre}
                </div>
            </NavLink>
            <NavLink to={`/editcustomer/${data.id}`} className="edit-link">
                <BsPencilSquare />
            </NavLink>
        </div>
    );
};

export default ListedCustomer;
