import React from 'react';
import Header from '../components/header';
import Hamberger from '../components/hamberger';
import Background from '../components/background';

class Practice extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            scenenum: 0,
        };
    }

    setSceneNum(num) {
        this.setState({ scenenum: num});
    }

    render() {
        return(
            <div>
                <Hamberger setSceneNum={(num) => { this.setSceneNum(num); }}/>
                <Header />
                <Background  scenenum={ this.state.scenenum } />
                <p>this is practice.</p>
            </div>
        );
    }
}

export default Practice;