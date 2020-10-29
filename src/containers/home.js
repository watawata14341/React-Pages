import React from 'react';
import Header from '../components/header';
import Hamberger from '../components/hamberger';
import Background from '../components/background';

class Home extends React.Component {
    render() {
        return(
            <div>
                <Hamberger />
                <Header />
                <Background  scenenum={ 2 } />
                <p>this is home.</p>
            </div>
        );
    }
}

export default Home;