import React from 'react';

const AttractionListEntry = (props) => (
  <div className="attraction-list-entry">
    <li>{props.attraction.name}</li>
  </div>
)

export default AttractionListEntry;
