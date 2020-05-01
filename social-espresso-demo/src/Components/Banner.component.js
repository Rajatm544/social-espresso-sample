import React from "react";
import Slide from "react-reveal/Slide";

const Banner = () => {
    return (
        <div className="card">
            <Slide>
                <img
                    className="card-img"
                    src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80"
                />
            </Slide>
            <div className="card-body">
                <h2 className="card-title">
                    #1 Digital Marketing Company for MORE BUSINESS GROWTH
                    Digital
                </h2>
                <p className="card-text">
                    Marketing Services Proven to Increase Your Bottom Line Want
                    MORE out of your online marketing? You’ve come to the right
                    place.
                    {/* place. We’ve partnered with hundreds of small, medium, and
                    enterprise businesses to get the results they want through
                    comprehensive, cohesive digital marketing campaigns. Our
                    employees see the world through the eyes of a business owner
                    and leverage analytics and data to market our clients’
                    businesses as if they were our own. If you’re looking for a
                    marketing partner that serves as your de facto VP of
                    marketing, increases leads and sales, differentiates your
                    brand in the marketplace, and optimizes your marketing
                    costs, you’ve found your people. */}
                    Ready to GROW? Let’s make it happen.
                </p>
            </div>
        </div>
    );
};

export default Banner;
