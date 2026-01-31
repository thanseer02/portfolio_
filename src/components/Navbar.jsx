import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        backgroundColor: scrolled ? 'rgba(5, 5, 5, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent',
        padding: scrolled ? '1rem 0' : '2rem 0'
    };

    const containerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    };

    const logoStyle = {
        fontFamily: 'var(--font-heading)',
        fontSize: '1.5rem',
        fontWeight: '700',
        color: 'var(--text-primary)',
        letterSpacing: '-0.02em'
    };

    const linkStyle = {
        marginLeft: '2.5rem',
        color: 'var(--text-secondary)',
        fontSize: '0.95rem',
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'color 0.3s ease',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        fontSize: '0.8rem'
    };

    return (
        <nav style={navStyle}>
            <div className="container" style={containerStyle}>
                <a href="#" style={logoStyle}>MT<span style={{color: 'var(--accent-color)'}}>.</span></a>
                <ul style={{ display: 'flex', alignItems: 'center' }}>
                    <li><a href="#about" style={linkStyle} className="nav-link">About</a></li>
                    <li><a href="#experience" style={linkStyle} className="nav-link">Experience</a></li>
                    <li><a href="#projects" style={linkStyle} className="nav-link">Projects</a></li>
                    <li><a href="#skills" style={linkStyle} className="nav-link">Skills</a></li>
                </ul>
                <style>{`
                    .nav-link:hover {
                        color: var(--accent-color) !important;
                    }
                    @media(max-width: 768px) {
                        .nav-link { margin-left: 1rem !important; font-size: 0.7rem !important; }
                    }
                `}</style>
            </div>
        </nav>
    );
};

export default Navbar;
