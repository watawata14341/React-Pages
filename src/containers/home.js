import React from 'react';
import Hamberger from '../components/hamberger';
import Background from '../components/background';
import Footer from '../components/footer';

class Home extends React.Component {
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
                    <div class="prof-wrap">
                        <div class="prof-name">
                            <p>Akihiko Watanuki</p>
                        </div>
                        <div class="prof-hob">
                            <p>Hobby : 映画, 旅行, ゲーム</p>
                        </div>
                        <div class="prof-his">
                            <div class="prof-his-left">
                                <p>history : </p> 
                            </div>
                            <div class="prof-his-mid"></div>
                            <div class="prof-his-right">
                                <p>2014. 群馬高専 電子情報工学科</p><br/>
                                <p>2019. 山梨大学 コンピュータ理工学科</p><br/>
                                <p>2021. 山梨大学大学院 コンピュータ理工学専攻</p><br/>
                            </div>
                        </div>
                        <div class="prof-amb">
                            <p>長期インターン等を通して成長したい</p>
                        </div>
                    </div>
                </div>
                <Footer/>
            </>
        );
    }
}

export default Home;