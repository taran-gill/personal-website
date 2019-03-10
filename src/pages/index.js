import React from 'react'

import { Layout } from '../components/Layout';

function Home() {
    return (
        <Layout>
            <p>
                I <span aria-label='love' role='img'>❤️</span> what I do, 
                and I'm grateful that I work in a field that allows me to excel <span aria-label='' role='img'>📈</span>.
            </p>
        </Layout>
    );
}

export default Home