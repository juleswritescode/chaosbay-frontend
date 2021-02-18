import React from 'react';
import BlockContent from '@sanity/block-content-to-react';

const Impressum = ({ impressum = {} }) => {
    return (
        <div className="w-full h-full p-4">
            {!impressum.text ? (
                <p>Impressum data couldn't be loaded.</p>
            ) : (
                <BlockContent blocks={impressum.text} />
            )}
        </div>
    );
};

export default Impressum;
