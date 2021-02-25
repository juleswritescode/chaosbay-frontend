import React, { forwardRef, useState, Suspense } from 'react';
import Shell from './Shell';

import Loading from '../components/Loading';

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
                        <li>
                            <button
                                aria-haspopup="true"
                                aria-expanded={
                                    active == 'about' ? 'true' : 'false'
                                }
                                aria-label={
                                    active != 'about'
                                        ? 'About'
                                        : 'Close Content. To read, navigate to the end of navigation.'
                                }
                                onClick={setActiveMenu('about')}
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
                        <li>
                            <button
                                aria-label={
                                    active != 'dates'
                                        ? 'Dates'
                                        : 'Close Content. To read, navigate to the end of navigation.'
                                }
                                aria-haspopup="true"
                                aria-expanded={
                                    active == 'dates' ? 'true' : 'false'
                                }
                                onClick={setActiveMenu('dates')}
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
                        <li
                            className={`transition duration-300 cursor-pointer border-b-4 border-transparent hover:border-color-primary mx-10 text-center animate-pulse`}
                        >
                            <a
                                href={data.album?.link}
                                rel="noreferrer"
                                target="_blank"
                                className="select-none flex flex-col"
                                aria-label={`External link to ${data.album?.name}`}
                            >
                                <span className="uppercase font-medium">
                                    {data.album?.catchPhrase}
                                </span>
                                <span className="uppercase font-medium text-2xl text-primary leading-none pb-2">
                                    {data.album?.name}
                                </span>
                            </a>
                        </li>
                        <li>
                            <button
                                aria-label={
                                    active != 'media'
                                        ? 'Media'
                                        : 'Close Content. To read, navigate to the end of navigation.'
                                }
                                onClick={setActiveMenu('media')}
                                aria-haspopup="true"
                                aria-expanded={
                                    active == 'media' ? 'true' : 'false'
                                }
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
                        <li>
                            <button
                                aria-label={
                                    active != 'contact'
                                        ? 'Contact'
                                        : 'Close Content. To read, navigate to the end of navigation.'
                                }
                                onClick={setActiveMenu('contact')}
                                aria-haspopup="true"
                                aria-expanded={
                                    active == 'contact' ? 'true' : 'false'
                                }
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
                                    ariaLabel="About"
                                    w={2000}
                                    h={2000}
                                    textStyle={
                                        'text-white text-md font-light font-raleway tracking-wide text-justify'
                                    }
                                />
                            )}

                            {active == 'dates' && (
                                <Dates
                                    ariaLabel="Dates"
                                    headingStyle={
                                        'text-white text-2xl text-center uppercase tracking-wider'
                                    }
                                    textColor={'#fff'}
                                />
                            )}
                            {active == 'media' && (
                                <Media
                                    ariaLabel="Media"
                                    content={data.media}
                                    headingStyle={
                                        'text-white text-2xl text-center uppercase tracking-wider'
                                    }
                                />
                            )}
                            {active == 'contact' && (
                                <Contact
                                    ariaLabel="Contact"
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
