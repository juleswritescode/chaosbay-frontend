import React, { forwardRef } from 'react';
import { FaFacebook } from 'react-icons/fa';
import { GrYoutube } from 'react-icons/gr';
import { SiInstagram } from 'react-icons/si';

const SocialIcons = forwardRef(({ textColor, isFrontScreen }, ref) => (
    <aside ref={ref} className="z-10 absolute top-0 right-0">
        <ul
            className={`flex ${
                isFrontScreen && 'hidden lg:flex'
            } p-0 right-0 py-4 pr-4 justify-between items-center text-3xl ${
                textColor || 'text-gray-500'
            } `}
        >
            <li className="mx-3">
                <a
                    aria-label="Facebook"
                    className="hover:text-primary"
                    href="https://www.facebook.com/chaosbay"
                >
                    <FaFacebook />
                </a>
            </li>
            <li className="mx-3">
                <a
                    aria-label="Youtube"
                    className="hover:text-primary"
                    href="https://www.youtube.com/user/Chaosbay"
                >
                    <GrYoutube />
                </a>
            </li>
            <li className="mx-3">
                <a
                    aria-label="Instagram"
                    className="hover:text-primary"
                    href="https://www.instagram.com/chaosbayofficial"
                >
                    <SiInstagram />
                </a>
            </li>
        </ul>
    </aside>
));

export default SocialIcons;
