import { useDispatch, useSelector } from "react-redux";
import Search from "../../../admin/Component/Search/Search";
import Layout from "../../Layout/Layout";
import { deleteKeuangan } from "../../../admin/store/keuanganSlice";
import { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../../admin/Component/Pagination/Pagination";
import ModalDelete from "../../../admin/Component/ModalDelete/ModalDelete";

const KelolaKeuangan = () => {
    const dispatch = useDispatch();
    const KeuanganList = useSelector((state) => state.keuangan.dataKeuangan);
    const [showModal, setShowModal] = useState(false);
    const [keuanganToDelete, setKeuanganToDelete] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const [searchTerm, setSearchTerm] = useState('');
    const itemsPerPageOptions = [3, 5, 10, 20];

    // handle delete click
    const handleDeleteClick = (id) => {
        setKeuanganToDelete(id);
        setShowModal(true);
    };

    const handleDeleteConfirm = () => {
        if (keuanganToDelete !== null) {
            dispatch(deleteKeuangan(keuanganToDelete));
            setShowModal(false);
            setKeuanganToDelete(null);
        }
    }

    const handleModalClose = () => {
        setShowModal(false);
        setKeuanganToDelete(null);
    };

    // handle serch
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1);
    };

    const indexOfLastKeuangan = currentPage * itemsPerPage;
    const indexOfFirstKeuangan = indexOfLastKeuangan - itemsPerPage;

    const filteredKeuangan = KeuanganList.filter((keuangan) =>
        keuangan.jenisTransaksi.toLowerCase().includes(searchTerm.toLowerCase()) ||
        keuangan.jumlah.toLowerCase().includes(searchTerm.toLowerCase()) ||
        keuangan.keterangan.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const currentKeuangan = filteredKeuangan.slice(indexOfFirstKeuangan, indexOfLastKeuangan);
    const totalPages = Math.ceil(filteredKeuangan.length / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleItemsPerPageChange = (newItemsPerPage) => {
        setItemsPerPage(newItemsPerPage);
        setCurrentPage(1);
    };


    return (
        <Layout titlePage="Kelola Keuangan">
            <div className="wrap-table-content-whitout-card">
                <div className="row">
                    <div className="col-4 mb-2">
                        <Search onSearchChange={handleSearchChange} />
                    </div>
                    <div className="col-2 ms-auto">
                        <Link to='/admin/tambah-keuangan'>
                            <button type="button" className="btn btn-primary">Tambah Keuangan</button>
                        </Link>
                    </div>
                </div>
                <div className="overflow-table">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead className="custom-thead">
                                <tr className='table-head'>
                                    <th>ID</th>
                                    <th>Jenis Transaksi</th>
                                    <th>Jumlah</th>
                                    <th>Tanggal</th>
                                    <th>Keterangan</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className='custom-tbody'>
                                {filteredKeuangan.length > 0 ? (
                                    currentKeuangan.map((keuangan) => (
                                        <tr key={keuangan.id} className='align-middle'>
                                            <td>{keuangan.id}</td>
                                            <td>{keuangan.jenisTransaksi}</td>
                                            <td>{keuangan.jumlah}</td>
                                            <td>{keuangan.tanggal}</td>
                                            <td>{keuangan.keterangan}</td>
                                            <td>
                                                <Link to={`/bendahara/edit-keuangan/${keuangan.id}`}>
                                                    <button className='btn btn-outline-warning mb-1 px-0'><i className='bx bxs-edit-alt' /></button>
                                                </Link>
                                                <button className='btn btn-danger mb-1 px-0' onClick={() => handleDeleteClick(keuangan.id)}><i className='bx bx-trash' /></button>
                                                <button className='btn btn-primary mb-1 px-0'><i className='bx bx-show' /></button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={7} className="text-center">
                                            <img src={image.notFound} alt="" className='mt-5' />
                                            <h6 className='mt-2'>Data tidak ditemukan</h6>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    itemsPerPage={itemsPerPage}
                    itemsPerPageOptions={itemsPerPageOptions}
                    onPageChange={handlePageChange}
                    onItemsPerPageChange={handleItemsPerPageChange}
                />

                {/* Modal Konfirmasi Delete */}
                {showModal && (
                    <ModalDelete
                        onClose={handleModalClose}
                        onConfirm={handleDeleteConfirm}
                        title="Hapus Artikel"
                        description="Apakah Anda yakin ingin menghapus data keuangan ini?"
                    />
                )}
            </div>
        </Layout>

    )
}

export default KelolaKeuangan;