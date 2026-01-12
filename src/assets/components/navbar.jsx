import React, { useState, useEffect } from 'react';

function Navbar(){
    const [activeNav, setActiveNav] = useState('#home');

    // useEffect untuk mendeteksi scroll
    useEffect(() => {
        const handleScroll = () => {
            // Daftar ID section yang ada di halaman Anda
            const sections = ['home', 'about', 'certification', 'project', 'contact'];
            
            // scrollPosition ditambah offset (misal 200px) agar active state 
            // berpindah sedikit sebelum section benar-benar sampai di paling atas
            const scrollPosition = window.scrollY + 200; 

            sections.forEach(sectionId => {
                const element = document.getElementById(sectionId);
                
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    // Logika: Jika posisi scroll ada di dalam area section tersebut
                    if (
                        scrollPosition >= offsetTop && 
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveNav('#' + sectionId);
                    }
                }
            });
        };

        // Pasang event listener saat komponen dimuat
        window.addEventListener('scroll', handleScroll);

        // Bersihkan event listener saat komponen dilepas (clean up)
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return(
        <nav className="navbarWrapper">
            <ul className="navList">
                <a href="#home" onClick={() => setActiveNav('#home')}>
                    <li className={activeNav === '#home' ? 'active' : ''}>Home</li>
                </a>

                <a href="#about" onClick={() => setActiveNav('#about')}>
                    <li className={activeNav === '#about' ? 'active' : ''}>About</li>
                </a>

                <a href="#certification" onClick={() => setActiveNav('#certification')}>
                    <li className={activeNav === '#certification' ? 'active' : ''}>Certification</li>
                </a>

                <a href="#project" onClick={() => setActiveNav('#project')}>
                    <li className={activeNav === '#project' ? 'active' : ''}>Project</li>
                </a>

                <a href="#contact" onClick={() => setActiveNav('#contact')}>
                    <li className={activeNav === '#contact' ? 'active' : ''}>Contact</li>
                </a>
            </ul>
        </nav>
    )
}

export default Navbar;