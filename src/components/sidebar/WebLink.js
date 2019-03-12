import React from 'react';
import { Link } from 'gatsby';
import { Location } from '@reach/router';

import './WebLink.scss';

const WebLink = props => {
    const {
        icon,
        location
    } = props;

    let { to } = props;

    const { pathname } = location;

    /* Capitalize first letter for presentation */
    const title = to.charAt(0).toUpperCase() + to.slice(1);

    let isCurrentPage = false;
    if (to === 'home' && pathname === '/') {
        isCurrentPage = true;
    } else {
        isCurrentPage = pathname.includes(to.toLowerCase());
    }

    const currentPageStyle = isCurrentPage ? 'weblink__current-link' : 'hoverable';

    if (to.toLowerCase() === 'home') {
        to = ''
    }

    return (
        <div className={`weblink__button ${currentPageStyle}`}>
            <Link className={`icon ${icon} weblink__link`} to={`/${to}`}>
                &nbsp; {title}
            </Link>
        </div>
    );
}

const WebLinkHoc = props => (
    <Location>
        {locationProps => <WebLink {...locationProps} {...props} />}
    </Location>
)

export { WebLinkHoc as WebLink };
