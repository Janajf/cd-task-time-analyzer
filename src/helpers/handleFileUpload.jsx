import * as XLSX from "xlsx";
import addExpectedAssignment from "./addExpectedAssignment";
import cleanExcelData from "./cleanExcelData";
import createWorkSheet from "./createWorkSheet";
import assignmentMap from "../data/assignmentData";

const handleFileUpload=(event, setExcelData, setStudentData, studentData)=>{
    let fileTypes = ['application/vnd.ms-excel','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','text/csv'];
    let selectedFile = event.target.files[0];
    if(selectedFile != null){
      if(selectedFile != null &&fileTypes.includes(selectedFile.type)){
        const reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload=(event)=>{
          const data = new Uint8Array(event.target.result);
          const workbook = XLSX.read(data, { type: 'array' });
          const worksheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[worksheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet);
          setExcelData(jsonData);
          cleanExcelData(jsonData, studentData, setStudentData);
          addExpectedAssignment(assignmentMap,studentData,setStudentData);
          createWorkSheet(studentData);

        }
      }

  }}

  export default handleFileUpload; 