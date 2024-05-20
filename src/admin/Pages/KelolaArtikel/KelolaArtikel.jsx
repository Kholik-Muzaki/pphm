import Layout from "../../Layout/Layout";
import './KelolaArtikel.css';
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(title, author, date, category) {
    return { title, author, date, category };
}

const rows = [
    createData('Understanding React', 'John Doe', '2024-05-20', 'Technology'),
    createData('Learning JavaScript', 'Jane Smith', '2024-04-18', 'Programming'),
    createData('Web Development Trends', 'Alice Johnson', '2024-03-22', 'Web Development'),
];
const KelolaArtikel = () => {
    return (
        <>
            <Layout titlePage="Kelola Artikel">
                <div className="container container-atas">
                    <div className="row">
                        <div className="col-12">
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="article table">
                                    <caption>Kelola Artikel - Manage your articles</caption>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Title</TableCell>
                                            <TableCell align="right">Author</TableCell>
                                            <TableCell align="right">Date</TableCell>
                                            <TableCell align="right">Category</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow key={row.title}>
                                                <TableCell component="th" scope="row">
                                                    {row.title}
                                                </TableCell>
                                                <TableCell align="right">{row.author}</TableCell>
                                                <TableCell align="right">{row.date}</TableCell>
                                                <TableCell align="right">{row.category}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};
export default KelolaArtikel;