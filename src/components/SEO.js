import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

const manifest = {
  name: 'Chaosbay',
  theme_color: '#D7BF70',
  background_color: '#C2C5D6',
  display: 'standalone',
  icons: [
    {
      src: '/mobile-icons/192.png',
      size: '192x192',
      type: 'image/png',
    },
    {
      src: '/mobile-icons/512.png',
      size: '512x512',
      type: 'image/png',
    },
  ],
};

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
        icon {
          asset {
            square16: fixed(width: 16, height: 16) {
              src
            }
            square32: fixed(width: 32, height: 32) {
              src
            }
            square57: fixed(width: 57, height: 57) {
              src
            }
            square60: fixed(width: 60, height: 60) {
              src
            }
            square72: fixed(width: 72, height: 72) {
              src
            }
            square76: fixed(width: 76, height: 76) {
              src
            }
            square80: fixed(width: 80, height: 80) {
              src
            }
            square96: fixed(width: 96, height: 96) {
              src
            }
            square100: fixed(width: 100, height: 100) {
              src
            }
            square100: fixed(width: 100, height: 100) {
              src
            }
            square114: fixed(width: 114, height: 114) {
              src
            }
            square120: fixed(width: 120, height: 120) {
              src
            }
            square144: fixed(width: 144, height: 144) {
              src
            }
            square152: fixed(width: 152, height: 152) {
              src
            }
            square180: fixed(width: 180, height: 180) {
              src
            }
            square192: fixed(width: 192, height: 192) {
              src
            }
            square512: fixed(width: 512, height: 512) {
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

  // set manifest JSON images
  manifest.icons[0].src = seo.icon.asset.square192.src;
  manifest.icons[1].src = seo.icon.asset.square512.src;

  let manifestUrl;
  if (typeof window != 'undefined') {
    const stringified = JSON.stringify(manifest);
    const blob = new Blob([stringified], { type: 'application/json' });
    manifestUrl = URL.createObjectURL(blob);
  }

  return (
    <Helmet defaultTitle="Chaosbay" titleTemplate="Chaosbay | %s">
      {/* General */}
      <title>{seo.addTitle}</title>
      <meta name="description" content={seo.description} />
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <meta name="apple-mobile-web-abb-title" content="Chaosbay" />
      <link rel="manifest" href={manifestUrl} />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href={seo.icon.asset.square57.src}
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href={seo.icon.asset.square60.src}
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href={seo.icon.asset.square72.src}
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href={seo.icon.asset.square76.src}
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href={seo.icon.asset.square114.src}
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href={seo.icon.asset.square120.src}
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href={seo.icon.asset.square144.src}
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href={seo.icon.asset.square152.src}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={seo.icon.asset.square180.src}
      />
      <link
        rel="icon"
        type="image/png"
        href={seo.icon.asset.square16.src}
        sizes="16x16"
      />
      <link
        rel="icon"
        type="image/png"
        href={seo.icon.asset.square32.src}
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href={seo.icon.asset.square96.src}
        sizes="96x96"
      />
      <link
        rel="icon"
        type="image/png"
        href={seo.icon.asset.square192.src}
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
