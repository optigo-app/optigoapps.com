import React from 'react'
import './HeroBanner.scss';
import Image from 'next/image';

const HeroBanner = ({ career = 'CAREERS', heading = 'Your new team is waiting', subheading = 'At OptigoApps, we believe in the power of our people to solve the toughest industry problems.', buttonData = `Search open roles &nbsp;→`, src = '/bg.webp' }) => {

    return (
        <div className="hero-banner" style={{
            backgroundImage: 'url(/bg.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}>
            <div className="hero-banner-content">
                <p className="breadcrumb">{career !== "" ? career : ""}</p>
                <h1 className="heading">{heading !== "" ? heading : ""}</h1>
                <p className="subheading">
                    {subheading !== "" ? subheading : ""}
                </p>
                {buttonData !== "" ? <button className="cta-button">{buttonData !== "" ? buttonData : ""}</button> : ""}
            </div>

            <div className="hero-banner-image">
                <Image
                    src={src}
                    alt="optigo Team"
                    height={400}
                    width={400}
                />
            </div>
        </div>
    )
}

export default HeroBanner
