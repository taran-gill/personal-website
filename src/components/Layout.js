import React from 'react';

import { Sidebar } from './sidebar/Sidebar';

import { WebHelmet } from './WebHelmet';

import './Layout.scss';

const Layout = props => {
    const { children } = props;

    return (
        <>
            <WebHelmet />
            <Sidebar />
            <main className='content fade-in'>
                {children}
            </main>
        </>
    );
}

export { Layout };
