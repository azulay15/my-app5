import React from 'react';
import './Header.css';

class Header extends React.Component {

    handleClick() {
        console.log('clicked!');
    }


    render(){
        return (
            <div className="Header">
                <h1>Header</h1>
            </div>
    );
  }
}

export default Header;