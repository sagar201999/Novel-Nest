import React from 'react'

const Carousel = () => {
    return (
        <>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4bcf3981646493.5d08b72093df8.jpg" className="d-block" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/709a8636562907.5720d6b72e874.jpg" className="d-block" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://wallpaper.dog/large/723012.jpg" className="d-block" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Carousel;