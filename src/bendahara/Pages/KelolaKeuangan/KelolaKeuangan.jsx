import { useDispatch, useSelector } from "react-redux";
import Search from "../../../admin/Component/Search/Search";
import Layout from "../../Layout/Layout";
import { deleteKeuangan } from "../../../admin/store/keuanganSlice";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "../../../admin/Component/Pagination/Pagination";
import ModalDelete from "../../../admin/Component/ModalDelete/ModalDelete";
import image from "../../../Image";
import DatePeeker from "../../Components/DatePeeker/DatePeeker";
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { format } from 'date-fns';


const KelolaKeuangan = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const KeuanganList = useSelector((state) => state.keuangan.dataKeuangan);
    const [showModal, setShowModal] = useState(false);
    const [keuanganToDelete, setKeuanganToDelete] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const [searchTerm, setSearchTerm] = useState('');
    const itemsPerPageOptions = [3, 5, 10, 20];

    const [showModalDate, setShowModalDate] = useState(false);
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);

    const handleOpenDateModal = () => {
        setShowModalDate(true);
    }

    // Fungsi untuk memproses cetak laporan berdasarkan rentang tanggal
    const handleProcessDateRange = (startDate, endDate) => {
        setSelectedStartDate(startDate);
        setSelectedEndDate(endDate);

        const filteredData = KeuanganList.filter((keuangan) => {
            const tanggal = new Date(keuangan.tanggal);
            return tanggal >= startDate && tanggal <= endDate;
        });

        if (filteredData.length === 0) {
            alert('Tidak ada data dalam rentang tanggal yang dipilih.');
            return;
        }

        // Inisialisasi jsPDF dan pengaturan halaman
        const doc = new jsPDF();
        const pageWidth = doc.internal.pageSize.getWidth();

        // Menambahkan Kop Surat
        doc.setFontSize(12);
        doc.setTextColor(40);

        // Logo cetak
        doc.addImage(image.logo2, 'PNG', 10, 10, 30, 30);

        // Kop Cetak Laporan(Pondok Pesantren Hidayatul Mubtadiien)
        doc.setFont('helvetica', 'bold');
        doc.text('Laporan Keuangan', pageWidth / 2, 20, { align: 'center' });

        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.text('Pondok Pesantren Hidayatul Mubtadiien', pageWidth / 2, 28, { align: 'center' });
        doc.text('Jl. Inpres, Bersole, Karangpucung, Kec. Purwokerto Selatan', pageWidth / 2, 34, { align: 'center' });
        doc.text('Kabupaten Banyumas, Jawa Tengah 53142', pageWidth / 2, 40, { align: 'center' });

        doc.setDrawColor(0);
        doc.line(10, 43, pageWidth - 10, 43);

        doc.setFontSize(10);
        doc.text(`Periode: ${format(startDate, 'dd-MM-yyyy')} hingga ${format(endDate, 'dd-MM-yyyy')}`, pageWidth / 2, 50, { align: 'center' });

        autoTable(doc, {
            startY: 53,
            head: [['ID', 'Jenis Transaksi', 'Jumlah', 'Tanggal', 'Keterangan']],
            body: filteredData.map((keuangan) => [
                keuangan.id,
                keuangan.jenisTransaksi,
                keuangan.jumlah,
                format(new Date(keuangan.tanggal), 'dd-MM-yyyy'),
                keuangan.keterangan
            ]),
            headStyles: { fillColor: [0, 51, 153] },
            styles: { fontSize: 8, halign: 'center' }, // Gaya teks tabel
        });

        // Simpan file PDF
        doc.save(`Laporan_Keuangan_${format(startDate, 'dd-MM-yyyy')}_to_${format(endDate, 'dd-MM-yyyy')}.pdf`);
    };


    // handle edit click
    const handleEditClick = (id) => {
        navigate(`/bendahara/edit-keuangan/${id}`);

    }

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
                    <div className="col-3 mb-2">
                        <button type="button" className="btn btn-primary d-flex flex-row flex-start align-items-center"
                            onClick={handleOpenDateModal}>
                            <i className='bx bx-printer me-3'></i>Cetak Laporan Keuangan</button>
                    </div>
                    <div className="col-2 ms-auto">
                        <Link to='/bendahara/tambah-keuangan'>
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
                                            <td className="d-flex gap-1">
                                                <button className='btn btn-outline-warning mb-1 px-0' onClick={() => handleEditClick(keuangan.id)}><i className='bx bxs-edit-alt' /></button>
                                                <button className='btn btn-danger mb-1 px-0' onClick={() => handleDeleteClick(keuangan.id)}><i className='bx bx-trash' /></button>
                                                <button className='btn btn-primary mb-1 px-0' onClick={() => navigate(`/bendahara/detail-keuangan/${keuangan.id}`)}><i className='bx bx-show' /></button>
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

                {/* Modal Cetak Laporan Keuangan */}
                <DatePeeker
                    show={showModalDate}
                    onClose={() => setShowModalDate(false)}
                    onProcess={handleProcessDateRange}
                />

            </div>
        </Layout>

    )
}

export default KelolaKeuangan;