import React from 'react'

import { Layout } from '../components/Layout';

import './index.scss';

const HomePage = () => (
    <Layout>
        <div className='index__content'>
            <h1>
                I <span aria-label='love' role='img'>❤️</span> what I do
            </h1>
            <p>
                ...and I'm grateful that I work in a field that allows me to excel <span aria-label='' role='img'>📈</span>.
            </p>
            <br />
            <p>
                Here are a few things I've written or been working on lately:
            </p>
        </div>
    </Layout>
);

export default HomePage
