import React from 'react';
import './src/styles/global.css';
import './src/styles/custom.css';
import SimpleReactLightbox from 'simple-react-lightbox';

export function wrapRootElement({ element, props }) {
    return <SimpleReactLightbox {...props}>{element}</SimpleReactLightbox>;
}
