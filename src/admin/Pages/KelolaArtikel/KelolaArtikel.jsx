import React, { useState } from 'react';
import { artikelData as initialArtikelData } from "../../../user/data"; // Inisialisasi data artikel
import TableContent from "../../Component/TableContent/TableContent";
import Layout from "../../Layout/Layout";
import ModalDelete from '../../Component/ModalDelete/ModalDelete';
import ModalSuccess from '../../Component/ModalSuccess/ModalSuccess';

const KelolaArtikel = () => {
    const [artikelData, setArtikelData] = useState(initialArtikelData); // Menyimpan data artikel dalam state
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [selectedArtikel, setSelectedArtikel] = useState(null);

    const handleEdit = (artikel) => {
        alert(`Berhasil diedit: ${artikel.title}`);
    };

    const handleDelete = (artikel) => {
        setSelectedArtikel(artikel); 
        setIsModalOpen(true);
    };

    const handleDeleteConfirm = () => {
        // Hapus artikel dari artikelData
        const updatedData = artikelData.filter(artikel => artikel.id !== selectedArtikel.id);
        setArtikelData(updatedData); 

        setIsModalOpen(false); 
        setIsSuccessModalOpen(true); 
        setSelectedArtikel(null);
    };

    const closeModal = () => {
        setIsModalOpen(false); // Menyembunyikan modal delete
    };

    const closeSuccessModal = () => {
        setIsSuccessModalOpen(false); // Menyembunyikan modal sukses
    };

    return (
        <>
            <Layout titlePage="Kelola artikel">
               <div className="container">
                 <TableContent data={artikelData} onEdit={handleEdit} onDelete={handleDelete} />
               </div>
            </Layout>

            {/* Modal Delete */}
            {isModalOpen && (
                <ModalDelete
                    onClose={closeModal}
                    title="Konfirmasi Hapus"
                    description={`Apakah kamu yakin ingin menghapus artikel "${selectedArtikel?.title}"?`}
                    onConfirm={handleDeleteConfirm} // Tambahkan fungsi untuk handle "Oke"
                />
            )}

            {/* Modal Success */}
            {isSuccessModalOpen && (
                <ModalSuccess
                    onClose={closeSuccessModal}
                    title="Berhasil"
                    description="Artikel berhasil dihapus."
                />
            )}
        </>
    );
};

export default KelolaArtikel;
