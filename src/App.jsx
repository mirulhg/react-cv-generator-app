import { ToastContainer } from "react-toastify";
import "./App.css";

import Input from "./components/InputCv.jsx";
import HasilPdf from "./components/hasilPdf.jsx";

function App() {
  return (
    <>
      <Input />
      <HasilPdf />
      <ToastContainer />
    </>
  );
}

export default App;
