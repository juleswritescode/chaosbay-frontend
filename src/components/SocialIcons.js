import React, { forwardRef } from 'react';
import { FaFacebook } from 'react-icons/fa';
import { GrYoutube } from 'react-icons/gr';
import { SiInstagram } from 'react-icons/si';

const SocialIcons = forwardRef(({ textColor, initLoad }, ref) => (
    <div
        ref={ref}
        className={`absolute top-0 right-0 py-4 pr-4 z-10 flex justify-between items-center text-3xl ${
            textColor || 'text-gray-500'
        } `}
    >
        <a
            className="mx-3 hover:text-primary"
            href="https://www.facebook.com/chaosbay"
        >
            <FaFacebook />
        </a>
        <a
            className="mx-3 hover:text-primary"
            href="https://www.youtube.com/user/Chaosbay"
        >
            <GrYoutube />
        </a>
        <a
            className="mx-3 hover:text-primary"
            href="https://www.instagram.com/chaosbayofficial"
        >
            <SiInstagram />
        </a>
    </div>
));

export default SocialIcons;
