import React from 'react';

const Experience = () => {
    const experiences = [
        {
            role: "Mobile App Development",
            company: "Mindster, C/O Aufait Technologies Pvt. Ltd",
            period: "April 2023 – Present",
            description: "Developing cross-platform iOS and Android applications using Flutter. Implementing Provider/BLoC state management, Clean Architecture, and Firebase integration.",
            location: "Calicut, India"
        }
    ];

    return (
        <section id="experience" className="section" style={{ position: 'relative' }}>
             <div style={{
                position: 'absolute',
                top: '20%', left: '-10%', width: '400px', height: '400px',
                background: 'radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%)',
                pointerEvents: 'none',
                zIndex: 0
            }}></div>

            <div className="container fade-in-up" style={{ position: 'relative', zIndex: 1 }}>
                <h2 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '4rem', textAlign: 'center', letterSpacing: '-0.02em' }}>Professional Experience</h2>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    {experiences.map((exp, index) => (
                        <div key={index} className="glass-card hover-lift" style={{ 
                            padding: '3rem', 
                            borderRadius: '24px', 
                            marginBottom: '2rem' 
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                                <div>
                                    <h3 style={{ fontSize: '1.75rem', color: 'var(--text-primary)', marginBottom: '0.5rem', fontWeight: 'bold' }}>{exp.role}</h3>
                                    <h4 style={{ fontSize: '1.25rem', color: 'var(--accent-color)', fontWeight: '500' }}>{exp.company}</h4>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <span style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.3rem', fontWeight: '500' }}>{exp.period}</span>
                                    <span style={{ display: 'block', color: 'var(--primary-color)', fontSize: '0.9rem' }}>{exp.location}</span>
                                </div>
                            </div>
                            <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)', margin: '1.5rem 0' }} />
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.05rem' }}>
                                {exp.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
