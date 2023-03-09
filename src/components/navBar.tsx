import React from 'react';

interface NavBarProps {
    title: string;
}

const NavBar: React.FC<NavBarProps> = ({title}) => {
    return (
        <nav>
            <h1>{title}</h1>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
};
export default NavBar;