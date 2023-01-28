import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <button>
                <Link to="/logs">Logs Index</Link>
            </button>
            <button>
                <Link to="/logs/new">New Log Entry</Link>
            </button>
        </nav>
    );
};

export default NavBar;