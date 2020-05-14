import React from 'react';
import './RandomColorSquare.css';

class RandomColorSquare extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rgbColor: 'rgb(100,100,100)'
        };
    }

    handleClick() {

        var red = (Math.floor(Math.random() * 256));
        var green = (Math.floor(Math.random() * 256));
        var blue = (Math.floor(Math.random() * 256));

        var randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';

        this.setState({
            rgbColor: randomColor
        })
    }

    render(){
        return (
            <div 
                className="RandomColorSquare" 
                style={{backgroundColor: this.state.rgbColor}}
                onClick={this.handleClick.bind(this)} >

            </div>
    );
  }
}

export default RandomColorSquare;