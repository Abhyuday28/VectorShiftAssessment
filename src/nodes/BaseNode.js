import React from "react";
import { Handle, Position } from "reactflow";
import './BaseNode.css';

const BaseNode = ({
  title,
  inputs = [],
  outputs = [],
  children,
  width = 200,
  height = "auto",
  style = {},
}) => {
  return (
    <div
      className="base-node"
      style={{
        width,
        height,
        border: "1px solid black",
        padding: "8px",
        borderRadius: "6px",
        backgroundColor: "#fff",
        ...style,
      }}
    >
      <div
        className="node-header"
        style={{ fontWeight: "bold", marginBottom: "6px" }}
      >
        {title}
      </div>

      <div className="node-body">{children}</div>

      {/* Input Handles */}
      {inputs.map((input, idx) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={input.id}
          style={{ top: input.top ?? 20 + idx * 20 }}
        />
      ))}

      {/* Output Handles */}
      {outputs.map((output, idx) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={output.id}
          style={{ top: output.top ?? 20 + idx * 20 }}
        />
      ))}
    </div>
  );
};

export default BaseNode;

