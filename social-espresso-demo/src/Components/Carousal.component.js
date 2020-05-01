import React from "react";

const Carousal = () => {
    return (
        <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
        >
            <ol className="carousel-indicators">
                <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    className="active"
                ></li>
                <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                ></li>
                <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                ></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
                        alt="First slide"
                    />
                </div>
                <div className="carousel-item">
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1562577309-2592ab84b1bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
                        alt="Second slide"
                    />
                </div>
                <div className="carousel-item">
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1562577308-2c31685ad4e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
                        alt="Third slide"
                    />
                </div>
            </div>
            <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
            >
                <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
            </a>
            <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
            >
                <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
};

export default Carousal;
