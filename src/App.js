
import { useState } from "react";
import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";
import Alert from "./components/Alert";

function App() {
  const [alertData, setAlertData] = useState(null);

  return (
    <div style={{ padding: "16px" }}>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton setAlertData={setAlertData} />

      {alertData && (
        <Alert
          type={alertData.type}
          message={alertData.message}
          onClose={() => setAlertData(null)}
        />
      )}
    </div>
  );
}

export default App;
