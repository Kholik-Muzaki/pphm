import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Paginator } from 'primereact/paginator';
import React, { useState } from 'react';
import './TableContent.css';

const TableContent = ({ data, onEdit, onDelete }) => {
    const [first, setFirst] = useState(0); // Indeks halaman saat ini
    const [rows, setRows] = useState(5); // Jumlah data per halaman

    const textContent = (rowData) => {
        const maxText = 100;
        return rowData.text.length > maxText ? rowData.text.slice(0, maxText) + '...' : rowData.text;
    };

    const actionTemplate = (rowData) => {
        return (
            <div className="d-flex">
                <button className="btn btn-sm btn-primary me-2 btn-edit" onClick={() => onEdit(rowData)}>
                    <i className='bx bx-edit'></i> Edit
                </button>
                <button className="btn btn-sm btn-danger btn-delete" onClick={() => onDelete(rowData)}>
                    <i className='bx bxs-trash'></i> Delete
                </button>
            </div>
        );
    };

    // Fungsi untuk mengubah halaman
    const onPageChange = (event) => {
        setFirst(event.first); // Indeks data pertama pada halaman baru
        setRows(event.rows);   // Jumlah data yang ingin ditampilkan
    };

    return (
        <>
            <DataTable
                value={data.slice(first, first + rows)} // Ambil data sesuai halaman
                paginator={false} // Aktifkan paginator internal
                responsiveLayout="scroll"
                rows={rows} // Jumlah data per halaman
                first={first} // Indeks data pertama pada halaman saat ini
                onPageChange={onPageChange} // Fungsi untuk mengubah halaman
                className="p-datatable-custom"
            >
                <Column field="id" header="ID" />
                <Column field="image" header="Image" body={(rowData) => <img src={rowData.image} alt={rowData.title} style={{ width: '100px' }} />} />
                <Column field="title" header="Title" />
                <Column field="text" header="Text" body={textContent} />
                <Column field="date" header="Date" />
                <Column field="author" header="Author" />
                <Column header="Action" body={actionTemplate} />
            </DataTable>

            {/* Komponen Paginator */}
            <Paginator
                rows={rows}
                first={first}
                totalRecords={data.length} // Jumlah total data
                onPageChange={onPageChange}
                rowsPerPageOptions={[5, 10, 25, 50]}
            />
        </>
    );
};

export default TableContent;