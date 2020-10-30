import React from 'react';
import Hamberger from '../components/hamberger';
import Background from '../components/background';
import Footer from '../components/footer';

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
            <>
                <Hamberger setSceneNum={(num) => { this.setSceneNum(num); }}/>
                <Background  scenenum={ this.state.scenenum } />
                <div class="wrapper">
                    <div class="con1">
                        <p>何か作成したものを上げていきます。</p>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default Practice;