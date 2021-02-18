import React from 'react';
import './src/styles/global.css';
import './src/styles/custom.css';
import { Helmet } from 'react-helmet';
import SimpleReactLightbox from 'simple-react-lightbox';

export function wrapPageElement({ element, props }) {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Chaosbay | ASYLUM</title>
                <link rel="icon" type="image/png" href="/favicon.png" />
            </Helmet>
            <SimpleReactLightbox {...props}>{element}</SimpleReactLightbox>
        </>
    );
}
