import { useState } from "react";
import Layout from "../../Layout/Layout";
import { useNavigate } from "react-router-dom";
// import { addKeuangan } from "../../../admin/store/keuanganSlice";
import ModalSuccess from "../../../admin/Component/ModalSuccess/ModalSuccess";
import { useDispatch } from "react-redux";
import { addKeuangan } from "../../../admin/store/keuanganSlice";

const TambahKeuangan = () => {
    const [jenisTransaksi, setJenisTransaksi] = useState('');
    const [jumlah, setJumlah] = useState('');
    const [tanggal, setTanggal] = useState('');
    const [keterangan, setKeterangan] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Tanggal yang akan dikirim", tanggal)

        const newKeuangan = {
            jenisTransaksi,
            jumlah: parseFloat(jumlah),
            tanggal: tanggal.split("T")[0],
            keterangan
        };

        console.log(newKeuangan);


        dispatch(addKeuangan(newKeuangan))
            .unwrap() // resolve promise
            .then(() => {
                setIsModalVisible(true);
            })
            .catch((error) => {
                alert("Gagal menambahkan data keuangan", error);
            })
    }

    const handleModalClose = () => {
        setIsModalVisible(false);
        navigate('/bendahara/kelola-keuangan');
    }

    return (
        <Layout titlePage="Tambah Keuangan">
            <div className="container form-container">
                <div className="row justify-content-center row-form-add">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header bg-primary text-white text-center">
                                <h4>Buat Data Keuangan Baru</h4>
                            </div>
                            <div className="card-body card-body-add">
                                <form onSubmit={handleSubmit} className='form-add-artikel'>
                                    <div className="form-group">
                                        <label htmlFor="jenisTransaksi" className='text-dark fw-bold'>Jenis Transaksi :</label>
                                        <select
                                            id="jenisTransaksi"
                                            className="form-select"
                                            aria-label="Default select example"
                                            value={jenisTransaksi}
                                            onChange={(e) => setJenisTransaksi(e.target.value)}
                                            required
                                        >
                                            <option> Pilih Jenis Transaksi</option>
                                            <option value="Pemasukan">Pemasukan</option>
                                            <option value="Pengeluaran">Pengeluaran</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="title" className='text-dark fw-bold'>Jumlah Transaksi :</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="jumlah"
                                            value={jumlah}
                                            onChange={(e) => setJumlah(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="tanggal" className='text-dark fw-bold'> Tanggal:</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="tanggal"
                                            value={tanggal}
                                            onChange={(e) => setTanggal(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="keterangan" className='text-dark fw-bold'> Keterangan:</label>
                                        <textarea
                                            className="form-control"
                                            id="keterangan"
                                            value={keterangan}
                                            onChange={(e) => setKeterangan(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="text-center mt-3 d-flex gap-3">
                                        <button type="submit" className="btn btn-success">
                                            Simpan Keuangan
                                        </button>
                                        <button type="button" className="btn btn-secondary ml-3" onClick={() => navigate('/admin/kelola-keuangan')}>
                                            Kembali
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            {isModalVisible && (
                <ModalSuccess
                    onClose={handleModalClose}
                    title={'Sukses'}
                    description={'Keuangan Berhasil Ditambahkan'} />
            )}
        </Layout >
    )
}

export default TambahKeuangan;