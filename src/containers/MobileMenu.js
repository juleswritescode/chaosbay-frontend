import React, { useEffect, useRef, useState, Suspense } from 'react';
import gsap from 'gsap';
import { VscClose } from 'react-icons/vsc';
import SocialIcons from '../components/SocialIcons';
import { onKey } from '../utils/onKey';

import MobileAlbumButton from '../components/MobileAlbumButton';
import MobileShell from './MobileShell';
import Loading from '../components/Loading';
// import About from '../components/About';
// import Contact from '../components/Contact';
// import Dates from '../components/Dates';
// import Media from '../components/Media';

const About = React.lazy(() => import('../components/About'));
const Contact = React.lazy(() => import('../components/Contact'));
const Dates = React.lazy(() => import('../components/Dates'));
const Media = React.lazy(() => import('../components/Media'));

const MobileMenu = ({ toggle, data }) => {
    const wrapperEl = useRef(null);
    const [active, setActive] = useState('');

    useEffect(() => {
        if (!wrapperEl.current) return;
        const wrapper = wrapperEl.current;

        const tl = gsap.timeline();

        tl.to(wrapper, {
            y: 0,
            duration: 0.5,
            ease: 'power1',
        });
    }, [wrapperEl]);

    const openMenuItem = id => () => {
        if (id === active) {
            setActive('');
            return;
        }

        setActive(id);
        setTimeout(() => {
            document.getElementById(id).scrollIntoView();
        }, 0);
    };

    return (
        <main
            ref={wrapperEl}
            className="lg:hidden absolute top-0 left-0 z-20 w-full min-h-full transform translate-y-full py-16 px-8 bg-black bg-opacity-50 border-t-4 border-color-primary"
        >
            <VscClose
                role="button"
                aria-label="close menu"
                onClick={toggle}
                onKeyDown={onKey('Enter', toggle)}
                className="w-12 h-12 absolute top-0 left-0 pl-4 pt-4 cursor-pointer text-white"
            />
            <SocialIcons textColor={'text-white'} />
            <ul
                id="navigation"
                className="uppercase tracking-wider text-gray-800 text-xl font-medium"
            >
                <MobileAlbumButton album={data.album} />
                <li className="mt-2">
                    <button
                        aria-haspopup="true"
                        aria-expanded="false"
                        id="about"
                        onClick={openMenuItem('about')}
                        onKeyUp={onKey('Enter', openMenuItem, 'about')}
                        className="w-full text-center rounded border-color-primary shadow-inner text-gray-900 tracking-wide bg-gray-100 py-3 my-2"
                    >
                        About
                    </button>
                </li>
                {active === 'about' && (
                    <li>
                        <MobileShell>
                            <Suspense fallback={<Loading />}>
                                <About
                                    content={data.about}
                                    w={500}
                                    h={500}
                                    isMobile={true}
                                    textStyle={'about-text'}
                                />
                            </Suspense>
                        </MobileShell>
                    </li>
                )}
                <li>
                    <button
                        id="dates"
                        onClick={openMenuItem('dates')}
                        aria-haspopup="true"
                        aria-expanded="false"
                        onKeyDown={onKey('Enter', openMenuItem, 'dates')}
                        className="text-center rounded border-color-primary shadow-inner text-gray-900 tracking-wide bg-gray-100 py-3 w-full  my-2"
                    >
                        Dates
                    </button>
                </li>
                {active === 'dates' && (
                    <li>
                        <MobileShell>
                            <Suspense fallback={<Loading />}>
                                <Dates
                                    isMobile={true}
                                    headingStyle={'invisible mb-0'}
                                    linkStyle={
                                        'text-gray-900 w-full text-center mt-2'
                                    }
                                />
                            </Suspense>
                        </MobileShell>
                    </li>
                )}
                <li>
                    <button
                        id="media"
                        aria-haspopup="true"
                        aria-expanded="false"
                        onClick={openMenuItem('media')}
                        onKeyDown={onKey('Enter', openMenuItem, 'media')}
                        className="text-center w-full rounded border-color-primary shadow-inner text-gray-900 tracking-wide bg-gray-100 py-3  my-2"
                    >
                        Media
                    </button>
                </li>
                {active === 'media' && (
                    <li>
                        <MobileShell>
                            <Suspense fallback={<Loading />}>
                                <Media
                                    content={data.media}
                                    isMobile={true}
                                    headingStyle={'invisible mb-0'}
                                    linkStyle={
                                        'text-gray-900 w-full text-center mt-2'
                                    }
                                />
                            </Suspense>
                        </MobileShell>
                    </li>
                )}
                <li>
                    <button
                        id="contact"
                        aria-haspopup="true"
                        aria-expanded="false"
                        onClick={openMenuItem('contact')}
                        onKeyDown={onKey('Enter', openMenuItem, 'contact')}
                        className="text-center rounded border-color-primary shadow-inner text-gray-900 tracking-wide w-full bg-gray-100 py-3 my-2"
                    >
                        Contact
                    </button>
                </li>
                {active === 'contact' && (
                    <li>
                        <MobileShell>
                            <Suspense fallback={<Loading />}>
                                <Contact />
                            </Suspense>
                        </MobileShell>
                    </li>
                )}
            </ul>
            <a
                href="/impressum"
                target="_blank"
                rel="noreferrer"
                className="bottom-0 right-0 p-4 text-xs text-white uppercase tracking-wider "
            >
                Impressum
            </a>
        </main>
    );
};

export default MobileMenu;
