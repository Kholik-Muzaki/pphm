import { useEffect, useState } from "react";
import Layout from "../../Layout/Layout"
import { DataTable } from 'primereact/datatable';
import { Column } from "primereact/column";
const KelolaBerita = () => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        const dataDummy = [
            { code: 'P001', name: 'Product 1', category: 'Category 1', quantity: 10 },
            { code: 'P002', name: 'Product 2', category: 'Category 2', quantity: 20 },
        ];
        setProduct(dataDummy);
    }, []);
    return (
        <>
            <Layout titlePage="Kelola Berita">
                <div className="container">
                    <div className="card text">
                        <DataTable value={product} tableStyle={{ minWidth: '50rem' }}>
                            <Column field="code" header="Code"></Column>
                            <Column field="name" header="Name"></Column>
                            <Column field="category" header="Category"></Column>
                            <Column field="quantity" header="Quantity"></Column>
                        </DataTable>
                    </div>
                </div>
            </Layout>
        </>
    )
}


export default KelolaBerita