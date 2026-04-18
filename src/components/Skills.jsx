import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Programming & Development',
            icon: '💻',
            skills: [
                { name: 'Python', level: 90 },
                { name: 'JavaScript (ES6+)', level: 85 },
                { name: 'C#', level: 80 },
                { name: 'HTML5/CSS3', level: 90 },
                { name: 'C++', level: 70 },
                { name: 'Java', level: 65 },
            ],
        },
        {
            title: 'Frameworks & Libraries',
            icon: '🚀',
            skills: [
                { name: 'Django', level: 90 },
                { name: 'ASP.NET', level: 80 },
                { name: 'React', level: 80 },
                { name: 'Bootstrap', level: 85 },
                { name: 'Flask', level: 75 },
                { name: 'LangChain', level: 80 },
            ],
        },
        {
            title: 'AI/ML Technologies',
            icon: '🤖',
            skills: [
                { name: 'RAG', level: 85 },
                { name: 'LLMs', level: 80 },
                { name: 'Gemini API', level: 85 },
                { name: 'Ollama', level: 75 },
                { name: 'NLP', level: 70 },
            ],
        },
        {
            title: 'Tools & Platforms',
            icon: '🛠️',
            skills: [
                { name: 'Git/GitHub', level: 85 },
                { name: 'REST APIs', level: 90 },
                { name: 'MySQL', level: 85 },
                { name: 'PostgreSQL', level: 80 },
                { name: 'Playwright', level: 75 },
                { name: 'VS Code', level: 90 },
                { name: 'MS Office', level: 85 },
            ],
        },
    ];

    const techStack = [
        { name: 'Python', icon: '🐍' },
        { name: 'Django', icon: '🎯' },
        { name: 'C#', icon: '🔷' },
        { name: 'ASP.NET', icon: '🌐' },
        { name: 'MySQL', icon: '🐬' },
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'React', icon: '⚛️' },
        { name: 'JavaScript', icon: '🟨' },
        { name: 'LangChain', icon: '🔗' },
        { name: 'AI/ML', icon: '🤖' },
        { name: 'REST API', icon: '🔌' },
        { name: 'Git', icon: '📚' },
    ];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">
                    My <span>Skills</span>
                </h2>

                <div className="tech-stack">
                    {techStack.map((tech, index) => (
                        <div
                            key={index}
                            className="tech-item"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <span className="tech-icon">{tech.icon}</span>
                            <span className="tech-name">{tech.name}</span>
                        </div>
                    ))}
                </div>

                <div className="skills-grid">
                    {skillCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="skill-category glass-card">
                            <div className="category-header">
                                <span className="category-icon">{category.icon}</span>
                                <h3 className="category-title">{category.title}</h3>
                            </div>
                            <div className="skills-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="skill-item">
                                        <div className="skill-info">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-percent">{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar">
                                            <div
                                                className="skill-progress"
                                                style={{
                                                    width: `${skill.level}%`,
                                                    animationDelay: `${(categoryIndex * 5 + skillIndex) * 0.1}s`,
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="languages-section">
                    <h3 className="subsection-title">
                        <span className="icon">🌍</span> Languages
                    </h3>
                    <div className="languages-grid">
                        <div className="language-item">
                            <span className="lang-name">English</span>
                            <span className="lang-level">Fluent</span>
                            <div className="lang-dots">
                                <span className="dot filled"></span>
                                <span className="dot filled"></span>
                                <span className="dot filled"></span>
                                <span className="dot filled"></span>
                                <span className="dot filled"></span>
                            </div>
                        </div>
                        <div className="language-item">
                            <span className="lang-name">Malayalam</span>
                            <span className="lang-level">Native</span>
                            <div className="lang-dots">
                                <span className="dot filled"></span>
                                <span className="dot filled"></span>
                                <span className="dot filled"></span>
                                <span className="dot filled"></span>
                                <span className="dot filled"></span>
                            </div>
                        </div>
                        <div className="language-item">
                            <span className="lang-name">Hindi</span>
                            <span className="lang-level">Intermediate</span>
                            <div className="lang-dots">
                                <span className="dot filled"></span>
                                <span className="dot filled"></span>
                                <span className="dot filled"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                            </div>
                        </div>
                        <div className="language-item">
                            <span className="lang-name">Tamil</span>
                            <span className="lang-level">Basic</span>
                            <div className="lang-dots">
                                <span className="dot filled"></span>
                                <span className="dot filled"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
