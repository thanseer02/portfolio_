import React from 'react';

const Contact = () => {
    const footerStyle = {
        background: 'linear-gradient(to top, #000000 0%, var(--bg-color) 100%)',
        padding: '6rem 0 2rem 0',
        borderTop: '1px solid var(--border-color)',
        marginTop: '4rem',
        position: 'relative'
    };

    const contentWrapperStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '4rem',
        marginBottom: '4rem'
    };

    const educationStyle = {
        borderLeft: '2px solid var(--accent-color)',
        paddingLeft: '1.5rem',
        marginTop: '0.5rem'
    };

    return (
        <footer id="contact" style={footerStyle}>
             <div style={{
                position: 'absolute',
                bottom: '0', left: '20%', width: '600px', height: '300px',
                background: 'radial-gradient(ellipse at bottom, rgba(59,130,246,0.1) 0%, transparent 70%)',
                pointerEvents: 'none',
                zIndex: 0
            }}></div>

            <div className="container fade-in-up" style={{ position: 'relative', zIndex: 1 }}>
                <div style={contentWrapperStyle}>
                    <div>
                        <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: 'var(--text-primary)', fontWeight: 'bold' }}>Contact Details</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <span style={{ fontSize: '1.5rem' }}>📧</span>
                                <div>
                                    <span style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Email</span>
                                    <a href="mailto:muhammedtanseerpmna@gmail.com" style={{ color: 'var(--text-primary)', fontWeight: '500' }}>muhammedtanseerpmna@gmail.com</a>
                                </div>
                            </div>
                            <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <span style={{ fontSize: '1.5rem' }}>📱</span>
                                <div>
                                    <span style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Mobile</span>
                                    <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>+91 9947977759</span>
                                </div>
                            </div>
                            <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <span style={{ fontSize: '1.5rem' }}>💬</span>
                                <div>
                                    <span style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>WhatsApp</span>
                                    <a href="https://wa.me/919947977759" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', fontWeight: '500' }}>+91 9947977759</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: 'var(--text-primary)', fontWeight: 'bold' }}>Education</h3>
                        <div style={educationStyle}>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Bachelor of Computer Application</h4>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>AL JAMIA ARTS & SCIENCE COLLEGE, PATTIKKAD</p>
                            <span style={{ fontSize: '0.9rem', color: 'var(--accent-color)', fontWeight: '600', display: 'inline-block', padding: '0.2rem 0.8rem', background: 'rgba(212, 175, 55, 0.1)', borderRadius: '20px' }}>2020 – 2023</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
