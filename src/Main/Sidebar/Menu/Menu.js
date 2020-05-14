import React from 'react';
import './Menu.css';
import MenuItem from './MenuItem/MenuItem';


class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    handleClick() {
        this.setState({

        })
    }

    render(){
        return (
            <nav className="Menu">
                <MenuItem>
                <a href="" alt='one'>item one</a>                
                </MenuItem>
                <MenuItem>
                <a href="" alt='two'>item two</a> 
                </MenuItem>
                <MenuItem>
                <a href="" alt='three'>item three</a>                
                </MenuItem>
            </nav>
    );
  }
}

export default Menu;