import React from 'react';
import { Link } from 'gatsby';

import './WebLink.scss';

const WebLink = props => {
    const { 
        to,
        icon
    } = props;

    /* Capitalize first letter for presentation */
    const title = to.charAt(0).toUpperCase() + to.slice(1);

    return (
        <div class='weblink__button hoverable'>
            <Link className={`icon ${icon} weblink__link`} to={`/${to}/`}>
                &nbsp; {title}
            </Link>
        </div>
    );
}

export { WebLink };
