import React from 'react';

const Dropdown = ({ imageSrc, dropdownContent }) => {
    return (
        <div className="dropdown">
            <button className="nav-link dropdown-toggle custom-dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">
                <img src={imageSrc} alt="Dropdown Image" />
            </button>
            <div className="dropdown-menu dropdown-menu-end">
                <div className='dropdown-item'>
                    {dropdownContent}
                </div>
            </div>
        </div>
    )
}

export default Dropdown
