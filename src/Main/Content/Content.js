import React from 'react';
import './Content.css';
import Collapsible from './Collapsible/Collapsible';
import RandomColorSquare from './RandomColorSquare/RandomColorSquare';



class Content extends React.Component {



    render(){
        return (
            <div className="Content">
                 <Collapsible header="This is the header">
                   this is the Content
                   this is the Content
                   this is the Content
                 </Collapsible>
                 <Collapsible header="This is the header2">
                   this is the Content
                   this is the Content
                   this is the Content
                 </Collapsible>
                 <RandomColorSquare />

            </div>
    );
  }
}

export default Content;