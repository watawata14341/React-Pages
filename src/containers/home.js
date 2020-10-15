import React from 'react';
import Header from '../components/header';

class Home extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <p>this is home.</p>
            </div>
        );
    }
}

export default Home;