import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../Components/HomePage/HomePage";
import NavBar from "../Components/HomePage/NavBar";
import Baseball from "../Components/SportsPages/Baseball";
import UploadChart from "../Components/Charts/UploadChart";

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/baseball" element={<Baseball/>}/>
          <Route path="/uploads" element={<UploadChart/>}/>
          <Route path="/" element={<HomePage/>}/>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
