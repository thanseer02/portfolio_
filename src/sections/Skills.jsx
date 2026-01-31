import React from 'react';

const Skills = () => {
    const technicalSkills = ["Dart", "Flutter", "Redmine", "Git", "App Publishing (Android/iOS)",];
    const functionalSkills = ["Agile Methodology", "Requirement Analysis", "Planning", "Estimation", "Defining Best Practices"];

    const listStyle = {
        listStyle: 'none',
        padding: 0,
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        marginTop: '1.5rem'
    };

    const itemStyle = {
        padding: '0.8rem 1.5rem',
        borderRadius: '50px',
        border: '1px solid var(--border-color)',
        color: 'var(--text-secondary)',
        fontSize: '0.95rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        background: 'rgba(255,255,255,0.02)',
        transition: 'all 0.3s ease'
    };

    const categoryStyle = {
        marginBottom: '4rem',
        padding: '2rem',
        borderRadius: '24px',
    };

    const checkIcon = <span style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>✓</span>;

    return (
        <section id="skills" className="section" style={{ position: 'relative' }}>
             {/* Background Gradient */}
             <div style={{
                position: 'absolute',
                bottom: '10%', right: '0', width: '500px', height: '500px',
                background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)',
                pointerEvents: 'none',
                zIndex: 0
            }}></div>

            <div className="container fade-in-up" style={{ position: 'relative', zIndex: 1 }}>
                <h2 className="text-gradient" style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '5rem', letterSpacing: '-0.02em' }}>Skills & Expertise</h2>
                
                <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    <div style={categoryStyle} className="glass-card hover-lift">
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', borderLeft: '3px solid var(--primary-color)', paddingLeft: '1rem' }}>Technical Skills</h3>
                        <ul style={listStyle}>
                            {technicalSkills.map((skill, index) => {
                                const isFlutter = skill === "Flutter";
                                return (
                                    <li key={index} style={{
                                        ...itemStyle,
                                        borderColor: isFlutter ? 'var(--primary-color)' : itemStyle.border,
                                        background: isFlutter ? 'rgba(59, 130, 246, 0.1)' : itemStyle.background,
                                        boxShadow: isFlutter ? '0 0 15px rgba(59, 130, 246, 0.3)' : 'none',
                                        fontWeight: isFlutter ? '600' : 'normal'
                                    }}>
                                        {checkIcon} {skill}
                                        {isFlutter && <span style={{ marginLeft: '4px' }}>💙</span>}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div style={categoryStyle} className="glass-card hover-lift">
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', borderLeft: '3px solid var(--accent-color)', paddingLeft: '1rem' }}>Functional Skills</h3>
                        <ul style={listStyle}>
                            {functionalSkills.map((skill, index) => (
                                <li key={index} style={itemStyle}>{checkIcon} {skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
