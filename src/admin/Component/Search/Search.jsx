import "./Search.css";
import image from '../../../Image';
import React from 'react';

const Search = ({ onSearchChange }) => {
    return (

        <div className="input-group input-group-search flex-nowrap">
            <img src={image.searchIcon} className="input-group-text bg-white rounded-start-3" style={{ maxWidth: "50px" }} />
            <input
                type="text"
                className="form-control form-control-cari-data-barang border border-start-0 rounded-end-3"
                placeholder="Search..." aria-label="Username" aria-describedby="addon-wrapping"
                onChange={onSearchChange} />
        </div>
    )
}

export default Search;