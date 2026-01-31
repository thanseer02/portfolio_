import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: "Hail Driver",
            desc: "A professional ride-hailing platform tailored for drivers. Features include ride management, earnings tracking, and route optimisation.",
            link: "https://play.google.com/store/apps/details?id=com.haildriver.app&pli=1",
            appStoreLink: "https://apps.apple.com/in/app/hail-driver-app/id6514329222",
            tags: ["Flutter", "Google Maps", "API Integration"]
        },
        {
            title: "Sugoimed",
            desc: "Doctor booking and consultation app connecting patients with professionals for in-person and virtual consultations.",
            link: "https://play.google.com/store/apps/details?id=com.sugoimed_patient",
            tags: ["Flutter", "Healthcare", "Booking"]
        },
        {
            title: "Fitreat Couple",
            desc: "Health and wellness app focusing on lifestyle habits, fitness tracking, nutrition guidance, and habit-building tools.",
            link: "https://play.google.com/store/apps/details?id=com.fitreatcouple.customer",
            appStoreLink: "https://apps.apple.com/in/app/fitreat-couple/id6472632170",
            tags: ["Flutter", "Fitness", "Nutrition"]
        },
        {
            title: "Fitreat Nutritionist",
            desc: "Personalized health app for delivering accurate nutrition guidance, custom diet plans, and workout schedules.",
            link: "https://play.google.com/store/apps/details?id=com.fitreat.nutritionist",
            tags: ["Flutter", "Diet Plans", "Workouts"]
        },
        {
            title: "Yuze",
            desc: "A fintech app for managing personal finance and investments.",
            link: "https://play.google.com/store/apps/details?id=com.yuze.yuzeIndia",
            tags: ["Flutter", "wallet", "money transfer"]
        }
    ];

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2.5rem',
        marginTop: '4rem'
    };

    const cardStyle = {
        padding: '2.5rem',
        borderRadius: '24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%'
    };

    const tagStyle = {
        fontSize: '0.75rem',
        padding: '0.3rem 1rem',
        borderRadius: '50px',
        backgroundColor: 'rgba(59, 130, 246, 0.08)',
        color: 'var(--primary-color)',
        border: '1px solid rgba(59, 130, 246, 0.2)',
        marginRight: '0.6rem',
        marginTop: '0.6rem',
        display: 'inline-block',
        letterSpacing: '0.5px'
    };

    const linkStyle = {
        color: 'var(--accent-color)', 
        fontWeight: '600', 
        display: 'inline-flex', 
        alignItems: 'center', 
        gap: '8px',
        fontSize: '0.9rem',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        marginTop: '0.5rem'
    };

    return (
        <section id="projects" className="section">
            <div className="container fade-in-up">
                <h2 className="text-gradient" style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '1rem', letterSpacing: '-0.02em' }}>Featured Projects</h2>
                <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
                    A selection of mobile applications developed with performance and user experience in mind.
                </p>
                <div style={gridStyle}>
                    {projects.map((project, index) => (
                        <div key={index} className="glass-card hover-lift" style={cardStyle}>
                            <div>
                                <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--text-primary)', fontWeight: '600' }}>{project.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.7', fontSize: '0.95rem' }}>{project.desc}</p>
                            </div>
                            <div>
                                <div style={{ marginBottom: '2rem' }}>
                                    {project.tags.map(tag => (
                                        <span key={tag} style={tagStyle}>{tag}</span>
                                    ))}
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                                            View on PlayStore <span style={{ fontSize: '1.2em' }}>&rarr;</span>
                                        </a>
                                    )}
                                    {project.appStoreLink && (
                                        <a href={project.appStoreLink} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                                            View on AppStore <span style={{ fontSize: '1.2em' }}>&rarr;</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
