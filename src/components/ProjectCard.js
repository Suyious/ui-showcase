import React from 'react';
import "./ProjectCard.css"
import img from "../images/scottpilg.jpg"

function ProjectCard() {
    return (
        <div className="ProjectCard boxwidth">
            <div className="left">
                <img src={img} alt="screenshot" />
            </div>
            <div className="right">
                <div className="head">Showcase Name</div>
                <div className="description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. A eaque dignissimos deleniti aspernatur animi obcaecati magni aperiam id doloremque accusantium corporis suscipit adipisci, nobis nam et, doloribus placeat tempora expedita facilis? Unde dolore aperiam modi, odit amet id tempore quibusdam earum laboriosam praesentium quis tenetur saepe architecto non atque quas!
                </div>
            </div>
            <div className="visit">
                Visit Page
            </div>
        </div>
    )
}

export default ProjectCard
