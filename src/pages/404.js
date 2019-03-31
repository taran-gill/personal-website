import React from 'react';
import { Link } from 'gatsby';

import { Layout } from '../components/Layout';

import './404.scss';

const NotFoundPage = () => (
    <Layout>
        <div className='notfound__content'>
            <h1>This... isn't a page <span aria-label='thinking face' role='img'>🤔</span></h1>
            <p>Click <Link to='/'>here</Link> to go back to known territory</p>
        </div>
    </Layout>
);

export default NotFoundPage
