import React, { useState } from 'react';
import { onKey } from '../utils/onKey';
import Img from 'gatsby-image';
import { SRLWrapper } from 'simple-react-lightbox';
import { FaArrowCircleRight } from 'react-icons/fa';
import AccessibleHeading from './AccessibleHeading';

import VideoPlayer from './VideoPlayer';
import Divider from './Divider';

function scrollTo(id) {
    document.getElementById(id).scrollIntoView();
}

const Media = ({ headingStyle, linkStyle, content = {} }) => {
    const [displayedMedia, setDisplayedMedia] = useState('video');

    return (
        <>
            <div className="relative lg:pb-20">
                <AccessibleHeading
                    level="2"
                    targetId="navigation"
                    id="heading"
                    className={`font-semibold mb-2 text-xl ${headingStyle}`}
                >
                    Media
                </AccessibleHeading>
                <aside
                    className={
                        'text-white text-center fixed top-0 left-0 p-4' +
                        ' ' +
                        linkStyle
                    }
                >
                    <button
                        className={`
                            ${displayedMedia === 'video' && 'text-primary'}
                            cursor-pointer hover:text-primary`}
                        onClick={() => setDisplayedMedia('video')}
                        onKeyDown={onKey('Enter', setDisplayedMedia, 'video')}
                    >
                        {'Videos'}
                    </button>
                    <span className="mx-2">|</span>
                    <button
                        className={`
                            ${displayedMedia === 'photo' && 'text-primary'}
                            cursor-pointer hover:text-primary`}
                        onClick={() => setDisplayedMedia('photo')}
                        onKeyDown={onKey('Enter', setDisplayedMedia, 'photo')}
                    >
                        {'Photos'}
                    </button>
                </aside>
                <Divider />
                {displayedMedia === 'video' && (
                    <ul id="video">
                        {content.videoLinks?.map(link => (
                            <VideoPlayer key={link} url={link} />
                        ))}
                    </ul>
                )}
                {displayedMedia === 'photo' && (
                    <SRLWrapper
                        options={{
                            buttons: {
                                showDownloadButton: false,
                            },
                        }}
                    >
                        <ul id="photo">
                            {content.images?.map(({ asset }) => (
                                <li>
                                    <Img
                                        className="mb-4 cursor-pointer "
                                        alt="Chaosbay"
                                        fluid={asset?.fluid}
                                        key={asset?.fluid?.src}
                                    />
                                </li>
                            ))}
                        </ul>
                    </SRLWrapper>
                )}
                <aside className="hidden lg:block text-white text-center absolute bottom-0 left-0 p-4 cursor-pointer hover:text-primary">
                    <FaArrowCircleRight className="inline-block mb-1 mr-2" />
                    <button
                        aria-label="Back to Top"
                        onKeyDown={onKey('Enter', scrollTo, 'past')}
                        onClick={() => scrollTo('heading')}
                    >
                        Top
                    </button>
                </aside>
            </div>
        </>
    );
};

export default Media;
