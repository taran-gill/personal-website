import React, { Fragment } from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

import { Layout } from '../components/Layout';

import experienceContent from '../content/experience-content';
import technologiesContent from '../content/technologies';

import './experience.scss';

const ExperiencePage = () => {
    const experienceTimeline = (
        <Timeline lineColor={'#ddd'} animate={false}>
            {experienceContent.map((experience, i) => 
                <TimelineItem
                    key={i}
                    dateText={experience.time}
                    className={i % 2 ? 'experience__timeline-even' : 'experience__timeline-odd'}
                >
                    <h3>
                        {experience.title},
                        <br />
                        {experience.organization}
                    </h3>
                    <ul>
                        {
                            experience.accomplishments.map((accomplishment, k) => 
                                <li key={k}>{accomplishment}</li>
                            )
                        }
                    </ul>
                </TimelineItem>
            )}
        </Timeline>
    );

    const technologiesList = (
        <div>
            {technologiesContent.map(grouping =>
                <Fragment>
                    <h3>{grouping.level}</h3>
                    <ul>
                        {grouping.items.map(tech =>
                            <li className={`icon fa-${tech.icon}`}>{tech.name}</li>
                        )}
                    </ul>
                </Fragment>
            )}
        </div>
    );

    return (
        <Layout>
            <div className='experience__content'>
                <h1>
                    I'm always giving 110% <span aria-label='flexed biceps' role='img'>💪</span>
                </h1>
                <br />
                <h2>Work Experience</h2>
                {experienceTimeline}
                <hr />
                <h2>Tools and Technologies</h2>
                {technologiesList}
            </div>
        </Layout>
    );
}

export default ExperiencePage;
