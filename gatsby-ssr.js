import React from 'react';
import SimpleReactLightbox from 'simple-react-lightbox';
import Layout from './src/layout/Layout';

export function wrapPageElement({ element, props }) {
    return <Layout {...props}>{element}</Layout>;
}
export function wrapRootElement({ element }) {
    return <SimpleReactLightbox>{element}</SimpleReactLightbox>;
}
