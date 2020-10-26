import React from 'react';
import Sakura from '../assets/sakura.svg'

class Background extends React.Component {
    render() {
        return (
            <section className="bg">
                <img src={ Sakura } width="20" height="20" alt="桜" className="sakura"/>
                <div className="snow1"></div>
                <div className="snow2"></div>
                <div className="snow3"></div>
                <div className="snow4"></div>
                <div className="snow5"></div>
                <div className="snow6"></div>
                <div className="snow7"></div>
                <div className="snow8"></div>
                <div className="snow9"></div>
            </section>
        );
    }
}

export default Background;