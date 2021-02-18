import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';
import BlockContent from '@sanity/block-content-to-react';
import Img from 'gatsby-image';

import Divider from './Divider';

const About = ({ h, textStyle, headingStyle, content = {} }) => {
    return (
        <SRLWrapper>
            <h3 className={`font-semibold mb-2 text-2xl ${headingStyle}`}>
                {content.heading}
            </h3>
            <Divider />
            <Img alt="Chaosbay" fluid={content.mainImage?.asset?.fluid} />
            <Divider />
            <div className={textStyle}>
                <BlockContent blocks={content.text} />
            </div>
            <br />
            <br />
            <div
                className={textStyle + ' border-l-2 border-white pl-4 lg:mb-20'}
            >
                <BlockContent blocks={content.quote} />
            </div>
        </SRLWrapper>
    );
};

export default About;
