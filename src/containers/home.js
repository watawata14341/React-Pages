import React from 'react';
import Header from '../components/header';
import Humberger from '../components/humberger';

class Home extends React.Component {
    render() {
        return(
            <div>
                <Humberger />
                <Header />
                <p>this is home.</p>
            </div>
        );
    }
}

export default Home;