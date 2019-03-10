import React from 'react';

import { Sidebar } from './Sidebar';

import { WebHelmet } from './WebHelmet';

import './Layout.scss';

const Layout = props => {
    const { children } = props;

    return (
        <>
            <WebHelmet />
            <Sidebar />
            <div className='content fade-in'>
                {children}
            </div>
        </>
    );
}

export { Layout };
