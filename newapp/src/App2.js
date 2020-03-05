import React from 'react';
import { App3 } from './App3.js'
export class App2 extends React.Component {
    render() { 
        const number4 = this.props.number * 2;
        return <App3 y = { number4 } />;
    }
}



