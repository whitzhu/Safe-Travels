import React from 'react';
import Board from './Board';


export default class DragNDrop extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Board knightPosition={[4,5]} />
      </div>
    );
  }
}
