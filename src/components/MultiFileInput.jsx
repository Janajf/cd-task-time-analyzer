import React from "react";
import handleMultiFileUpload from "../helpers/handleMultiFileUpload";

const MultiFileInput = ({ setWorkbook,setStudentData }) => {
  return (
    <>
      <input
        type="file"
        multiple
        onChange={(event) => handleMultiFileUpload(event, setWorkbook, setStudentData)}
      />
    </>
  );
};

export default MultiFileInput;
