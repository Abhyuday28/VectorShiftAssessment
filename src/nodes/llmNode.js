// // llmNode.js

// import { Handle, Position } from 'reactflow';

// export const LLMNode = ({ id, data }) => {

//   return (
//     <div style={{width: 200, height: 80, border: '1px solid black'}}>
//       <Handle
//         type="target"
//         position={Position.Left}
//         id={`${id}-system`}
//         style={{top: `${100/3}%`}}
//       />
//       <Handle
//         type="target"
//         position={Position.Left}
//         id={`${id}-prompt`}
//         style={{top: `${200/3}%`}}
//       />
//       <div>
//         <span>LLM</span>
//       </div>
//       <div>
//         <span>This is a LLM.</span>
//       </div>
//       <Handle
//         type="source"
//         position={Position.Right}
//         id={`${id}-response`}
//       />
//     </div>
//   );
// }

import BaseNode from './BaseNode';

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      title="LLM"
      inputs={[
        { id: `${id}-system`, top: '33%' },
        { id: `${id}-prompt`, top: '66%' }
      ]}
      outputs={[{ id: `${id}-response` }]}
    >
      <div>This is a LLM.</div>
    </BaseNode>
  );
};

