import { Link } from 'react-router-dom'
import './CardArtikel.css'

const CardArtikel = ({ data }) => {
    return (
        <>
            <div className="container">
                <div className="row">
                    {data.map(item => (
                        <div key={item.id} className="col-sm-12 col-md-6 col-lg-4">
                            <div className="card card-artikel">
                                <img src={`https://api.pphmbersole.site/${item.image}`} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-title">{item.title}</h5>
                                    <p className="card-text text-dark">
                                        {item.content.slice(0, 100)}
                                        <br />
                                    </p>
                                    <Link to={`/artikel/${item.id}`} className="read-more"> Read More...</Link>
                                </div>
                                <div className="card-footer d-flex justify-content-between">
                                    <p className='text-footer'>{item.date}</p>
                                    <p className='text-footer'>Author: {item.author}</p>
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