import { useEffect, useState, useRef } from 'react';
import './Hero.css';

// Neural network canvas background
const NeuralCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationId;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const NODE_COUNT = 55;
        const nodes = Array.from({ length: NODE_COUNT }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            r: Math.random() * 2 + 1,
            pulse: Math.random() * Math.PI * 2,
        }));

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Move nodes
            nodes.forEach(n => {
                n.x += n.vx;
                n.y += n.vy;
                n.pulse += 0.03;
                if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
                if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
            });

            // Draw connections
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 160) {
                        const alpha = (1 - dist / 160) * 0.25;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                    }
                }
            }

            // Draw nodes
            nodes.forEach(n => {
                const glow = Math.sin(n.pulse) * 0.5 + 0.7;
                ctx.beginPath();
                ctx.arc(n.x, n.y, n.r * glow, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(139, 92, 246, ${0.5 * glow})`;
                ctx.shadowBlur = 8;
                ctx.shadowColor = '#6366f1';
                ctx.fill();
                ctx.shadowBlur = 0;
            });

            animationId = requestAnimationFrame(draw);
        };

        draw();
        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return <canvas ref={canvasRef} className="neural-canvas" />;
};

// Floating code snippets
const CODE_SNIPPETS = [
    'model.fit(X_train)',
    'import langchain',
    'await fetch("/api")',
    '<div className="ai">',
    'SELECT * FROM data',
    'git commit -m "feat"',
    'docker compose up',
    'def rag_pipeline():',
    'const [state, set]',
    'npm run build',
    'curl /v1/chat',
    'python manage.py',
    'router.get("/ai")',
    'chain.invoke(query)',
];

const CodeSnippets = () => (
    <div className="code-snippets-layer" aria-hidden="true">
        {CODE_SNIPPETS.map((snippet, i) => (
            <span
                key={i}
                className="code-snippet-float"
                style={{
                    left: `${(i * 7.3) % 95}%`,
                    animationDelay: `${i * 1.1}s`,
                    animationDuration: `${14 + (i % 6) * 3}s`,
                    fontSize: `${0.6 + (i % 3) * 0.08}rem`,
                    opacity: 0.12 + (i % 4) * 0.04,
                }}
            >
                {snippet}
            </span>
        ))}
    </div>
);

// Glitch text component
const GlitchName = ({ children }) => (
    <span className="glitch-wrapper" data-text={children}>
        {children}
    </span>
);

const Hero = () => {
    const [displayText, setDisplayText] = useState('');
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [glitch, setGlitch] = useState(false);

    const roles = [
        'AI/ML Engineer',
        'Full Stack Developer',
        'Python Developer',
        'ASP.NET Developer',
        'React Developer',
        'GenAI Developer',
        'Backend Engineer',
        'LangChain Engineer',
    ];

    useEffect(() => {
        const currentRole = roles[currentRoleIndex];
        const typeSpeed = isDeleting ? 40 : 90;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < currentRole.length) {
                    setDisplayText(currentRole.slice(0, displayText.length + 1));
                } else {
                    setTimeout(() => {
                        setGlitch(true);
                        setTimeout(() => setGlitch(false), 400);
                        setIsDeleting(true);
                    }, 1800);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(currentRole.slice(0, displayText.length - 1));
                } else {
                    setIsDeleting(false);
                    setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, typeSpeed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentRoleIndex, roles]);

    const handleScrollDown = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="hero">
            {/* Layered backgrounds */}
            <div className="hero-background">
                <video className="hero-video" autoPlay loop muted playsInline>
                    <source src="https://cdn.pixabay.com/video/2020/05/25/40130-424930886_large.mp4" type="video/mp4" />
                </video>
                <div className="video-overlay"></div>
                <div className="gradient-overlay"></div>

                {/* Neural network canvas */}
                <NeuralCanvas />

                {/* Floating code text */}
                <CodeSnippets />

                <div className="floating-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                </div>
            </div>

            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-greeting">
                        <span className="wave">👋</span>
                        <span>Hello, I'm</span>
                    </div>

                    <h1 className="hero-name">
                        <span className="first-name">
                            <GlitchName>Abhishek</GlitchName>
                        </span>
                        <span className="last-name">
                            <GlitchName>Madhusoodhanan</GlitchName>
                        </span>
                    </h1>

                    {/* Terminal-style role display */}
                    <div className="terminal-role">
                        <span className="terminal-prompt">
                            <span className="prompt-mark">❯</span>
                            <span className="prompt-label"> role</span>
                            <span className="prompt-separator"> ./</span>
                        </span>
                        <span className={`role-dynamic${glitch ? ' glitch-flicker' : ''}`}>
                            {displayText}
                            <span className="cursor">_</span>
                        </span>
                    </div>

                    <p className="hero-description">
                        Building intelligent web applications and AI-powered solutions.
                        Experienced in <strong>Django, React, C#, LangChain</strong>, and cutting-edge ML technologies.
                    </p>

                    {/* Pulsing vertex buttons */}
                    <div className="hero-buttons">
                        <a href="#projects" className="btn-vertex primary-vertex">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                            </svg>
                            <span>View Projects</span>
                            <div className="vertex-pulse"></div>
                        </a>
                        <a href="#contact" className="btn-vertex secondary-vertex">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                            <span>Contact Me</span>
                            <div className="vertex-pulse"></div>
                        </a>
                    </div>

                    <div className="hero-social">
                        <a href="https://github.com/Abhishek-Madhusoodhanan" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                        <a href="https://linkedin.com/in/abhishek-madhusoodhanan-228600349" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                        <a href="mailto:abhishekmadhusoodhanan18@gmail.com" className="social-link" aria-label="Email">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="hero-image">
                    <div className="image-wrapper">
                        <div className="image-glow"></div>
                        <div className="profile-ring"></div>
                        <div className="profile-ring ring-outer"></div>
                        <img src="/profile.png" alt="Abhishek Madhusoodhanan" />
                        {/* Orbiting data packets */}
                        <div className="orbit orbit-1"><span className="data-packet">{'{ }'}</span></div>
                        <div className="orbit orbit-2"><span className="data-packet">⬡</span></div>
                        <div className="orbit orbit-3"><span className="data-packet">AI</span></div>
                    </div>
                    <div className="floating-badge badge-1">
                        <span className="badge-icon">⚡</span>
                        <span>AI/ML Engineer</span>
                    </div>
                    <div className="floating-badge badge-2">
                        <span className="badge-icon">🔷</span>
                        <span>ASP.NET Developer</span>
                    </div>
                    <div className="floating-badge badge-3">
                        <span className="badge-icon">🚀</span>
                        <span>Full Stack Dev</span>
                    </div>
                    <div className="floating-badge badge-4">
                        <span className="badge-icon">☁️</span>
                        <span>Cloud Analyst</span>
                    </div>
                </div>
            </div>

            <button className="scroll-indicator" onClick={handleScrollDown} aria-label="Scroll down">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <span>Scroll Down</span>
            </button>
        </section>
    );
};

export default Hero;
