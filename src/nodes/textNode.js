// // textNode.js

// import { useState } from 'react';
// import { Handle, Position } from 'reactflow';

// export const TextNode = ({ id, data }) => {
//   const [currText, setCurrText] = useState(data?.text || '{{input}}');

//   const handleTextChange = (e) => {
//     setCurrText(e.target.value);
//   };

//   return (
//     <div style={{width: 200, height: 80, border: '1px solid black'}}>
//       <div>
//         <span>Text</span>
//       </div>
//       <div>
//         <label>
//           Text:
//           <input
//             type="text"
//             value={currText}
//             onChange={handleTextChange}
//           />
//         </label>
//       </div>
//       <Handle
//         type="source"
//         position={Position.Right}
//         id={`${id}-output`}
//       />
//     </div>
//   );
// }

// import { useState } from 'react';
// import BaseNode from './BaseNode';

// export const TextNode = ({ id, data }) => {
//   const [currText, setCurrText] = useState(data?.text || '{{input}}');

//   return (
//     <BaseNode
//       title="Text"
//       outputs={[{ id: `${id}-output` }]}
//     >
//       <label>
//         Text:
//         <input
//           type="text"
//           value={currText}
//           onChange={(e) => setCurrText(e.target.value)}
//         />
//       </label>
//     </BaseNode>
//   );
// };

// import { useState, useEffect, useRef } from 'react';
// import { Handle, Position } from 'reactflow';
// import BaseNode from './BaseNode';

// export const TextNode = ({ id, data }) => {
//   const [currText, setCurrText] = useState(data?.text || '{{input}}');
//   const [variables, setVariables] = useState([]);
//   const textareaRef = useRef(null);

//   // Detect variables in {{varName}} format
//   useEffect(() => {
//     const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
//     const foundVars = [];
//     let match;
//     while ((match = regex.exec(currText)) !== null) {
//       if (!foundVars.includes(match[1])) {
//         foundVars.push(match[1]);
//       }
//     }
//     setVariables(foundVars);
//   }, [currText]);

//   // Auto-resize textarea height
//   const adjustTextareaHeight = () => {
//     if (textareaRef.current) {
//       textareaRef.current.style.height = 'auto';
//       textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
//     }
//   };

//   useEffect(() => {
//     adjustTextareaHeight();
//   }, [currText]);

//   return (
//     <BaseNode
//       title="Text"
//       outputs={[{ id: `${id}-output` }]}
//       style={{
//         width: Math.max(200, currText.length * 8),
//         display: 'flex',
//         flexDirection: 'column',
//         gap: '6px'
//       }}
//     >
//       {/* Dynamic handles for variables */}
//       {variables.map((variable, idx) => (
//         <Handle
//           key={variable}
//           type="target"
//           position={Position.Left}
//           id={`${id}-${variable}`}
//           style={{ top: 40 + idx * 20 }}
//         />
//       ))}

//       <label>
//         Text:
//         <textarea
//           ref={textareaRef}
//           value={currText}
//           onChange={(e) => setCurrText(e.target.value)}
//           style={{
//             width: '100%',
//             resize: 'none',
//             overflow: 'hidden',
//             boxSizing: 'border-box'
//           }}
//         />
//       </label>
//     </BaseNode>
//   );
// };


// import { useState, useEffect, useRef } from "react";
// import BaseNode from "./BaseNode";

// export const TextNode = ({ id, data }) => {
//   const [currText, setCurrText] = useState(data?.text || "{{input}}");
//   const [variables, setVariables] = useState([]);
//   const textareaRef = useRef(null);

//   // Detect variables in {{varName}} format
//   useEffect(() => {
//     const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
//     const foundVars = [];
//     let match;
//     while ((match = regex.exec(currText)) !== null) {
//       if (!foundVars.includes(match[1])) {
//         foundVars.push(match[1]);
//       }
//     }
//     setVariables(foundVars);
//   }, [currText]);

//   // Auto-resize textarea height
//   useEffect(() => {
//     if (textareaRef.current) {
//       textareaRef.current.style.height = "auto";
//       textareaRef.current.style.height =
//         textareaRef.current.scrollHeight + "px";
//     }
//   }, [currText]);

//   return (
//     <BaseNode
//       title="Text"
//       // each variable gets a unique input handle
//       inputs={variables.map((v, idx) => ({
//         id: `${id}-${v}`,
//         top: 40 + idx * 25, // spacing for each handle
//       }))}
//       // one output handle
//       outputs={[{ id: `${id}-output`, top: 40 }]}
//       style={{
//         minHeight: Math.max(100, variables.length * 30 + 60), // grow with variable count
//         width: 250,
//       }}
//     >
//       <label style={{ fontSize: "14px" }}>
//         Text:
//         <textarea
//           ref={textareaRef}
//           value={currText}
//           onChange={(e) => setCurrText(e.target.value)}
//           style={{
//             width: "100%",
//             resize: "none",
//             overflow: "hidden",
//             boxSizing: "border-box",
//             border: "1px solid #ccc",
//             borderRadius: "4px",
//             padding: "4px 6px",
//             marginTop: "4px",
//           }}
//         />
//       </label>
//     </BaseNode>
//   );
// };


import { useState, useEffect, useRef } from "react";
import { Position } from "reactflow";
import BaseNode from "./BaseNode";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);

  // Detect variables in {{varName}} format
  useEffect(() => {
    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    const foundVars = [];
    let match;
    while ((match = regex.exec(currText)) !== null) {
      if (!foundVars.includes(match[1])) {
        foundVars.push(match[1]);
      }
    }
    setVariables(foundVars);
  }, [currText]);

  // Auto-resize textarea height
  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [currText]);

  // Build inputs dynamically from variables
  const inputs = variables.map((variable, idx) => ({
    id: `${id}-${variable}`,
    top: 40 + idx * 20,
  }));

  // One output handle
  const outputs = [{ id: `${id}-output`, top: 20 }];

  return (
    <BaseNode
      title="Text"
      inputs={inputs}
      outputs={outputs}
      style={{
        width: Math.max(200, currText.length * 8),
        display: "flex",
        flexDirection: "column",
        gap: "6px",
      }}
    >
      <label>
        Text:
        <textarea
          ref={textareaRef}
          value={currText}
          onChange={(e) => setCurrText(e.target.value)}
          style={{
            width: "100%",
            resize: "none",
            overflow: "hidden",
            boxSizing: "border-box",
          }}
        />
      </label>
    </BaseNode>
  );
};

