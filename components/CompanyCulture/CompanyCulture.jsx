import React from 'react';
import './CompanyCulture.scss';

const CompanyCulture = () => {
    return (
        <section className="team-story">
            <div className="team-story__left">
                <div className="image-container">
                    <img src='/company-culture-1.png' alt="Team at work" className="main-img" />
                </div>
            </div>

            <div className="team-story__right">
                <h2>New Ideas. Fresh Minds. Real Growth – One Team.</h2>
                <p>
                    At <strong>OptigoApps</strong>, we’re more than a workplace — we’re a team that grows, learns, and creates together.
                </p>
                <p>
                    Our culture is built on support, respect, and collaboration. We celebrate diverse ideas and believe that great software is made when people feel valued and inspired.
                </p>
                <p>
                    Here, you’ll work alongside passionate professionals on innovative ERP solutions that empower the jewellery industry — while being supported every step of the way by teammates who mentor and uplift each other.
                </p>
                <p>
                    Whether you’re starting your career or taking the next step, at OptigoApps, your growth and success are a team effort.
                </p>
                <br />
                <strong>Join us and let’s build the future together. Apply now and become part of the OptigoApps family!</strong>
            </div>
        </section>
    );
};

export default CompanyCulture;
