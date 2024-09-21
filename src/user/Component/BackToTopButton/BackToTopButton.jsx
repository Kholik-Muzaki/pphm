import './BackToTopButton.css';

import React, { useState, useEffect } from "react";

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Scroll smooth untuk efek halus
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);

        // Membersihkan event listener saat komponen unmount
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className="back-to-top">
            {isVisible && (
                <button onClick={scrollToTop} className="back-to-top-button">
                    <i className='bx bx-chevrons-up bx-fade-up-hover bx-md'></i>
                </button>
            )}
        </div>
    );
};

export default BackToTopButton;
