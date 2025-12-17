import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: 'Software Developer Engineer (SDE)',
            company: 'Gaude Business and Infrastructure Solutions',
            location: 'Technopark, Trivandrum',
            period: 'Sep 2025 - Present',
            current: true,
            description: [
                'Currently working with cutting-edge AI technologies including RAG (Retrieval-Augmented Generation), LLMs, LangChain, React, and Django.',
                'Building intelligent web applications by integrating AI models into production environments.',
                'Developing scalable solutions for enterprise clients using modern tech stack.',
            ],
            technologies: ['RAG', 'LangChain', 'LLMs', 'React', 'Django', 'Python'],
        },
        {
            id: 2,
            role: 'Full Stack Python Developer - Intern',
            company: 'Agileinfo Techytern Private Limited',
            location: 'Trivandrum',
            period: 'Aug 2024 - Sep 2025',
            current: false,
            description: [
                'Engineered scalable full-stack web solutions using Python and Django, integrating RESTful APIs with dynamic front-end interfaces built in HTML5, CSS3, and JavaScript.',
                'Diagnosed and resolved critical production bottlenecks, reducing technical debt and improving application stability by implementing rigorous debugging protocols.',
                'Collaborated with cross-functional teams to deliver high-quality software solutions.',
            ],
            technologies: ['Python', 'Django', 'REST APIs', 'HTML5', 'CSS3', 'JavaScript'],
        },
    ];

    const education = [
        {
            degree: 'B.Tech in Computer Science and Engineering',
            institution: 'Muslim Association College of Engineering',
            location: 'Venjaramoodu, Trivandrum',
            period: '2021 - 2025',
            grade: 'CGPA: 7.17',
        },
        {
            degree: 'Higher Secondary Education (Bio-Maths)',
            institution: "St. Mary's Higher Secondary School",
            location: 'Pattom, Trivandrum',
            period: '2019 - 2021',
            grade: 'Percentage: 79%',
        },
    ];

    return (
        <section id="experience" className="experience">
            <div className="container">
                <h2 className="section-title">
                    Work <span>Experience</span>
                </h2>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div
                            key={exp.id}
                            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                        >
                            <div className="timeline-content glass-card">
                                {exp.current && <span className="current-badge">Current</span>}
                                <div className="timeline-header">
                                    <h3 className="timeline-role">{exp.role}</h3>
                                    <span className="timeline-period">{exp.period}</span>
                                </div>
                                <div className="timeline-company">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                    {exp.company}, {exp.location}
                                </div>
                                <ul className="timeline-description">
                                    {exp.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                                <div className="timeline-tech">
                                    {exp.technologies.map((tech, i) => (
                                        <span key={i} className="skill-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="timeline-dot">
                                <span className="dot-inner"></span>
                            </div>
                        </div>
                    ))}
                </div>

                <h2 className="section-title" style={{ marginTop: '80px' }}>
                    <span>Education</span>
                </h2>

                <div className="education-grid">
                    {education.map((edu, index) => (
                        <div key={index} className="education-card glass-card">
                            <div className="edu-icon">🎓</div>
                            <h3 className="edu-degree">{edu.degree}</h3>
                            <p className="edu-institution">{edu.institution}</p>
                            <p className="edu-location">{edu.location}</p>
                            <div className="edu-footer">
                                <span className="edu-period">{edu.period}</span>
                                <span className="edu-grade">{edu.grade}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
