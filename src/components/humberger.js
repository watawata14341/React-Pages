import React from 'react';
import { Link } from 'react-router-dom';

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
                        <Link to='/' class="link">Home</Link>
                        <br />
                        <Link to='/practice' class="link">Practice</Link>
                        <br />
                        <Link to='/contact' class="link">Contact</Link>
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