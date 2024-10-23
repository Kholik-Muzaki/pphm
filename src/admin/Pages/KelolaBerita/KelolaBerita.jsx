import Layout from "../../Layout/Layout"
import { dataBerita } from "../../../user/data";
import { useState } from "react";

const KelolaBerita = () => {
    const articlesPerPage = 4; // jumlah artikel per halaman
    const [currentPage, setCurrentPage] = useState(1);

    // Hitung indeks awal dan akhir artikel untuk halaman yang sedang aktif
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentBerita = dataBerita.slice(indexOfFirstArticle, indexOfLastArticle);

    // Fungsi untuk mengubah halaman
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const truncateContent = (content, wordLimit) => {
        if (!content) return ''; // Jika content undefined, kembalikan string kosong
        const words = content.split(' ');
        return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : content;
    };
    

    return (
        <>
            <Layout titlePage="Kelola Artikel">
                <div className="container container-atas">
                    <div className="row">
                        <div className="col-12">
                            <table className="table table-bordered">
                                <thead className="thead-dark">
                                    <tr>
                                        <th style={{ width: '10%' }}>Image</th> {/* Kolom untuk Image */}
                                        <th style={{ width: '20%' }}>Title</th>
                                        <th style={{ width: '15%' }}>Author</th>
                                        <th style={{ width: '15%' }}>Date</th>
                                        <th style={{ width: '30%' }}>Content</th>
                                        <th style={{ width: '10%' }}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentBerita.map((article, index) => (
                                        <tr key={index}>
                                            <td>{article.image}</td>
                                            <td>{article.title}</td>
                                            <td>{article.author}</td>
                                            <td>{article.date}</td>
                                            <td>{truncateContent(article.text, 10)}</td>
                                            <td>
                                                <button className="btn btn-primary btn-sm mb-2">Edit</button>
                                                <button className="btn btn-danger btn-sm ml-2">Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {/* Pagination */}
                            <nav>
                                <ul className="pagination justify-content-center">
                                    {Array(Math.ceil(dataBerita.length / articlesPerPage)).fill().map((_, index) => (
                                        <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                            <button onClick={() => paginate(index + 1)} className="page-link">
                                                {index + 1}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}


export default KelolaBerita