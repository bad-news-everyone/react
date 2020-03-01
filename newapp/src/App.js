import React from 'react';
import { Math } from './math';

export class App3 extends React.Component {
  render() {
    return <div>
      <h1>Hello</h1>
      <h2>{this.props.name} and { Math }</h2>
      <h3>{ Math }</h3>
    </div>;
  }
}