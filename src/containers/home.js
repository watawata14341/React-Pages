import React from 'react';
import Header from '../components/header';
import Hamberger from '../components/hamberger';

class Home extends React.Component {
    render() {
        return(
            <div>
                <Hamberger />
                <Header />
                <p>this is home.</p>
            </div>
        );
    }
}

export default Home;