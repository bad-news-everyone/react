import React from 'react';
import { Math } from './math';
//import './number.js';

export class App3 extends React.Component {
  render() {
    return <div>
      <h1>Hello</h1>
      <h2>{this.props.name}</h2>
      <h3>{this.props.secondName}</h3>
    </div>;
  }
}