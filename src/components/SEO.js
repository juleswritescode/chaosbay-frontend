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
                showEvents
                location
                events {
                    name
                    address
                    location
                    offers
                    startDate
                    url
                }
                seoRelease {
                    name
                    albumReleaseType
                    url
                    genre
                    numTracks
                    image {
                        asset {
                            fixed(width: 800) {
                                src
                            }
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
            <meta name="robots" content="noodp,noydir" />
            <link rel="icon" type="image/png" href="/favicon.png" />

            {/* Opengraph */}
            <meta property="og:url" content="https://www.chaosbay.com" />
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

            {/* Mobile */}
            <meta name="apple-mobile-web-capable" content="yes" />
            <meta
                name="apple-mobile-web-app-status-bar-style"
                content="black"
            />
            <meta name="apple-mobile-web-abb-title" content="Chaosbay" />
            <link rel="manifest" href="/manifest.json" />
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            <link
                rel="apple-touch-icon"
                sizes="57x57"
                href="/mobile-icons/57.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="60x60"
                href="/mobile-icons/60.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="72x72"
                href="/mobile-icons/72.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="76x76"
                href="/mobile-icons/76.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="114x114"
                href="/mobile-icons/80.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="120x120"
                href="/mobile-icons/120.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="144x144"
                href="/mobile-icons/144.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="152x152"
                href="/mobile-icons/152.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/mobile-icons/180.png"
            />
            <link
                rel="icon"
                type="image/png"
                href="/mobile-icons/16.png"
                sizes="16x16"
            />
            <link
                rel="icon"
                type="image/png"
                href="/mobile-icons/32.png"
                sizes="32x32"
            />
            <link
                rel="icon"
                type="image/png"
                href="/mobile-icons/100.png"
                sizes="96x96"
            />
            <link
                rel="icon"
                type="image/png"
                href="/mobile-icons/196.png"
                sizes="192x192"
            />

            {/* Structured Data */}
            <script type="application/ld+json">
                {`
                {
                    "@context": "https://schema.org",
                    "@type": "MusicGroup",
                    "name": "Chaosbay",
                    "description": "${seo.description}",
                    "url": "https://www.chaosbay.com",
                    "image": "${seo.image.asset.fbImage.src}",
                    "location": "${seo.location}",
                    "album": {
                        "@type": "MusicAlbum",
                        "albumProductionType": "Studio Album",
                        "albumReleaseType": "${
                            seo.seoRelease.albumReleaseType
                        }",
                         "genre": "${seo.seoRelease.genre}",
                         "name": "${seo.seoRelease.name}",
                         "numTracks": "${seo.seoRelease.numTracks}",
                         "url": "${seo.seoRelease.url}",
                         "image": "${seo.seoRelease.image.asset.fixed.src}"
                    },
                    "event": ${
                        seo.showEvents
                            ? JSON.stringify(
                                  seo.events.map(function renderEvent(event) {
                                      return {
                                          '@type': 'Event',
                                          name: event.name,
                                          offers: event.offers,
                                          location: {
                                              '@type': 'Place',
                                              name: event.location,
                                              address: event.address,
                                          },
                                          startDate: event.startDate,
                                          url: event.url,
                                      };
                                  }),
                                  null,
                                  2
                              )
                            : ''
                    }
                }
            `}
            </script>
        </Helmet>
    );
}
