import image from "../../../Image"

const BannerPage = (props) => {
    return (
        <>
            <div className="container-fluid" style={{
                height: '300px',
                borderBottom: '5px solid #FEB941',
            }}>
                <div className="row" style={{
                    height: '100%'
                }}>
                    <div className="col-12 d-flex align-items-center justify-content-center" style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), url(${image.banner})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        textAlign: 'center'
                    }}>
                        <h1 className="text-light text-center"> {props.label} </h1>
                    </div>
                </div>

            </div>
        </>
    )
}

export default BannerPage