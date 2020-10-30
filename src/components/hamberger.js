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
                            <Link to='/React-demo' className="link">Home</Link>
                            <br />
                            <Link to='/React-demo/practice' className="link">Practice</Link>
                            <br />
                            <Link to='/React-demo/contact' className="link">Contact</Link>
                            <br />
                        </div>
                        <div id="bg-btn">
                            <button type="button" value="0" className="btn btn-0" onClick={() => { this.clickButton(0); }}><span>春</span></button>
                            <button type="button" value="1" className="btn btn-1" onClick={() => { this.clickButton(1); }}><span>夏</span></button>
                            <button type="button" value="2" className="btn btn-2" onClick={() => { this.clickButton(2); }}><span>秋</span></button>
                            <button type="button" value="3" className="btn btn-3" onClick={() => { this.clickButton(3); }}><span>冬</span></button>
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