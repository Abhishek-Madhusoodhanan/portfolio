import { useState } from 'react';
import './Projects.css';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: 'Personal Portfolio',
            subtitle: 'Modern React Portfolio Website',
            description: 'A stunning personal portfolio website built with React and Vite. Features include smooth animations, video background, glassmorphism design, responsive layout, and interactive project modals. Showcases my skills, experience, and projects in a modern dark theme.',
            image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=400&fit=crop',
            technologies: ['React', 'Vite', 'CSS3', 'JavaScript', 'Responsive Design'],
            category: 'frontend',
            featured: true,
            github: 'https://github.com/Abhishek-Madhusoodhanan',
            highlights: [
                'Built with React + Vite for blazing fast performance',
                'Video background with smooth overlay transitions',
                'Glassmorphism UI with modern dark theme',
                'Fully responsive across all devices',
                'Interactive modals and smooth scroll animations'
            ]
        },
        {
            id: 2,
            title: 'InsightGen',
            subtitle: 'AI-Powered Situation Analysis & Report Generator',
            description: 'An AI-powered situation analysis tool that generates clarifying questions, structured summaries, and downloadable PDF reports. Integrated Gemini API for RAG-based analysis of text, uploaded PDFs, images, and real-time web data.',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
            technologies: ['Python', 'Gemini API', 'RAG', 'Ollama', 'PDF Generation'],
            category: 'ai',
            featured: true,
            github: 'https://github.com/Abhishek-Madhusoodhanan',
            highlights: [
                'RAG-based intelligent document analysis',
                'Multi-format input support (PDF, images, text)',
                'Real-time web data integration',
                'Auto-generated PDF reports',
                'Gemini API & Ollama integration'
            ]
        },
        {
            id: 3,
            title: 'Coupon Mart',
            subtitle: 'XXXXXXXXXXX XXXXXXXXXX XXXXX',
            description: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
            technologies: ['Python', 'Generative AI', 'Playwright', 'SaaS'],
            category: 'fullstack',
            featured: true,
            confidential: true,
            github: '#',
            highlights: [
                'XXXXXXXXXXXXXXXXXXXXX',
                'XXXXXXXXXXXXXXX',
                'XXXXXXXXXXXX',
                'XXXXXXXXXXXXXXXXXXXX',
                'XXXXXXXXXXXXXX'
            ]
        },
        {
            id: 4,
            title: 'Book Recommendation System',
            subtitle: 'Student Resource Platform',
            description: 'A web platform using Django and JavaScript to suggest books and KTU notes for students. Designed a dynamic, user-friendly interface for quick and organized content access.',
            image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&h=400&fit=crop',
            technologies: ['Django', 'JavaScript', 'Python', 'Database'],
            category: 'fullstack',
            featured: false,
            github: 'https://github.com/Abhishek-Madhusoodhanan',
            highlights: [
                'Smart book recommendations for students',
                'KTU notes and study materials',
                'Django backend with REST APIs',
                'Dynamic search and filtering',
                'User-friendly interface'
            ]
        },
        {
            id: 5,
            title: 'LCERS',
            subtitle: 'Live Civilians Emergency Response System',
            description: 'A real-time disaster management platform using Python and Flask. Integrated Visual Crossing, Mapbox, and Elevation APIs for live alerts and location-based services to improve civilian safety during emergencies.',
            image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop',
            technologies: ['Python', 'Flask', 'Mapbox API', 'Real-time', 'APIs'],
            category: 'fullstack',
            featured: true,
            github: 'https://github.com/Abhishek-Madhusoodhanan',
            highlights: [
                'Real-time disaster alerts',
                'Mapbox integration for location services',
                'Weather data from Visual Crossing API',
                'Elevation-based risk assessment',
                'Emergency response coordination'
            ]
        },
        {
            id: 6,
            title: 'Agileinfo Website Replica',
            subtitle: 'Pixel-Perfect Company Website',
            description: 'Recreated company website using HTML, CSS, and JavaScript with pixel-perfect accuracy. Implemented fully responsive design for seamless experience across devices with optimized UI/UX.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
            category: 'frontend',
            featured: false,
            github: 'https://github.com/Abhishek-Madhusoodhanan',
            highlights: [
                'Pixel-perfect design replication',
                'Fully responsive layout',
                'Optimized performance',
                'Cross-browser compatibility',
                'Modern UI/UX practices'
            ]
        },
    ];

    const filters = [
        { id: 'all', label: 'All Projects' },
        { id: 'ai', label: 'AI/ML' },
        { id: 'fullstack', label: 'Full Stack' },
        { id: 'frontend', label: 'Frontend' },
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    const openModal = (project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title animate-on-scroll">
                    My <span>Projects</span>
                </h2>

                <div className="project-filters">
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter.id)}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`project-card glass-card ${project.featured ? 'featured' : ''}`}
                            onClick={() => openModal(project)}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={`project-image ${project.confidential ? 'confidential-blur' : ''}`}>
                                <img src={project.image} alt={project.title} loading="lazy" />
                                <div className="project-overlay">
                                    {project.confidential ? (
                                        <button className="project-link restricted">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                            </svg>
                                            Production Identity
                                        </button>
                                    ) : (
                                        <button className="project-link">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="11" cy="11" r="8" />
                                                <path d="m21 21-4.35-4.35" />
                                            </svg>
                                            View Details
                                        </button>
                                    )}
                                </div>
                                {project.featured && !project.confidential && (
                                    <span className="featured-badge">⭐ Featured</span>
                                )}
                                {project.confidential && (
                                    <span className="featured-badge confidential-badge">🔒 Confidential</span>
                                )}
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-subtitle">{project.subtitle}</p>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tech">
                                    {project.technologies.slice(0, 3).map((tech, index) => (
                                        <span key={index} className="skill-tag">{tech}</span>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <span className="skill-tag more">+{project.technologies.length - 3}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Project Modal */}
            {selectedProject && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>

                        <div className="modal-image">
                            <img src={selectedProject.image} alt={selectedProject.title} />
                            {selectedProject.featured && (
                                <span className="featured-badge">⭐ Featured Project</span>
                            )}
                        </div>

                        <div className="modal-body">
                            <h2 className="modal-title">{selectedProject.title}</h2>
                            <p className="modal-subtitle">{selectedProject.subtitle}</p>

                            <p className="modal-description">{selectedProject.description}</p>

                            <div className="modal-highlights">
                                <h4>Key Features</h4>
                                <ul>
                                    {selectedProject.highlights?.map((highlight, index) => (
                                        <li key={index}>
                                            <span className="highlight-icon">✓</span>
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="modal-tech">
                                <h4>Technologies Used</h4>
                                <div className="tech-tags">
                                    {selectedProject.technologies.map((tech, index) => (
                                        <span key={index} className="skill-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="modal-actions">
                                {selectedProject.confidential ? (
                                    <button className="btn btn-primary" disabled style={{ opacity: 0.7, cursor: 'not-allowed' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                        </svg>
                                        Source Private
                                    </button>
                                ) : (
                                    <a
                                        href={selectedProject.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        View on GitHub
                                    </a>
                                )}
                                <button className="btn btn-secondary" onClick={closeModal}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
