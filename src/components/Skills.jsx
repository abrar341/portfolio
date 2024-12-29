import React from 'react';
import skills from '../skills';

export const Skills = () => {
    return (
        <section name="skills" id="services">
            <h2>Tools and Technologies</h2>
            <h3 className="text-orange subheader">Tools and Technologies</h3>
            <div className="services-list">
                {skills.map((skill) => (
                    <div key={skill.name} className="service">
                        <img
                            src={skill.image}
                            alt={skill.name}
                            className={`skill-icon ${skill.name === "Express" ? "white-image" : ""}`}
                        />
                        <div className="content">
                            <h2>{skill.name}</h2>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
};
