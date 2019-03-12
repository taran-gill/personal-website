import React from 'react';

import { WebLink } from './WebLink';

import avatar from '../../assets/images/avatar.jpg';

import './Sidebar.scss';

const Sidebar = () => (
    <header className='sidebar'>
        <div className='sidebar__summary'>
            <img className='sidebar__profile-pic hoverable' src={avatar} alt='' />
            <summary>
                Hey <span aria-label='victory-hand' role='img'>✌️</span>,
                I'm <strong>Taran</strong>.
                <br />
                I'm a web developer.
            </summary>
        </div>
        <nav className='sidebar__links'>
            <ul>
                <li><WebLink icon='fa-home' to='home'/></li>
                <li><WebLink icon='fa-suitcase' to='experience'/></li>
                <li><WebLink icon='fa-tasks' to='projects'/></li>
                <li><WebLink icon='fa-envelope' to='contact'/></li>
            </ul>
        </nav>
        <footer className='sidebar__footer'>
            <ul className="icons">
                <li><a href="google.ca" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="https://github.com/taran-gill" className="icon fa-github"><span className="label">Github</span></a></li>
                <li><a href="google.ca" className="icon fa-dribbble"><span className="label">Dribbble</span></a></li>
                <li><a href="google.ca" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
            </ul>
            <span className='copyright'>
                &copy; Taran Gill
            </span>
        </footer>
    </header>
)

export { Sidebar };
