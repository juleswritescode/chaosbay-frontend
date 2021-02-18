import React, { useState } from 'react';
import { onKey } from '../utils/onKey';
import Img from 'gatsby-image';
import { SRLWrapper } from 'simple-react-lightbox';
import { FaArrowCircleRight } from 'react-icons/fa';

import VideoPlayer from './VideoPlayer';
import Divider from './Divider';

function scrollTo(id) {
    document.getElementById(id).scrollIntoView();
}

const Media = ({ headingStyle, linkStyle, content = {} }) => {
    const [displayedMedia, setDisplayedMedia] = useState('video');

    return (
        <>
            <aside className="relative lg:pb-20">
                <h3
                    className={
                        'text-white text-center fixed top-0 left-0 p-4' +
                        ' ' +
                        linkStyle
                    }
                >
                    <span
                        className={`
                            ${displayedMedia === 'video' && 'text-primary'}
                            cursor-pointer hover:text-primary`}
                        onClick={() => setDisplayedMedia('video')}
                        onKeyDown={onKey('Enter', setDisplayedMedia, 'video')}
                    >
                        {'Videos'}
                    </span>
                    <span className="mx-2">|</span>
                    <span
                        className={`
                            ${displayedMedia === 'photo' && 'text-primary'}
                            cursor-pointer hover:text-primary`}
                        onClick={() => setDisplayedMedia('photo')}
                        onKeyDown={onKey('Enter', setDisplayedMedia, 'photo')}
                    >
                        {'Photos'}
                    </span>
                </h3>
                <h3
                    id="heading"
                    className={`font-semibold mb-2 text-xl ${headingStyle}`}
                >
                    Media
                </h3>
                <Divider />
                {displayedMedia === 'video' && (
                    <div id="video">
                        {content.videoLinks?.map(link => (
                            <VideoPlayer key={link} url={link} />
                        ))}
                    </div>
                )}
                {displayedMedia === 'photo' && (
                    <SRLWrapper
                        options={{
                            buttons: {
                                showDownloadButton: false,
                            },
                        }}
                    >
                        <div id="photo">
                            {content.images?.map(({ asset }) => (
                                <Img
                                    className="mb-4 cursor-pointer "
                                    alt="Chaosbay"
                                    fluid={asset?.fluid}
                                    key={asset?.fluid}
                                />
                            ))}
                        </div>
                    </SRLWrapper>
                )}
                <h3 className="hidden lg:block text-white text-center absolute bottom-0 left-0 p-4 cursor-pointer hover:text-primary">
                    <FaArrowCircleRight className="inline-block mb-1 mr-2" />
                    <span
                        onKeyDown={onKey('Enter', scrollTo, 'past')}
                        onClick={() => scrollTo('heading')}
                    >
                        Top
                    </span>
                </h3>
            </aside>
        </>
    );
};

export default Media;
