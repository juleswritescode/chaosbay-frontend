import React from 'react';
import Logo from './Logo';

const Loading = () => {
    const reduceMotion =
        typeof window !== undefined &&
        matchMedia('(prefers-reduced-motion: reduce)').matches;

    return (
        <div className="w-full h-40 flex justify-center items-center">
            {reduceMotion ? (
                <h2 className="text-primary">Loading...</h2>
            ) : (
                <Logo className="w-32 h-32 animate-spin text-primary" />
            )}
        </div>
    );
};

export default Loading;
