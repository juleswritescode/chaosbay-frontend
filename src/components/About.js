import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';
import BlockContent from '@sanity/block-content-to-react';
import Img from 'gatsby-image';
import AccessibleHeading from './AccessibleHeading';

import Divider from './Divider';

const About = ({ textStyle, isMobile, content = {} }) => {
    return (
        <SRLWrapper>
            <AccessibleHeading
                level={2}
                targetId="navigation"
                className={`font-semibold mb-2 text-2xl ${
                    isMobile
                        ? 'text-center'
                        : 'text-white text-2xl text-center uppercase tracking-wider'
                }`}
            >
                {content.heading}
            </AccessibleHeading>
            <Divider />
            <Img alt="Chaosbay" fluid={content.mainImage?.asset?.fluid} />
            <Divider />
            <article className={textStyle}>
                <BlockContent blocks={content.text} />
            </article>
            <br />
            <br />
            <figure
                className={textStyle + ' border-l-2 border-white pl-4 lg:mb-20'}
            >
                <BlockContent blocks={content.quote} />
            </figure>
        </SRLWrapper>
    );
};

export default About;
