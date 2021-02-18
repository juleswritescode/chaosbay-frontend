import React, { forwardRef, useState, Suspense, useEffect } from 'react';
import Shell from './Shell';

import Loading from '../components/Loading';
import About from '../components/About';
import Dates from '../components/Dates';
import Media from '../components/Media';
import Contact from '../components/Contact';
import { onKey } from '../utils/onKey';

const DesktopMenu = forwardRef(
    ({ moveMenuToTop, moveMenuToBottom, data = {} }, ref) => {
        const [active, setActive] = useState('');

        const setActiveMenu = id => () => {
            if (active === id) {
                setActive('');
                moveMenuToBottom();
                return;
            }

            setActive(id);
            moveMenuToTop();
        };

        return (
            <>
                <nav
                    ref={ref}
                    className="w-full mx-auto py-4 px-20 bg-black bg-opacity-75 rounded border-t-4 border-color-primary shadow-lg invisible"
                >
                    <ul className="uppercase flex items-center justify-around text-white font-medium w-auto">
                        <li
                            onClick={setActiveMenu('about')}
                            onKeyDown={onKey('Enter', setActiveMenu, 'about')}
                            id="about"
                            className={`${
                                active === 'about'
                                    ? 'border-color-primary'
                                    : 'hover:border-color-primary'
                            } transition duration-300 cursor-pointer border-b-4 border-transparent  mx-10 font-light tracking-wider`}
                        >
                            About
                        </li>
                        <li
                            onClick={setActiveMenu('dates')}
                            onKeyDown={onKey('Enter', setActiveMenu, 'dates')}
                            id="dates"
                            className={`${
                                active === 'dates'
                                    ? 'border-color-primary'
                                    : 'hover:border-color-primary'
                            } transition duration-300 cursor-pointer border-b-4 border-transparent  mx-10 font-light tracking-wider`}
                        >
                            Dates
                        </li>
                        <a
                            href={data.album?.link}
                            rel="noreferrer"
                            target="_blank"
                            className="select-none"
                        >
                            <li
                                className={`transition duration-300 cursor-pointer border-b-4 border-transparent hover:border-color-primary mx-10 flex flex-col text-center animate-pulse`}
                            >
                                <span className="font-medium">
                                    {data.album?.catchPhrase}
                                </span>
                                <span className="font-medium text-2xl text-primary leading-none pb-2">
                                    {data.album?.name}
                                </span>
                            </li>
                        </a>
                        <li
                            onClick={setActiveMenu('media')}
                            onKeyDown={onKey('Enter', setActiveMenu, 'media')}
                            id="media"
                            className={`${
                                active === 'media'
                                    ? 'border-color-primary'
                                    : 'hover:border-color-primary'
                            } transition duration-300 cursor-pointer border-b-4 border-transparent mx-10 font-light tracking-wider`}
                        >
                            Media
                        </li>
                        <li
                            id="contact"
                            onClick={setActiveMenu('contact')}
                            onKeyDown={onKey('Enter', setActiveMenu, 'contact')}
                            className={`${
                                active === 'contact'
                                    ? 'border-color-primary'
                                    : 'hover:border-color-primary'
                            } transition duration-300 cursor-pointer border-b-4 border-transparent mx-10 font-light tracking-wider`}
                        >
                            Contact
                        </li>
                    </ul>
                </nav>
                {active && (
                    <Suspense fallback={<Loading />}>
                        <Shell>
                            {active == 'about' && (
                                <About
                                    content={data.about}
                                    w={2000}
                                    h={2000}
                                    textStyle={
                                        'text-white text-md font-light font-raleway tracking-wide text-justify'
                                    }
                                    headingStyle={
                                        'text-white text-2xl text-center uppercase tracking-wider'
                                    }
                                />
                            )}

                            {active == 'dates' && (
                                <Dates
                                    headingStyle={
                                        'text-white text-2xl text-center uppercase tracking-wider'
                                    }
                                    textColor={'#fff'}
                                />
                            )}
                            {active == 'media' && (
                                <Media
                                    content={data.media}
                                    headingStyle={
                                        'text-white text-2xl text-center uppercase tracking-wider'
                                    }
                                />
                            )}
                            {active == 'contact' && (
                                <Contact
                                    headingStyle={
                                        'text-white text-2xl uppercase tracking-tight'
                                    }
                                />
                            )}
                        </Shell>
                    </Suspense>
                )}
            </>
        );
    }
);

export default DesktopMenu;
