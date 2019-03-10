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
    </Helmet>
);

export { WebHelmet };
