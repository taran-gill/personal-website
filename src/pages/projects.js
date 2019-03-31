import React from 'react';
import { Layout } from '../components/Layout';

import './projects.scss';

const ProjectsPage = () => (
  <Layout>
    <div className='projects__content'>
      <h1>
        Under construction <span aria-label='construction worker' role='img'>👷</span>
      </h1>
      <p>I really should work on some projects, shouldn't I?</p>
    </div>
  </Layout>
);

export default ProjectsPage