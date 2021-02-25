import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const MobileShell = ({ children }) => {
    const shellEl = useRef(null);

    useEffect(() => {
        const shell = shellEl.current;

        gsap.to(shell, {
            scaleY: 1,
            duration: 0.1,
        });
    }, []);

    return (
        <section
            ref={shellEl}
            className="bg-gray-200 rounded text-gray-900 normal-case px-6 py-8 font-light tracking-tight leading-tight transform scale-y-0 origin-top relative"
        >
            {children}
        </section>
    );
};

export default MobileShell;
