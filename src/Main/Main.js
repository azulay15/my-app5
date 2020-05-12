import React from 'react';
import './Main.css';
import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';



class Main extends React.Component {

    constructor() {
        super();
    }

    render(){
        return (
            <div className="Main">
                <h1>Main</h1>
                <Sidebar />
                <Content />
            </div>
    )
}
}

export default Main;