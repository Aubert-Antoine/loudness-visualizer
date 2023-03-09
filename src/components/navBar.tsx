import React from 'react';
// @ts-ignore
import img from './icon.png';

interface NavBarProps {
    title: string;
}

const NavBar: React.FC<NavBarProps> = ({title}) => {
    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="w-full">
                <div
                    className="grid max-w-xs grid-cols-3 gap-1 p-1 mx-auto my-2 bg-gray-100 rounded-lg dark:bg-gray-600"
                    role="group">
                    <img src={img} alt="Chrome icon" className="w-6 h-6 mr-2"/>
                    <button type="button"
                            className="px-5 py-1.5 text-xs font-medium text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 rounded-lg">
                        New
                    </button>
                    <button type="button"
                            className="px-5 py-1.5 text-xs font-medium text-white bg-gray-900 dark:bg-gray-300 dark:text-gray-900 rounded-lg">
                        Popular
                    </button>
                    <button type="button"
                            className="px-5 py-1.5 text-xs font-medium text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 rounded-lg">
                        Following
                    </button>
                </div>
            </div>
        </nav>
    );
};
export default NavBar;