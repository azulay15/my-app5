import React from 'react';
import './Sidebar.css';
import Menu from './Menu/Menu';


class Sidebar extends React.Component {


    render(){
        return (
            <div className="Sidebar">
                <Menu />
            </div>
    );
  }
}

export default Sidebar;