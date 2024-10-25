import './ProgramUnggulanImage.css';

const ProgramUnggulanImage = ({ data }) => {
    return (
        <>
            {data.map(item => (
                <div key={item.id} className="col-sm-12 col-md-6 col-lg-4  mb-4">
                    <div className="card card-program-unggulan">
                        <img src={item.image} className="card-img" alt="" />
                        <div className="card-body">
                            <h5 className="card-title text-center title-program-unggulan">{item.title}</h5>
                            <p className="card-text text-center desc-program-unggulan">{item.text}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ProgramUnggulanImage;