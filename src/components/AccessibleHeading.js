import React, { useCallback } from 'react';
import { focusElement } from '../utils/focusElement';

const AccessibleHeading = ({
    className,
    level = 1,
    children,
    targetId = 'navigation',
    id = '',
    ariaLabel = 'Article Heading',
}) => {
    const Heading = `h${level}`;
    const trapFocus = useCallback(focusElement({ childSelector: 'a' }), []);

    return (
        <Heading
            ref={trapFocus}
            tabIndex="-1"
            className={className + 'relative'}
            id={id}
        >
            <a
                href={`#${targetId}`}
                aria-label="Back to Navigation"
                className="absolute -ml-4 opacity-0 focus-visible:opacity-100"
            >
                &laquo;
            </a>
            <span
                aria-label={ariaLabel + '. Start Reading'}
                className="sr-only"
            ></span>
            {children}
        </Heading>
    );
};

export default AccessibleHeading;
