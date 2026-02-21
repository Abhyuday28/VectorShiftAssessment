import { useStore } from "./store";
import { shallow } from "zustand/shallow";

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = ({ setAlertData }) => {
  const { nodes, edges } = useStore(selector, shallow);

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:8000/pipelines/parse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nodes, edges }),
      });

      const data = await res.json();
      setAlertData({
        type: "success",
        message: `Nodes: ${data.num_nodes}, Edges: ${data.num_edges}, Is DAG: ${data.is_dag}`,
      });
    } catch (error) {
      console.error("Error submitting pipeline:", error);
      setAlertData({
        type: "error",
        message: "Error connecting to backend.",
      });
    }
  };

  return (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <button
      onClick={handleSubmit}
      style={{
        margin: "20px",
        padding: "10px 14px",
        background: "#1a1a2e",
        color: "#fff",
        borderRadius: "6px",
        fontWeight: "bold",
        textAlign: "center",
        minWidth: "80px",
        cursor: "pointer",
        fontSize: "14px",
      }}
    >
      Submit
    </button>
  </div>
);
};
