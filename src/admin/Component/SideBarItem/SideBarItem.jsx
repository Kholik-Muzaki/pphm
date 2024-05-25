import { NavLink } from "react-router-dom";
import './SideBarItem.css';

const SidebarItem = ({ icon, title, location, condition, onClick }) => {
    return (
        <li className={`sidebar-item  ${condition}`} onClick={onClick}>
            <NavLink to={location} className='sidebar-link'>
                <div className='iconNavbar'>{icon} </div>
                <span>{title}</span>
            </NavLink>
        </li>
    );
};

export default SidebarItem;
