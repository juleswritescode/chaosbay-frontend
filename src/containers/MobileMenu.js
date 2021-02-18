import React, { useEffect, useRef, useState, Suspense } from 'react';
import gsap from 'gsap';
import { VscClose } from 'react-icons/vsc';
import SocialIcons from '../components/SocialIcons';
import { onKey } from '../utils/onKey';

import MobileAlbumButton from '../components/MobileAlbumButton';
import MobileShell from './MobileShell';
import Loading from '../components/Loading';
import About from '../components/About';
import Contact from '../components/Contact';
import Dates from '../components/Dates';
import Media from '../components/Media';

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
        <section
            ref={wrapperEl}
            className="lg:hidden absolute top-0 left-0 z-20 w-full min-h-full transform translate-y-full py-16 px-8 bg-black bg-opacity-50 border-t-4 border-color-primary"
        >
            {/* Close Icon */}
            <VscClose
                onClick={toggle}
                onKeyDown={onKey('Enter', toggle)}
                className="w-12 h-12 absolute top-0 left-0 pl-4 pt-4 cursor-pointer text-white"
            />
            <SocialIcons textColor={'text-white'} />
            <ul className="uppercase tracking-wider text-gray-800 text-xl font-medium">
                <MobileAlbumButton album={data.album} />
                <li
                    role="button"
                    id="about"
                    onClick={openMenuItem('about')}
                    onKeyDown={onKey('Enter', openMenuItem, 'about')}
                    className="text-center rounded border-color-primary shadow-inner text-gray-900 tracking-wide bg-gray-100 py-3  my-4"
                >
                    About
                </li>
                {active === 'about' && (
                    <li role="button">
                        <MobileShell>
                            <About
                                content={data.about}
                                w={500}
                                h={500}
                                headingStyle={'text-center'}
                                textStyle={'about-text'}
                            />
                        </MobileShell>
                    </li>
                )}
                <li
                    role="button"
                    id="dates"
                    onClick={openMenuItem('dates')}
                    onKeyDown={onKey('Enter', openMenuItem, 'dates')}
                    className="text-center rounded border-color-primary shadow-inner text-gray-900 tracking-wide bg-gray-100 py-3  my-4"
                >
                    Dates
                </li>
                {active === 'dates' && (
                    <li role="button">
                        <MobileShell>
                            <Dates
                                headingStyle={'invisible mb-0'}
                                linkStyle={
                                    'text-gray-900 w-full text-center mt-2'
                                }
                            />
                        </MobileShell>
                    </li>
                )}
                <li
                    role="button"
                    id="media"
                    onClick={openMenuItem('media')}
                    onKeyDown={onKey('Enter', openMenuItem, 'media')}
                    className="text-center rounded border-color-primary shadow-inner text-gray-900 tracking-wide bg-gray-100 py-3  my-4"
                >
                    Media
                </li>
                {active === 'media' && (
                    <li role="button">
                        <MobileShell>
                            <Media
                                content={data.media}
                                headingStyle={'invisible mb-0'}
                                linkStyle={
                                    'text-gray-900 w-full text-center mt-2'
                                }
                            />
                        </MobileShell>
                    </li>
                )}
                <li
                    role="button"
                    id="contact"
                    onClick={openMenuItem('contact')}
                    onKeyDown={onKey('Enter', openMenuItem, 'contact')}
                    className="text-center rounded border-color-primary shadow-inner text-gray-900 tracking-wide bg-gray-100 py-3  my-4"
                >
                    Contact
                </li>
                {active === 'contact' && (
                    <li role="button">
                        <MobileShell>
                            <Contact />
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
        </section>
    );
};

export default MobileMenu;
