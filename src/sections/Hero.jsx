import React from 'react';

const Hero = () => {
    const heroStyle = {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '80px',
        position: 'relative',
        overflow: 'hidden'
    };


    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: '3rem'
    };

    return (
        <section id="about" style={heroStyle}>
            {/* Background Texture */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                background: 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.05) 0%, transparent 60%)',
                pointerEvents: 'none',
                zIndex: 0
            }}></div>

            <div className="container fade-in-up" style={{ zIndex: 1, width: '100%' }}>
                <div style={containerStyle} className="hero-grid">
                    <div style={{ maxWidth: '800px' }}>
                        <p style={{ color: 'var(--accent-color)', fontWeight: '600', marginBottom: '1.5rem', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                            Hi, I am
                        </p>
                        <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: '700', marginBottom: '1.5rem', color: 'var(--text-primary)', lineHeight: '1.1' }}>
                            Muhammed <br/>
                            <span className="text-gradient">Tanseer</span>
                        </h1>
                         {/* Floating Flutter Logo - Centered/Integrated */}
                         <div className="animate-float flutter-glow" style={{
                            display: 'inline-flex',
                            margin: '0 auto 1.5rem auto',
                            padding: '1rem',
                            background: 'rgba(5, 5, 5, 0.5)',
                            borderRadius: '50%',
                            border: '1px solid var(--border-color)'
                        }}>
                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" width="60" height="60">
                                <defs>
                                    <linearGradient id="grad1" x1="93.4" y1="110.82" x2="73.81" y2="122.68" gradientUnits="userSpaceOnUse">
                                        <stop offset="0" stopColor="#01579b"/>
                                        <stop offset="1" stopColor="#002b4b"/>
                                    </linearGradient>
                                </defs>
                                <path fill="#54c5f8" d="M39.54,94.93,19.47,74.86,84.72,9.6h40.16Z"/>
                                <path fill="#01579b" d="M67.15,122.54l17.57,17.57h40.15L89.74,105Z"/>
                                <path fill="#54c5f8" d="M124.88,69.84H84.72L67.15,87.4,89.74,105Z"/>
                                <path fill="#29b6f6" fillRule="evenodd" d="M49.58,105,69.66,84.9,89.74,105,69.66,125.05Z"/>
                                <polygon fill="url(#grad1)" points="69.66 125.05 89.74 104.97 99.78 115.01 69.66 125.05"/>
                            </svg>
                        </div>
                        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--text-secondary)', marginBottom: '2.5rem', fontFamily: 'var(--font-heading)', fontWeight: '400' }}>
                            Flutter Developer
                        </h2>
                        <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '3rem', margin: '0 auto 3rem auto', maxWidth: '600px', lineHeight: '1.8' }}>
                            Expert in building high-performance iOS and Android applications. 
                            Passionately crafting seamless mobile experiences with <span style={{color: 'var(--primary-color)'}}>Flutter</span>, 
                            Clean Architecture, and pixel-perfect design.
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                            <a href="#projects" style={{
                                display: 'inline-block',
                                backgroundColor: 'var(--bg-color)',
                                color: 'var(--accent-color)',
                                padding: '1rem 2.5rem',
                                borderRadius: '50px',
                                fontWeight: '600',
                                border: '1px solid var(--accent-color)',
                                transition: 'all 0.3s ease'
                            }} className="hover-lift">
                                View Work
                            </a>
                            <a href="#contact" style={{
                                display: 'inline-block',
                                padding: '1rem 2.5rem',
                                borderRadius: '50px',
                                fontWeight: '600',
                                color: 'var(--text-primary)',
                                transition: 'all 0.3s ease'
                            }}>
                                Contact Me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Hero;
