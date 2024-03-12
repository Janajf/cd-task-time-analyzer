import React from "react";
import handleFileUpload from "../helpers/handleFileUpload";

const FileInput = ({setExcelData, setStudentData, studentData}) => {
  return (
    <>
      <input 
      type="file" 
      required
      onChange={(event) => handleFileUpload(event, setExcelData, setStudentData, studentData)} 
      />
    </>
  );
};

export default FileInput;
