import React from 'react';
import Sakura from '../assets/sakura.svg'
import Momiji from '../assets/momiji.svg'

class Background extends React.Component {
    render() {
        let Scene;
        switch (this.props.scenenum){
            case 0:
                Scene = (
                    <section className="bg">
                        <img src={ Sakura } width="20" height="20" alt="桜" className="sakura" style={{animationDelay: "3.0s", left: "-5vw"}}/>
                        <img src={ Sakura } width="20" height="20" alt="桜" className="sakura" style={{animationDelay: "5.0s", left: "0vw"}}/>
                        <img src={ Sakura } width="20" height="20" alt="桜" className="sakura" style={{animationDelay: "2.5s", left: "5vw"}}/>
                        <img src={ Sakura } width="20" height="20" alt="桜" className="sakura" style={{animationDelay: "7.0s", left: "10vw"}}/>
                        <img src={ Sakura } width="20" height="20" alt="桜" className="sakura" style={{animationDelay: "4.0s", left: "20vw"}}/>
                        <img src={ Sakura } width="20" height="20" alt="桜" className="sakura" style={{animationDelay: "6.5s", left: "30vw"}}/>
                        <img src={ Sakura } width="20" height="20" alt="桜" className="sakura" style={{animationDelay: "0.5s", left: "35vw"}}/>
                        <img src={ Sakura } width="20" height="20" alt="桜" className="sakura" style={{animationDelay: "5.5s", left: "60vw"}}/>
                        <img src={ Sakura } width="20" height="20" alt="桜" className="sakura" style={{animationDelay: "2.0s", left: "50vw"}}/>
                        <img src={ Sakura } width="20" height="20" alt="桜" className="sakura" style={{animationDelay: "4.5s", left: "70vw"}}/>
                        <img src={ Sakura } width="20" height="20" alt="桜" className="sakura" style={{animationDelay: "7.5s", left: "80vw"}}/>
                        <img src={ Sakura } width="20" height="20" alt="桜" className="sakura" style={{animationDelay: "1.5s", left: "85vw"}}/>
                        <img src={ Sakura } width="20" height="20" alt="桜" className="sakura" style={{animationDelay: "6.0s", left: "90vw"}}/>
                    </section>
                );
                break;
            case 1:
                Scene = (
                    <section className="bg">
                        <div className="bubble" style={{ width: "20px", height: "9px", animationDelay: "4.0s", left: "-5vw"}}></div>
                        <div className="bubble" style={{ width: "20px", height: "20px", animationDelay: "0.0s", left: "0vw"}}></div>
                        <div className="bubble" style={{ width: "15px", height: "15px", animationDelay: "2.5s", left: "10vw"}}></div>
                        <div className="bubble" style={{ width: "30px", height: "30px", animationDelay: "8.0s", left: "20vw"}}></div>
                        <div className="bubble" style={{ width: "11px", height: "11px", animationDelay: "6.0s", left: "30vw"}}></div>
                        <div className="bubble" style={{ width: "10px", height: "10px", animationDelay: "1.5s", left: "40vw"}}></div>
                        <div className="bubble" style={{ width: "20px", height: "20px", animationDelay: "10.0s", left: "50vw"}}></div>
                        <div className="bubble" style={{ width: "10px", height: "10px", animationDelay: "9.0s", left: "60vw"}}></div>
                        <div className="bubble" style={{ width: "13px", height: "13px", animationDelay: "7.0s", left: "70vw"}}></div>
                        <div className="bubble" style={{ width: "10px", height: "10px", animationDelay: "2.5s", left: "80vw"}}></div>
                    </section>
                );
                break;
            case 2:
                Scene = (
                    <section className="bg">
                        <img src={ Momiji } width="25" height="25" alt="紅葉" className="momiji" style={{ animationDelay: "3.0s", left: "-5vw"}}/>
                        <img src={ Momiji } width="25" height="25" alt="紅葉" className="momiji" style={{ animationDelay: "5.0s", left: "0vw"}}/>
                        <img src={ Momiji } width="25" height="25" alt="紅葉" className="momiji" style={{ animationDelay: "2.5s", left: "5vw"}}/>
                        <img src={ Momiji } width="25" height="25" alt="紅葉" className="momiji" style={{ animationDelay: "7.0s", left: "10vw"}}/>
                        <img src={ Momiji } width="25" height="25" alt="紅葉" className="momiji" style={{ animationDelay: "4.0s", left: "20vw"}}/>
                        <img src={ Momiji } width="25" height="25" alt="紅葉" className="momiji" style={{ animationDelay: "6.5s", left: "30vw"}}/>
                        <img src={ Momiji } width="25" height="25" alt="紅葉" className="momiji" style={{ animationDelay: "0.5s", left: "35vw"}}/>
                        <img src={ Momiji } width="25" height="25" alt="紅葉" className="momiji" style={{ animationDelay: "5.5s", left: "60vw"}}/>
                        <img src={ Momiji } width="25" height="25" alt="紅葉" className="momiji" style={{ animationDelay: "2.0s", left: "50vw"}}/>
                        <img src={ Momiji } width="25" height="25" alt="紅葉" className="momiji" style={{ animationDelay: "4.5s", left: "70vw"}}/>
                        <img src={ Momiji } width="25" height="25" alt="紅葉" className="momiji" style={{ animationDelay: "7.5s", left: "80vw"}}/>
                        <img src={ Momiji } width="25" height="25" alt="紅葉" className="momiji" style={{ animationDelay: "1.5s", left: "85vw"}}/>
                        <img src={ Momiji } width="25" height="25" alt="紅葉" className="momiji" style={{ animationDelay: "6.0s", left: "90vw"}}/>
                    </section>
                );
                break;
            case 3:
                Scene = (
                    <section className="bg">
                        <div className="snow" style={{ width: "9px", height: "9px", animationDelay: "4.0s", left: "-5vw"}}></div>
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
                break;
            default:
                break;
        }
        return (
            <div>
                { Scene }
            </div>
        );
    }
}

export default Background;