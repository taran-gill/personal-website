import reactIcon from '../assets/images/technologies/react.png';
import nodeIcon from '../assets/images/technologies/nodejs.png';
import pythonIcon from '../assets/images/technologies/python.png';
import jqueryIcon from '../assets/images/technologies/jquery.png';
import postgresqlIcon from '../assets/images/technologies/postgresql.png';
import gitIcon from '../assets/images/technologies/git.png';

import dockerIcon from '../assets/images/technologies/docker.png';

import golangIcon from '../assets/images/technologies/golang.png';
import javaIcon from '../assets/images/technologies/java.png';

export default [
    {
        level: 'Professional',
        items: [
            { icon: nodeIcon,       name: 'Node.js' },
            { icon: reactIcon,      name: 'React' },
            { icon: pythonIcon,     name: 'Python' },
            { icon: jqueryIcon,     name: 'jQuery' },
            { icon: postgresqlIcon, name: 'SQL {MySql, Postgres}' },
            { icon: gitIcon,        name: 'Version Control {Git, SVN}' },
        ]
    },
    {
        level: 'Intermediate',
        items: [
            { icon: dockerIcon,     name: 'Docker' },
        ]
    },
    {
        level: 'Hobbyist',
        items: [
            { icon: golangIcon,     name: 'Go'},
            { icon: javaIcon,     name: 'Java'},
        ]
    }
];
