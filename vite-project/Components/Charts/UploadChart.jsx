import React, { useState } from "react";
import axios from "axios";

const UploadChart = () => {
  const [file, setFile] = useState();

  const upload = () => {
    const formData = new FormData();
    formData.append("file", file);
    axios.post("http://localhost:5000/api/uploads", formData);
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={upload}> Upload </button>
    </div>
  );
};

export default UploadChart;
