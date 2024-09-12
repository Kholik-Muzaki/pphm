import { Link } from 'react-router-dom'
import './CardArtikel.css'

const CardArtikel = ({ data }) => {
    return (
        <>
            <div className="container">
                <div className="row">
                    {data.map(item => (
                        <div key={item.id} className="col-sm-12 col-md-6 col-lg-4">
                            <div className="card">
                                <img src={item.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-dark">{item.title}</h5>
                                    <p className="card-text text-dark">
                                        {item.text.slice(0, 100)}
                                        <Link to={'/'} className="read-more"> Read More...</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default CardArtikel;