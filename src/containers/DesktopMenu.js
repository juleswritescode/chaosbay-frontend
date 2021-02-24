import React, { forwardRef, useState, Suspense } from 'react';
import Shell from './Shell';

import Loading from '../components/Loading';
import { onKey } from '../utils/onKey';

const About = React.lazy(() => import('../components/About'));
const Contact = React.lazy(() => import('../components/Contact'));
const Dates = React.lazy(() => import('../components/Dates'));
const Media = React.lazy(() => import('../components/Media'));

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
                    tabIndex="-1"
                    ref={ref}
                    id="navigation"
                    className="w-full mx-auto py-4 px-20 bg-black bg-opacity-75 rounded border-t-4 border-color-primary shadow-lg invisible"
                >
                    <ul className="flex items-center justify-around text-white w-auto">
                        <li
                            onClick={setActiveMenu('about')}
                            onKeyUp={onKey('Enter', setActiveMenu, 'about')}
                            id="about"
                        >
                            <button
                                className={`
                                    nav-button  
                                ${
                                    active === 'about'
                                        ? 'border-color-primary'
                                        : 'hover:border-color-primary'
                                }`}
                            >
                                About
                            </button>
                        </li>
                        <li
                            onClick={setActiveMenu('dates')}
                            onKeyUp={onKey('Enter', setActiveMenu, 'dates')}
                            id="dates"
                        >
                            <button
                                className={`
                                nav-button 
                                ${
                                    active === 'dates'
                                        ? 'border-color-primary'
                                        : 'hover:border-color-primary'
                                }`}
                            >
                                Dates
                            </button>
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
                                <span className="uppercase font-medium">
                                    {data.album?.catchPhrase}
                                </span>
                                <span className="uppercase font-medium text-2xl text-primary leading-none pb-2">
                                    {data.album?.name}
                                </span>
                            </li>
                        </a>
                        <li
                            onClick={setActiveMenu('media')}
                            onKeyDown={onKey('Enter', setActiveMenu, 'media')}
                            id="media"
                        >
                            <button
                                className={`
                                nav-button 
                                ${
                                    active === 'media'
                                        ? 'border-color-primary'
                                        : 'hover:border-color-primary'
                                }`}
                            >
                                Media
                            </button>
                        </li>
                        <li
                            id="contact"
                            onClick={setActiveMenu('contact')}
                            onKeyDown={onKey('Enter', setActiveMenu, 'contact')}
                        >
                            <button
                                className={`
                                nav-button 
                                ${
                                    active === 'contact'
                                        ? 'border-color-primary'
                                        : 'hover:border-color-primary'
                                }`}
                            >
                                Contact
                            </button>
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
