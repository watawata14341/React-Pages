import React from 'react';
import Sakura from '../assets/sakura.svg'
import Momiji from '../assets/momiji.svg'

class Background extends React.Component {
    render() {
        return (
            <section className="bg">
                <img src={ Sakura } width="20" height="20" alt="桜" className="sakura"/>
                <img src={ Momiji } width="25" height="25" alt="紅葉" className="momiji" style={{ left: "10vw"}}/>
                <div className="snow" style={{ width: "11px", height: "11px", animationDelay: "0.0s", left: "0vw"}}></div>
                <div className="snow" style={{ width: "12px", height: "12px", animationDelay: "2.5s", left: "10vw"}}></div>
                <div className="snow" style={{ width: "9px", height: "9px", animationDelay: "8.0s", left: "20vw"}}></div>
                <div className="snow" style={{ width: "11px", height: "11px", animationDelay: "6.0s", left: "30vw"}}></div>
                <div className="snow" style={{ width: "10px", height: "10px", animationDelay: "1.5s", left: "40vw"}}></div>
                <div className="snow" style={{ width: "12px", height: "12px", animationDelay: "10.0s", left: "50vw"}}></div>
                <div className="snow" style={{ width: "8px", height: "8px", animationDelay: "9.0s", left: "60vw"}}></div>
                <div className="snow" style={{ width: "13px", height: "13px", animationDelay: "7.0s", left: "70vw"}}></div>
                <div className="snow" style={{ width: "10px", height: "10px", animationDelay: "2.5s", left: "80vw"}}></div>
            </section>
        );
    }
}

export default Background;