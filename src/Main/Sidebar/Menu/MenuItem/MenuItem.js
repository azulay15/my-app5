import React from 'react';
import './MenuItem.css';

class MenuItem extends React.Component {

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
            <div className="MenuItem">
                <li>
                    {this.props.children}
                </li>
            </div>
    );
  }
}

export default MenuItem;