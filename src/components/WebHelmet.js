/**
 * @fileOverview
 *  Define page metadata using Helmet
 */

import React from 'react';
import Helmet from 'react-helmet';

const WebHelmet = () => (
    <Helmet>
        <title>Taran Gill</title>
        <meta name='description' content='About me!' />
        <meta charset="UTF-8" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Helmet>
);

export { WebHelmet };
