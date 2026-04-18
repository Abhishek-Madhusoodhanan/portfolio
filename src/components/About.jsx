import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);

    const stats = [
        { value: '1+', label: 'Years Experience' },
        { value: '5+', label: 'Projects Completed' },
        { value: '3+', label: 'Technologies' },
        { value: '100%', label: 'Dedication' },
    ];

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '#about',
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: false,
                    once: true,
                },
            });

            // 1. Section clip-path reveal
            tl.fromTo(
                section,
                { clipPath: 'inset(100% 0 0 0)' },
                { clipPath: 'inset(0% 0 0 0)', duration: 0.8, ease: 'power3.out' }
            );

            // 2. "About" from left, "Me" from right
            tl.fromTo(
                '.about-title-word-left',
                { x: -120, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
                '-=0.3'
            );
            tl.fromTo(
                '.about-title-word-right',
                { x: 120, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
                '<'
            );

            // 3. Profile photo slides in from left with rotation
            tl.fromTo(
                '.about-image',
                { x: -100, opacity: 0, rotateY: 15 },
                { x: 0, opacity: 1, rotateY: 0, duration: 0.7, ease: 'power3.out' },
                '-=0.3'
            );

            // 4. Experience badge pops in with elastic bounce
            tl.fromTo(
                '.experience-badge',
                { scale: 0, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.6, ease: 'elastic.out(1, 0.5)' },
                '-=0.2'
            );

            // 5. Subtitle
            tl.fromTo(
                '.about-subtitle',
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' },
                '-=0.3'
            );

            // 6. Bio paragraphs — stagger fade up
            tl.fromTo(
                '.about-description',
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, stagger: 0.15, ease: 'power3.out' },
                '-=0.2'
            );

            // 7. Info grid cards — stagger from bottom
            tl.fromTo(
                '.info-card',
                { y: 35, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: 'power3.out' },
                '-=0.2'
            );

            // 8. Buttons slide up together
            tl.fromTo(
                '.about-buttons',
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' },
                '-=0.1'
            );

            // 9. Stats cards
            tl.fromTo(
                '.stat-card',
                { y: 40, opacity: 0, scale: 0.9 },
                { y: 0, opacity: 1, scale: 1, duration: 0.4, stagger: 0.1, ease: 'power3.out' },
                '-=0.2'
            );
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section id="about" className="about" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title">
                    <span className="about-title-word-left">About</span>{' '}
                    <span className="about-title-word-right">Me</span>
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
                            Full Stack Python Developer &amp; AI Engineer
                        </h3>

                        <p className="about-description">
                            I'm a passionate Software Engineer skilled in full-stack development and AI/ML systems. My expertise spans across <strong>Python, Django, React, C#, and .NET</strong>, with hands-on experience in building scalable applications and integrating modern CI/CD workflows. Currently working as an AI/ML Engineer at Gaude Business and Infrastructure Solutions, Technopark.
                        </p>

                        <p className="about-description">
                            I specialize in building intelligent web applications by integrating AI models into production environments.
                            My expertise includes <strong>RAG (Retrieval-Augmented Generation), LLMs, and LangChain</strong>.
                            I have a strong understanding of the software development lifecycle and am dedicated to building efficient, user-focused applications.
                        </p>

                        <div className="about-info">
                            {/* Email */}
                            <div className="info-card" data-color="cyan">
                                <div className="info-card-glow"></div>
                                <div className="info-card-border"></div>
                                <div className="info-card-inner">
                                    <div className="info-icon-orb">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="2" y="4" width="20" height="16" rx="2" />
                                            <path d="M22 4l-10 8L2 4" />
                                        </svg>
                                        <div className="orb-ring"></div>
                                        <div className="orb-particles">
                                            <span></span><span></span><span></span>
                                        </div>
                                    </div>
                                    <div className="info-text">
                                        <span className="info-label">Email</span>
                                        <span className="info-value">abhishekmadhusoodhanan18@gmail.com</span>
                                    </div>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="info-card" data-color="purple">
                                <div className="info-card-glow"></div>
                                <div className="info-card-border"></div>
                                <div className="info-card-inner">
                                    <div className="info-icon-orb">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                        <div className="orb-ring"></div>
                                        <div className="orb-particles">
                                            <span></span><span></span><span></span>
                                        </div>
                                    </div>
                                    <div className="info-text">
                                        <span className="info-label">Location</span>
                                        <span className="info-value">Thiruvananthapuram, Kerala</span>
                                    </div>
                                </div>
                            </div>

                            {/* Education */}
                            <div className="info-card" data-color="amber">
                                <div className="info-card-glow"></div>
                                <div className="info-card-border"></div>
                                <div className="info-card-inner">
                                    <div className="info-icon-orb">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                            <path d="M6 12v5c0 1 4 3 6 3s6-2 6-3v-5" />
                                        </svg>
                                        <div className="orb-ring"></div>
                                        <div className="orb-particles">
                                            <span></span><span></span><span></span>
                                        </div>
                                    </div>
                                    <div className="info-text">
                                        <span className="info-label">Education</span>
                                        <span className="info-value">B.Tech in Computer Science</span>
                                    </div>
                                </div>
                            </div>

                            {/* Status */}
                            <div className="info-card" data-color="emerald">
                                <div className="info-card-glow"></div>
                                <div className="info-card-border"></div>
                                <div className="info-card-inner">
                                    <div className="info-icon-orb">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                                            <line x1="9" y1="9" x2="9.01" y2="9" />
                                            <line x1="15" y1="9" x2="15.01" y2="9" />
                                        </svg>
                                        <div className="orb-ring"></div>
                                        <div className="orb-pulse"></div>
                                        <div className="orb-particles">
                                            <span></span><span></span><span></span>
                                        </div>
                                    </div>
                                    <div className="info-text">
                                        <span className="info-label">Status</span>
                                        <span className="info-value available">Available for Opportunities</span>
                                    </div>
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
