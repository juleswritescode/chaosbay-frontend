import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

export default function SEO() {
    const { seo } = useStaticQuery(graphql`
        query {
            seo: sanitySeo {
                title
                description
                addTitle
                image {
                    asset {
                        fbImage: fixed(width: 1200, height: 630) {
                            src
                        }
                        twImage: fixed(width: 560, height: 300) {
                            src
                        }
                    }
                }
            }
        }
    `);

    return (
        <Helmet defaultTitle="Chaosbay" titleTemplate="Chaosbay | %s">
            {/* General */}
            <title>{seo.addTitle}</title>
            <meta name="description" content={seo.description} />
            <html lang="en" />
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <link rel="icon" type="image/png" href="/favicon.png" />

            {/* Opengraph */}
            <meta property="og:url" content="www.chaosbay.com" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.image.asset.fbImage.src} />
            <meta property="og:image:type" content="image/jpeg" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={seo.image.asset.twImage.src} />
        </Helmet>
    );
}
