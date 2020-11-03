import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return(
            <div>
                <p>Watanuki</p>
                <Link to='/React-pages/'>Home</Link>
                <Link to='/React-pages/practice'>Practice</Link>
                <Link to='/React-pages/contact'>Contact</Link>
            </div>
        );
    }
}

export default Header;
