import { Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const UploadFile = () => {

  const [file, setFile] = useState<any>();
  const [fileName, setFileName] = useState("");
 
  const saveFile = (e: any) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };
 
  const uploadFile = async (e: any) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);
    try {
      const res = await axios.post(
        "http://localhost:3000/upload",
        formData
      );
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div>
      <input type="file" onChange={saveFile} />
      <button title="uploadBtn" onClick={uploadFile}>Upload</button>
    </div>
  );
}

export default UploadFile;