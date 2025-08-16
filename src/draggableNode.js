// // draggableNode.js

// export const DraggableNode = ({ type, label }) => {
//     const onDragStart = (event, nodeType) => {
//       const appData = { nodeType }
//       event.target.style.cursor = 'grabbing';
//       event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
//       event.dataTransfer.effectAllowed = 'move';
//     };
  
//     return (
//       <div
//         className={type}
//         onDragStart={(event) => onDragStart(event, type)}
//         onDragEnd={(event) => (event.target.style.cursor = 'grab')}
//         style={{ 
//           cursor: 'grab', 
//           minWidth: '80px', 
//           height: '60px',
//           display: 'flex', 
//           alignItems: 'center', 
//           borderRadius: '8px',
//           backgroundColor: '#1C2536',
//           justifyContent: 'center', 
//           flexDirection: 'column'
//         }} 
//         draggable
//       >
//           <span style={{ color: '#fff' }}>{label}</span>
//       </div>
//     );
//   };
  

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
