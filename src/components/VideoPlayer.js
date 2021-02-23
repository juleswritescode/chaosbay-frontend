import React, { useRef, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import Loading from './Loading';

const VideoPlayer = ({ url }) => {
    const videoEl = useRef(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!videoEl.current) return;
        const div = videoEl.current;
        const height = (9 * div.offsetWidth) / 16;
        div.style.height = height + 'px';
    }, [videoEl]);

    return (
        <li className="w-full mb-4" ref={videoEl}>
            {loading && <Loading />}
            <ReactPlayer
                width="100%"
                height="100%"
                url={url}
                onReady={() => setLoading(false)}
                config={{
                    youtube: {
                        playerVars: {
                            modestbranding: 1,
                            controls: true,
                            fs: 1,
                        },
                    },
                }}
            />
        </li>
    );
};

export default VideoPlayer;
