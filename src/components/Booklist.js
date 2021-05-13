import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Booklist extends Component {
    static contextType = ThemeContext;
    render() { 
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return ( 
            <div className='book-list' style={{ background: theme.bg, color: theme.syntax }}>
                <ul>
                    <li style={{ background: theme.ui }}>the design of everyday things</li>
                    <li style={{ background: theme.ui }}>don't make me think</li>
                    <li style={{ background: theme.ui }}>operation trekker</li>
                    <li style={{ background: theme.ui }}>emotional design</li>
                    <li style={{ background: theme.ui }}>atomic habits</li>
                </ul>
            </div>
         );
    }
}
 
export default Booklist;