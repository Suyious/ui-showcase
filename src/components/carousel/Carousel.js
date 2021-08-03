import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '../Navigation';
import "./Carousel.css"
import img from "../../images/carousel.ico"
import img2 from "../../images/ecrimeico.png"
import sctplg from "../../images/scottpilg2.jpg"
//"https://bit.ly/2VpUNYI"

function Carousel() {
    return (
        <div className="Carousel">
            <Helmet>
                <title>Carousel | UI Showcase</title>
                <meta name="description" content="UI Design for carousel | scrollable, draggable, clickable carousel" />
                <link rel="icon" href={img} />
                <link rel="apple-touch-icon" href={img2} />
            </Helmet>
            <Navigation subhead="carousel"/>
            <div className="carousel_container">
                <div className="scroll_buttons previous">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                </div>
                <div className="scroller">
                    <div className="carousel_img"><img src={sctplg} alt="scott-pilgrim" /></div>
                    <div className="carousel_img"><img src={sctplg} alt="scott-pilgrim" /></div>
                    <div className="carousel_img"><img src={sctplg} alt="scott-pilgrim" /></div>
                    <div className="carousel_img"><img src={sctplg} alt="scott-pilgrim" /></div>
                    <div className="carousel_img"><img src={sctplg} alt="scott-pilgrim" /></div>
                    <div className="carousel_img last"><img src={sctplg} alt="scott-pilgrim" /></div>
                </div>
                <div className="scroll_buttons next">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                </div>
                <div className="scroll_bar"></div>
            </div>
        </div>
    )
}

export default Carousel
