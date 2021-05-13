import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class ThemeToggle extends Component {
    static contextType = ThemeContext;
    render() { 
        const { isLightTheme, toggleTheme } = this.context;
        return (
            <button onClick={toggleTheme}>
                {isLightTheme ? 'Dark Mode' : 'Light Mode'}
            </button>
        );
    }
}
 
export default ThemeToggle;