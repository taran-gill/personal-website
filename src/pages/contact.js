import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

import { Layout } from '../components/Layout';

import './contact.scss';

import signature from '../assets/images/signature.png';

class ContactPage extends React.Component {
    state = {
        date: new Date()
    }

    componentDidMount() {
        this.localTime = setInterval(() => this.updateLocalTime(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.localTime);
    }

    updateLocalTime() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <Layout>
                <div className='contact__content'>
                    <div className='contact__info'>
                        <h1>Let's talk!</h1>
                        <p>
                            You can reach me at <span aria-label='mail' role='img'>📬</span>&nbsp;
                            <a href="mailto:contact@tarangill.dev" target="_top">contact@tarangill.dev</a>.
                            <br />
                            I'm situated in the Greater Toronto Area, where it's&nbsp;
                            <Moment format='LT' tz='America/Toronto' date={this.state.date} />.
                        </p>
                        <br />
                        <p>
                            Made with <span aria-label='love' role='img'>❤️</span> in <a href='https://gatsbyjs.org'>Gatsby</a>.
                        </p>
                    </div>
        
                    <img src={signature} alt='Taran' />
                </div>
            </Layout>
        );
    }
}

export default ContactPage
