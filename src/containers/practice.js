import React from 'react';
import Header from '../components/header';
import Hamberger from '../components/hamberger'

class Practice extends React.Component {
    render() {
        return(
            <div>
                <Hamberger />
                <Header />
                <p>this is practice.</p>
            </div>
        );
    }
}

export default Practice;