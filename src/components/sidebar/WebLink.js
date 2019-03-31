import React from 'react';
import { Link } from 'gatsby';
import { Location } from '@reach/router';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import './WebLink.scss';

const styles = {
    root: {
        padding: 0
    },
};

const WebLink = withStyles(styles)(props => {
    const {
        icon,
        location,
        classes
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
        <Button disabled={!!isCurrentPage} variant='contained' color='primary' 
            className={`weblink__button ${currentPageStyle} ${classes.root}`}
        >
            <Link className={`icon ${icon} weblink__link`} to={`/${to}`}>
                &nbsp; {title}
            </Link>
        </Button>
    );
})

const WebLinkHoc = props => (
    <Location>
        {locationProps => <WebLink {...locationProps} {...props} />}
    </Location>
)

export { WebLinkHoc as WebLink };
