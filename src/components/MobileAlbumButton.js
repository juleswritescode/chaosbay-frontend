import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { onKey } from '../utils/onKey';
import Img from 'gatsby-image';

const MobileAlbumButton = ({ album }) => {
    const [albumOpen, setAlbumOpen] = useState(!album.useButton);
    const albumPicEl = useRef(null);

    useEffect(() => {
        if (!albumPicEl.current) return;
        const albumPic = albumPicEl.current;
        if (albumOpen && albumPicEl) {
            gsap.to(albumPic, {
                scaleY: 1,
                duration: 0.1,
            });
        }
    }, [albumPicEl, albumOpen]);

    return (
        <>
            {album.useButton && (
                <li
                    className={`${
                        albumOpen ? 'mt-10 mb-4' : 'my-10'
                    } text-center cursor-pointer rounded pb-4 pt-5 bg-black border-4 border-color-primary hover:text-black shadow-lg`}
                >
                    <button
                        aria-haspopup="true"
                        aria-expanded={albumOpen}
                        onClick={() => setAlbumOpen(!albumOpen)}
                        className={`${
                            !albumOpen && 'animate-pulse'
                        } text-white group-hover:text-black text-2xl font-semibold leading-none`}
                    >
                        {album.buttonText || 'Asylum'}
                    </button>
                </li>
            )}
            {albumOpen && (
                <li className="transform origin-top scale-y-0" ref={albumPicEl}>
                    <a href={album.link} rel="noreferrer" target="_blank">
                        <Img
                            className="block relativE w-full object-fit"
                            alt="Album Artwork"
                            fluid={album.artwork?.asset?.fluid}
                        />
                        <div className="bg-black bg-opacity-50 h-full w-full text-center">
                            <h3 className="pt-3 animate-pulse">
                                <span className="font-light text-white">
                                    {album.catchPhrase}{' '}
                                </span>
                                <span className="font-semibold text-primary">
                                    {album.name}
                                </span>
                                <p className="mt-0 leading-none text-white text-center w-full pb-5">
                                    Buy Now
                                </p>
                            </h3>
                        </div>
                    </a>
                </li>
            )}
        </>
    );
};

export default MobileAlbumButton;
