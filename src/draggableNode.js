import React from 'react';
import './draggableNode.css';

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event) => {
    const nodeData = JSON.stringify({ nodeType: type });
    event.dataTransfer.setData('application/reactflow', nodeData);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className="draggable-node"
      onDragStart={onDragStart}
      draggable
    >
      {label}
    </div>
  );
};
