import { useEffect } from 'react';
import './GaleriVideo.css';
import { useDispatch, useSelector } from 'react-redux';
import { getVideo } from '../../../admin/store/videoSlice';


const GaleriVideo = () => {

    const dispatch = useDispatch();
    const { status, videos, error } = useSelector((state) => state.video);
    useEffect(() => {
        if (status === "idle") {
            dispatch(getVideo())
        }
    }, [dispatch, status])

    if (status === 'loading') {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500"></div>
            </div>
        );
    }

    if (status === "failed") {
        return <div className="text-center text-red-500">{error}</div>;
    };

    // Tampilkan pesan jika data kosong
    if (!videos || videos.length === 0) {
        return (
            <div className="text-center">
                <p className="text-lg font-semibold">Tidak ada video yang dapat ditampilkan.</p>
            </div>
        );
    }


    return (
        <div className="container-fluid container-video">
            <div className="container">
                <div className="row">
                    {/* tambahkan kondisi   dengan video.length ....*/}

                    {videos.map((video) => (
                        <div className="col-sm-6 col-md-6 col-lg-4 mb-3" key={video.id}>
                            <iframe
                                src={`https://www.youtube.com/embed/${video.link}`}
                                className='iframe-youtube'
                                title={video.judul}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default GaleriVideo;