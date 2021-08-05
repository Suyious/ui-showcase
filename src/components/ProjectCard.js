import React from 'react';
import "./ProjectCard.css"
//import img from "../images/scottpilg.jpg"
import { Link } from 'react-router-dom';

function ProjectCard({name, description, path, screenshot}) {
    return (
        <div className="ProjectCard boxwidth">
            <div className="left">
                <img src={screenshot} alt="screenshot" />
            </div>
            <div className="right">
                <div className="head">{name}</div>
                <div className="description">
                    {description}
                </div>
            </div>
            <Link to={path}>
                <div className="visit">
                    <p>Visit Page</p>
                </div>
            </Link>
        </div>
    )
}

export default ProjectCard
