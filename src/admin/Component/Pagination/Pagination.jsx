import "./Pagination.css";
const Pagination = ({ currentPage, totalPages, itemsPerPage, itemsPerPageOptions, onPageChange, onItemsPerPageChange }) => {
    const handlePageChange = (page) => {
        if (page !== currentPage) {
            onPageChange(page);
        }
    };

    const handleItemsPerPageChange = (event) => {
        const newItemsPerPage = parseInt(event.target.value, 10);
        onItemsPerPageChange(newItemsPerPage);
    };

    const pageNumbers = [...Array(totalPages).keys()].map(num => num + 1);

    return (
        <div className="pagination-wrap d-flex justify-content-between align-items-center mt-3">
            {/* Dropdown untuk memilih jumlah item per halaman */}
            <div className="items-per-page">
                <label htmlFor="itemsPerPage" className="me-2">Items per page:</label>
                <select
                    id="itemsPerPage"
                    className="form-select"
                    value={itemsPerPage}
                    onChange={handleItemsPerPageChange}
                >
                    {itemsPerPageOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>

            {/* Pagination Buttons */}
            <nav>
                <ul className="pagination">
                    {pageNumbers.map((number) => (
                        <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
                            <button onClick={() => handlePageChange(number)} className="page-link">
                                {number}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Pagination;
