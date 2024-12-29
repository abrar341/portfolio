import React from 'react'
import projects from '../projects'
import { FaGithub } from 'react-icons/fa'

export const Projects = () => {
    return (
        <section name='projects' id="why">
            <h2>Featured Projects Showcase</h2>
            <h3 className="text-orange subheader">what I built</h3>
            <div className="reasons center">
                {
                    projects.map((project, index) => (
                        <div key={project.name} className="reason">
                            <a href={project?.link} target="_blank" rel="noopener noreferrer" className="btn source-code">
                                <FaGithub />
                            </a>
                            <div className="number">0{index + 1}</div>
                            <h3 className='text-orange'>{project.name}</h3>
                            <p>{project.des}</p>
                            {/* <h4 className=" text-orange project_detail">Features</h4>
                            {
                                project.features.map((feature) => (
                                    <p key={feature}>{feature}</p>
                                ))
                            } */}
                            {/* <h4 className="project_detail" >Tools and Technologies</h4> */}

                            <h4>
                                {
                                    project.techs.map((tech) => (
                                        <h5 key={tech}>{tech},</h5>
                                    ))
                                }
                            </h4>


                        </div>
                    ))
                }
            </div >
        </section >
    )
}
