import React from 'react'
import Footer from './Footer'
import "./Home.css"
import Navigation from './Navigation'
import ProjectCard from './ProjectCard'
import SearchBox from './SearchBox'

function Home() {
    return (
        <div className="Home">
            <Navigation/>
            <div className="landing">
                <div className="curve"/>
                <div className="projects">
                    <SearchBox/>
                    <ProjectCard name="carousel" description="This one is  the shitiest of them all. Truly shitiest Lorem Ipsum is what I'd type here but that is apparently not very working so I gotta improvise to get myself some pseudo data." path="/carousel"/>
                    <ProjectCard name="carousel" description="This one is  the shitiest of them all Lorem Ipsum is what I'd type here but that is apparently not very working so I gotta improvise to get myself some pseudo data."/>
                    <ProjectCard name="carousel" description="This one is  the shitiest of them all Lorem Ipsum is what I'd type here but that is apparently not very working so I gotta improvise to get myself some pseudo data."/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home
