import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import { graphql } from 'gatsby';

const Impressum = ({ data = {} }) => {
    return (
        <div className="w-full h-full p-4">
            {!data.impressum?.text ? (
                <p>Impressum data couldn't be loaded.</p>
            ) : (
                <BlockContent blocks={data.impressum?.text} />
            )}
        </div>
    );
};

export default Impressum;

export const query = graphql`
    query {
        impressum: sanityImpressum {
            text: _rawText
        }
    }
`;
