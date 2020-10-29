import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

const propTypes = {
    setSceneNum: PropTypes.func,
};

class Hamberger extends React.Component {
    constructor(props) {
        super(props);
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

    clickButton(num) {
        return this.props.setSceneNum(num);
    }

    render() {
        return(
            <div id="buger-menu">
                <CSSTransition in={this.state.isOpen} timeout={300} classNames="drawer">
                    <div className="drawer">
                        <div className="links">
                            <Link to='/' className="link">Home</Link>
                            <br />
                            <Link to='/practice' className="link">Practice</Link>
                            <br />
                            <Link to='/contact' className="link">Contact</Link>
                            <br />
                            <button type="button" value="0" onClick={() => { this.clickButton(0); }}>春</button>
                            <button type="button" value="1" onClick={() => { this.clickButton(1); }}>夏</button>
                            <button type="button" value="2" onClick={() => { this.clickButton(2); }}>秋</button>
                            <button type="button" value="3" onClick={() => { this.clickButton(3); }}>冬</button>
                        </div>
                    </div>
                </CSSTransition>
                <button type="button" id="buttonHamburger" className="button hamburger" 
                        onClick={() => {this.handleOpen()}} aria-expanded={this.state.isOpen}>
                    <span className="hamburger_line">
                    </span>
                </button>
            </div>
        );
    }
}

Hamberger.propTypes = propTypes;
export default Hamberger;