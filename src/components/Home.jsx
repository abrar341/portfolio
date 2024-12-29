import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

export const Home = () => {
    return (
        <section name="home" id="about">
            <div className="columns">
                <div>
                    <h2>Muhammad<br />Abrar</h2>
                    <h3 className="text-orange">Full Stack Developer <br /> ( M E R N )</h3>
                    <p>
                        MERN Stack Developer skilled in Node.js, React, and Tailwind CSS, good in responsive, user-friendly applications. Good in state management and delivering scalable, high-quality solutions with clean, good designs. Excellent at collaborating with team members, fostering strong communication, and contributing effectively to group projects.

                    </p>

                    <div className="social-links">
                        <a href="https://github.com/abrar341" target="_blank" rel="noopener noreferrer" className="btn">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/muhammad-a-799a55258/" target="_blank" rel="noopener noreferrer" className="btn">
                            <FaLinkedin />
                        </a>

                        <a href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer" className="btn">
                            <FaFacebook />
                        </a>
                        <a href="https://www.instagram.com/p/DCFDY2ttDZm" target="_blank" rel="noopener noreferrer" className="btn">
                            <FaInstagram />
                        </a>

                    </div>
                    <div style={{
                        display: 'flex',
                        justifyItems: "center",
                        alignItems: "center",
                        gap: "4px",
                        padding: "3px 0px",
                        marginTop: "16px",
                        marginBottom: "6px",

                    }}>
                        <a href="mailto:muhammadabrar341@gmail.com" target="_blank" rel="noopener noreferrer" className="contact">
                            <FaEnvelope />
                        </a>

                        <span>muhammadabrar341@gmail.com</span>

                    </div>
                    <div style={{
                        display: 'flex',
                        justifyItems: "center",
                        alignItems: "center",
                        gap: "4px",
                        padding: "3px 0px",
                    }}>
                        <a href="tel:+923498512161" target="_blank" rel="noopener noreferrer" className="contact">
                            <FaPhone />
                        </a>

                        <span>+923498512161</span>

                    </div>

                </div>
            </div>
        </section>
    );
};


