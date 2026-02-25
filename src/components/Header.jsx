import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
        <div className='flex  p-4 gap-8'>
            <Link to="/">Home</Link>
            <Link to="/addCoffee">Add Coffee</Link>
            <Link to="/users">Users</Link>
            {/* <Link to="/updateCoffee">Update Coffee</Link> */}
            
        </div>
    );
};

export default Header;