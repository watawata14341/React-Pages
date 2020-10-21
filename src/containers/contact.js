import React from 'react';
import Header from '../components/header'
import Hamberger from '../components/hamberger'

class Contact extends React.Component {
    render() {
        return(
            <div>
                <Hamberger />
                <Header />
                <p>this is contact.</p>
            </div>
        );
    }
}

export default Contact;