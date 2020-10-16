import React from 'react';

class Humberger extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
        };
    }

    handleOpen() {
        if (this.state.isOpen){
            this.setState({isOpen: false});
        }
        else {
            this.setState({isOpen: true});
        }
    }

    render() {
        let drawer;
        if (this.state.isOpen){
            drawer = (
                <div class="drawer-out">
                    <div class="links">
                        <a href="index.html" class="link">home</a>
                        <br />
                        <a href="practice.html" class="link">practice</a>
                        <br />
                        <a href="contact.html" class="link">contact</a>
                        <br />
                    </div>
                </div>
            );
        }
        return(
            <div id="buger-menu">
                <button type="button" id="buttonHamburger" class="button hamburger" onClick={() => {this.handleOpen()}}>
                    <span class="hamburger_line">
                         {/*<span class="visuallyHidden">
                         </span>*/}
                    </span>
                </button>
                { drawer }
            </div>
        );
    }
}

export default Humberger;