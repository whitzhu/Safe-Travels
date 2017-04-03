import React, {Component} from 'react';
import { DragSource } from 'react-dnd';
import { ItemTypes } from './Constants';

/**
 * Specifies the drag source contract.
 * Only `beginDrag` function is required.
 */
const knightSource = {
  beginDrag() {
    return {};
  }
}
  /**
  * Specifies which props to inject into your component.
  */
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  };
}

class Knight extends Component {
  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div
        style={{
          fontSize: 40,
          fontWeight: 'bold',
          cursor: 'move',
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        ♘
      </div>,
    );
  }
}

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);


