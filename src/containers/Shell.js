import React from 'react';

const Shell = ({ children }) => {
    return (
        <div className="mt-4 flex-grow bg-black bg-opacity-75 border-t-4 border-color-primary rounded w-full max-w-full py-20 px-32 overflow-y-auto min-w-full relative transform">
            {children}
        </div>
    );
};

export default Shell;
