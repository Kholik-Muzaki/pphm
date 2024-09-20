import { linkVideo } from '../../data';
import './GaleriVideo.css';

const GaleriVideo = () => {
    return (
        <div className="container-fluid container-video">
            <div className="container">
                <div className="row">
                    {linkVideo.map((video) => (
                        <div className="col-sm-6 col-md-6 col-lg-4" key={video.id}>
                            <iframe
                                src={video.link}
                                className='iframe-youtube'
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default GaleriVideo;