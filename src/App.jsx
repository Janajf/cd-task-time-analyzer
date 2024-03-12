import { useState } from 'react';
import assignmentMap from './data/assignmentData';
import MultiFileInput from './components/MultiFileInput';
import FileInput from './components/FileInput';

function App() {
  const [workbook, setWorkbook] = useState();
  const [excelData, setExcelData] = useState([]);
  const [studentData, setStudentData] = useState({});

  return (
    <>
    <h1>Task-Time Tool</h1>
    <h2>Please Upload Codio csv files</h2>
    <MultiFileInput setWorkbook={setWorkbook} setStudentData={setStudentData}/>

    <h2>Please Upload timesheet excel file</h2>
    <FileInput setStudentData={setStudentData} setExcelData={setExcelData} studentData={studentData}/>
      
    </>
  )
}

export default App;