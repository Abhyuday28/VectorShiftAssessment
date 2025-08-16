// import BaseNode from './BaseNode';
// import { useStore } from '../store';

// export const InputNode = ({ id, data }) => {
//   const updateNodeField = useStore(state => state.updateNodeField);

//   return (
//     <BaseNode title="Input">
//       <div>
//         <label>Name:</label>
//         <input
//           type="text"
//           value={data.name || ''}
//           onChange={(e) => updateNodeField(id, 'name', e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Type:</label>
//         <select
//           value={data.type || 'Text'}
//           onChange={(e) => updateNodeField(id, 'type', e.target.value)}
//         >
//           <option value="Text">Text</option>
//           <option value="Number">Number</option>
//         </select>
//       </div>
//     </BaseNode>
//   );
// };


// import React from "react";
// import { useStore } from "../store";
// import BaseNode from "./BaseNode";

// const InputNode = ({ id, data }) => {
//   const updateNodeField = useStore((state) => state.updateNodeField);

//   return (
//     <BaseNode title="Input">
//       <div style={{ marginBottom: "8px", fontSize: "14px" }}>
//         <label style={{ marginRight: "6px" }}>Field name:</label>
//         <input
//           type="text"
//           value={data.name || ""}
//           onChange={(e) => updateNodeField(id, "name", e.target.value)}
//           style={{
//             padding: "4px 6px",
//             border: "1px solid #ccc",
//             borderRadius: "4px",
//             // width: '100%',
//           }}
//         />
//       </div>
//       <div style={{ fontSize: "14px" }}>
//         <label style={{ marginRight: "6px" }}>Type:</label>
//         <select
//           value={data.type || "Text"}
//           onChange={(e) => updateNodeField(id, "type", e.target.value)}
//           style={{
//             padding: "4px 6px",
//             border: "1px solid #ccc",
//             borderRadius: "4px",
//           }}
//         >
//           <option value="Text">Text</option>
//           <option value="Number">Number</option>
//         </select>
//       </div>
//     </BaseNode>
//   );
// };

// export default InputNode;


// import React from "react";
// import { useStore } from "../store";
// import BaseNode from "./BaseNode";

// const InputNode = ({ id, data }) => {
//   const updateNodeField = useStore((state) => state.updateNodeField);

//   return (
//     <BaseNode
//       title="Input"
//       inputs={[]} // no inputs
//       outputs={[{ id: `${id}-output` }]} // one output
//     >
//       <div style={{ marginBottom: "8px", fontSize: "14px" }}>
//         <label style={{ marginRight: "6px" }}>Field name:</label>
//         <input
//           type="text"
//           value={data.name || ""}
//           onChange={(e) => updateNodeField(id, "name", e.target.value)}
//           style={{
//             padding: "4px 6px",
//             border: "1px solid #ccc",
//             borderRadius: "4px",
//             width: "100%",
//           }}
//         />
//       </div>
//       <div style={{ fontSize: "14px" }}>
//         <label style={{ marginRight: "6px" }}>Type:</label>
//         <select
//           value={data.type || "Text"}
//           onChange={(e) => updateNodeField(id, "type", e.target.value)}
//           style={{
//             padding: "4px 6px",
//             border: "1px solid #ccc",
//             borderRadius: "4px",
//             width: "100%",
//           }}
//         >
//           <option value="Text">Text</option>
//           <option value="Number">Number</option>
//         </select>
//       </div>
//     </BaseNode>
//   );
// };

// export default InputNode;


import React from "react";
import { useStore } from "../store";
import BaseNode from "./BaseNode";

const InputNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);

  // Input nodes only have an output handle
  const outputs = [{ id: `${id}-output`, top: 40 }];

  return (
    <BaseNode title="Input" outputs={outputs}>
      <div style={{ marginBottom: "8px", fontSize: "14px" }}>
        <label style={{ marginRight: "6px" }}>Field name:</label>
        <input
          type="text"
          value={data.name || ""}
          onChange={(e) => updateNodeField(id, "name", e.target.value)}
          style={{
            padding: "4px 6px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>
      <div style={{ fontSize: "14px" }}>
        <label style={{ marginRight: "6px" }}>Type:</label>
        <select
          value={data.type || "Text"}
          onChange={(e) => updateNodeField(id, "type", e.target.value)}
          style={{
            padding: "4px 6px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        >
          <option value="Text">Text</option>
          <option value="Number">Number</option>
        </select>
      </div>
    </BaseNode>
  );
};

export default InputNode;
