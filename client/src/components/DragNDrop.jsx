import React from 'react';
import Board from './Board';
import { observe } from './Game';

export default class DragNDrop extends React.Component {
  constructor(props) {
    super(props);
    this.unobserve = observe(this.handleChange.bind(this));
  }

  handleChange(knightPosition) {
    const nextState = { knightPosition };
    if (this.state) {
      this.setState(nextState);
    } else {
      this.state = nextState;
    }
  }


  componentWillUnmount() {
    this.unobserve();
  }

  render() {
    const { knightPosition } = this.state;
    return (
      <div>
        <Board knightPosition={knightPosition} />
      </div>
    );
  }
}
