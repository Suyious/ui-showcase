import React from 'react'
import Footer from './Footer'
import "./Home.css"
import ProjectCard from './ProjectCard'
import SearchBox from './SearchBox'

function Home() {
    return (
        <div className="Home">
            <div className="landing">
                <div className="curve"/>
                <div className="projects">
                    <SearchBox/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home
