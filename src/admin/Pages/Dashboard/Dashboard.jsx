import CountUp from 'react-countup';
import Layout from "../../Layout/Layout";
import './Dashboard.css';

const Dashboard = () => {
    return (
        <>
            <Layout titlePage={"Dashboard"}>
                <div className="container container-atas">
                    <div className="row row-dashboard">
                        <div className="col-sm-12 col-md-4 col-lg-3 mb-4">
                            <div className="card card-dashboard card-transaksi-masuk">
                                <div className="card-content">
                                    <div className="card-number">
                                        <CountUp end={100} duration={2.5} />
                                    </div>
                                    <i className='bx bx-cart-download bx-tada bx-md'></i>
                                    <div className="card-title">Transaksi Masuk</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-3">
                            <div className="card card-dashboard card-transaksi-keluar">
                                <div className="card-content">
                                    <div className="card-number">
                                        <CountUp end={100} duration={2.5} />
                                    </div>
                                    <i className='bx bxs-cart-add bx-tada bx-md'></i>
                                    <div className="card-title">Transaksi Keluar</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-3">
                            <div className="card card-dashboard card-total-pengeluaran">
                                <div className="card-content">
                                    <div className="card-number">
                                        <CountUp end={100} duration={2.5} />
                                    </div>
                                    <i className='bx bx-receipt bx-tada bx-md'></i>
                                    <div className="card-title">Total Pengeluaran</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-3">
                            <div className="card card-dashboard card-total-pemasukan">
                                <div className="card-content">
                                    <div className="card-number">
                                        <CountUp end={100} duration={2.5} />
                                    </div>
                                    <i className='bx bx-barcode bx-tada bx-md'></i>
                                    <div className="card-title">Total Pemasukan</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-3">
                            <div className="card card-dashboard card-sisa-kas">
                                <div className="card-content">
                                    <div className="card-number">
                                        <CountUp end={100} duration={2.5} />
                                    </div>
                                    <i className='bx bxs-badge-dollar bx-tada bx-md'></i>
                                    <div className="card-title">Sisa Kas</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-3">
                            <div className="card card-dashboard card-jumlah-artikel">
                                <div className="card-content">
                                    <div className="card-number">
                                        <CountUp end={100} duration={2.5} />
                                    </div>
                                    <i className='bx bx-library bx-tada bx-md'></i>
                                    <div className="card-title">Jumlah Artikel</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-3">
                            <div className="card card-dashboard card-jumlah-berita">
                                <div className="card-content">
                                    <div className="card-number">
                                        <CountUp end={100} duration={2.5} />
                                    </div>
                                    <i className='bx bx-book-content bx-tada bx-md'></i>
                                    <div className="card-title">Jumlah Berita</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Dashboard;
