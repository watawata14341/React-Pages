import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return(
            <div>
                <p>Watanuki</p>
                <Link to='/'>Home</Link>
                <Link to='/practice'>Practice</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        );
    }
}

export default Header;
