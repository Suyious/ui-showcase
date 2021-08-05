import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from './Footer'
import "./Home.css"
import Navigation from './Navigation'
import ProjectCard from './ProjectCard'
import SearchBox from './SearchBox'
import img from "../images/carousel.ico"
import carousel from "../images/carousel.jpg"

function Home() {
    return (
        <div className="Home">
            <Helmet>
                <title>UI-Showcase | Home</title>
                <meta name="description" content="UI Design Elements custom made | Home page" />
                <link rel="icon" href={img} />
            </Helmet>
            <Navigation/>
            <div className="landing">
                <div className="curve"/>
                <div className="projects">
                    <SearchBox/>
                    <ProjectCard name="carousel" screenshot={carousel} description="This one is  the shitiest of them all. Truly shitiest Lorem Ipsum is what I'd type here but that is apparently not very working so I gotta improvise to get myself some pseudo data." path="/carousel"/>
                    <ProjectCard name="carousel" screenshot={carousel} description="This one is  the shitiest of them all Lorem Ipsum is what I'd type here but that is apparently not very working so I gotta improvise to get myself some pseudo data."/>
                    <ProjectCard name="carousel" screenshot={carousel} description="This one is  the shitiest of them all Lorem Ipsum is what I'd type here but that is apparently not very working so I gotta improvise to get myself some pseudo data."/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home
