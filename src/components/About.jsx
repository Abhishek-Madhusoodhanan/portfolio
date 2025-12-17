import './About.css';

const About = () => {
    const stats = [
        { value: '1+', label: 'Years Experience' },
        { value: '5+', label: 'Projects Completed' },
        { value: '3+', label: 'Technologies' },
        { value: '100%', label: 'Dedication' },
    ];

    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">
                    About <span>Me</span>
                </h2>

                <div className="about-content">
                    <div className="about-image">
                        <div className="image-container">
                            <div className="image-border"></div>
                            <img src="/profile.png" alt="Abhishek Madhusoodhanan" />
                            <div className="experience-badge">
                                <span className="exp-number">1+</span>
                                <span className="exp-text">Years of Experience</span>
                            </div>
                        </div>
                    </div>

                    <div className="about-text">
                        <h3 className="about-subtitle">
                            Full Stack Python Developer & Software Developer Engineer
                        </h3>

                        <p className="about-description">
                            I'm a passionate Full Stack Python Developer skilled in designing, developing,
                            and deploying web applications using <strong>Django, HTML, CSS, JavaScript, and Bootstrap</strong>.
                            Currently working as an SDE at Gaude Business and Infrastructure Solutions, Technopark.
                        </p>

                        <p className="about-description">
                            I specialize in building intelligent web applications by integrating AI models into production environments.
                            My expertise includes <strong>RAG (Retrieval-Augmented Generation), LLMs, LangChain, React, and Django</strong>.
                            I'm eager to contribute, collaborate, and innovate within forward-thinking development teams.
                        </p>

                        <div className="about-info">
                            <div className="info-item">
                                <span className="info-icon">📧</span>
                                <div>
                                    <span className="info-label">Email</span>
                                    <span className="info-value">abhishekmadhusoodhanan18@gmail.com</span>
                                </div>
                            </div>
                            <div className="info-item">
                                <span className="info-icon">📍</span>
                                <div>
                                    <span className="info-label">Location</span>
                                    <span className="info-value">Thiruvananthapuram, Kerala</span>
                                </div>
                            </div>
                            <div className="info-item">
                                <span className="info-icon">🎓</span>
                                <div>
                                    <span className="info-label">Education</span>
                                    <span className="info-value">B.Tech in Computer Science</span>
                                </div>
                            </div>
                            <div className="info-item">
                                <span className="info-icon">💼</span>
                                <div>
                                    <span className="info-label">Status</span>
                                    <span className="info-value available">Available for Opportunities</span>
                                </div>
                            </div>
                        </div>

                        <div className="about-buttons">
                            <a href="/resume.pdf" download className="btn btn-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                                Download Resume
                            </a>
                            <a href="#contact" className="btn btn-secondary">
                                Let's Talk
                            </a>
                        </div>
                    </div>
                </div>

                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-card glass-card">
                            <span className="stat-value gradient-text">{stat.value}</span>
                            <span className="stat-label">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
