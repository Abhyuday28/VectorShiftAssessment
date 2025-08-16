

// import { PipelineToolbar } from "./toolbar";
// import { PipelineUI } from "./ui";
// import { SubmitButton } from "./submit";

// function App() {
//   return (
//     <div style={{ padding: "16px" }}>
//       <PipelineToolbar />
//       <PipelineUI />
//       <SubmitButton />
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";
// import { PipelineToolbar } from "./toolbar";
// import { PipelineUI } from "./ui";
// import { SubmitButton } from "./submit";
// import Alert from "./components/Alert";

// function App() {
//   const [showAlert, setShowAlert] = useState(false);

//   const handleSubmit = () => {
//     // do your actual submit logic here...
//     setShowAlert(true);
//   };

//   return (
//     <div style={{ padding: "16px" }}>
//       <PipelineToolbar />
//       <PipelineUI />

//       {/* Show alert only when submit clicked */}
//       {showAlert && (
//         <Alert
//           type="success"
//           message="Pipeline submitted successfully!"
//           onClose={() => setShowAlert(false)}
//         />
//       )}

//       <SubmitButton onClick={handleSubmit} />
//     </div>
//   );
// }

// export default App;


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
