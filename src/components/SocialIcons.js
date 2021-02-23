import React, { forwardRef } from 'react';
import { FaFacebook } from 'react-icons/fa';
import { GrYoutube } from 'react-icons/gr';
import { SiInstagram } from 'react-icons/si';

const SocialIcons = forwardRef(({ textColor, isFrontScreen }, ref) => (
    <ul
        ref={ref}
        className={`flex ${
            isFrontScreen && 'hidden lg:flex'
        } absolute top-0 right-0 py-4 pr-4 z-10 justify-between items-center text-3xl ${
            textColor || 'text-gray-500'
        } `}
    >
        <li className="mx-3">
            <a
                className="hover:text-primary"
                href="https://www.facebook.com/chaosbay"
            >
                <FaFacebook />
            </a>
        </li>
        <li className="mx-3">
            <a
                className="hover:text-primary"
                href="https://www.youtube.com/user/Chaosbay"
            >
                <GrYoutube />
            </a>
        </li>
        <li className="mx-3">
            <a
                className="hover:text-primary"
                href="https://www.instagram.com/chaosbayofficial"
            >
                <SiInstagram />
            </a>
        </li>
    </ul>
));

export default SocialIcons;
