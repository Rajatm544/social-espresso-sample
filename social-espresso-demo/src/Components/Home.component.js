import React from "react";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Rotate from "react-reveal/Rotate";
import Banner from "./Banner.component";
import Carousal from "./Carousal.component";

const Home = () => {
    return (
        <div>
            <Zoom right>
                <Banner />
                <br />
                <Carousal />
                <br />
                <div className="card">
                    <div className="card-body">
                        <div className="card-text">
                            OUR MISSION At Social Espresso, we have a single
                            goal: Help business owners and marketing executives
                            use technology and the Internet to measurably
                            improve their marketing performance and ROI. This
                            starts by accurately tracking every single
                            advertising strategy – even if your only strategy is
                            your company website. Tracking will provide you with
                            never-before-seen insights about your business and
                            will change the way you look at advertising and
                            marketing forever.
                        </div>
                    </div>
                </div>
            </Zoom>
            <br />
            <Fade left>
                <div className="card">
                    <div className="card-body">
                        <div className="card-text">
                            <div className="card-title">
                                INDUSTRIES WE SERVE
                            </div>
                            Although nearly any type of business can leverage
                            the Internet as a sales and marketing tool and
                            benefit from accurate ad tracking and marketing
                            measurement, business-to-consumer service-type
                            businesses seem to benefit the most. Currently, Blue
                            Corona’s clients come from almost every B2C service
                            industry – from clean energy and solar panels to
                            roofing companies and HVAC. We have numerous bottled
                            water delivery companies and several large plumbing
                            companies. If you invest in advertising OR have a
                            website, Blue Corona can almost certainly help you
                            measurably increase your performance. The
                            performance increases we produce always exceed the
                            investment in our service (duh!).
                        </div>
                    </div>
                </div>
                <br />
                <div className="card">
                    <div className="card-body">
                        <div className="card-text">
                            <div className="card-title">
                                WHAT WE HOPE YOU'LL TAKE AWAY FROM OUR WEBSITE
                            </div>
                            If you take only one thing away from our website,
                            make it this – you can (dramatically) improve your
                            advertising and marketing performance by more
                            accurately tracking every single strategy you employ
                            – even if your only strategy is your website. When
                            speaking to business owners and prospective
                            customers, it’s quite common to hear them tell us
                            that they already track everything by asking their
                            prospective clients the infamous “How did you hear
                            about us?” question. Hmmm. The problem with this
                            approach is that the responses are inaccurate at
                            best, and more often than not, downright misleading.
                            Believe it – because we’ve tracked it and found that
                            as many as 50% of the responses to that question are
                            simply not true or accurate.
                        </div>
                    </div>
                </div>
            </Fade>
            <br />
            <Rotate bottom-left>
                <div className="card">
                    <div className="card-body">
                        <div className="card-text">
                            <div className="card-title">
                                SOCIAL ESPRESSO SALES PITCH
                            </div>
                            Our sales pitch is simple: We market your business
                            as if it were our business. We provide a
                            “do-it-for-me” service that will, without question,
                            measurably improve your overall marketing ROI. We
                            start by tracking every single marketing strategy
                            you employ – even if your only marketing strategies
                            are your website and referrals. Accurate tracking is
                            the foundation of everything we do. Through
                            tracking, we quickly begin to understand your
                            business like you do – from an owner’s perspective.
                        </div>
                    </div>
                </div>
            </Rotate>
            <br />
        </div>
    );
    // const Loading = require("react-loading-animation");
    // return <Loading />;
};

export default Home;
