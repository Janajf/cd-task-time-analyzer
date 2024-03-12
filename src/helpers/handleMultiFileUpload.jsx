import Papa from "papaparse";
import assignmentMap from '../data/assignmentData';
import capitalizeFirstLetter from "./capitalizeFirstLetter";
import addLevel from "./addLevel";


const handleMultiFileUpload = (event, setWorkbook, setStudentData) => {
    const studentMap = {};
    for(let i = 0; i < event.target.files.length; i++){
      if (event.target.files) {
        const file = event.target.files[i];
        Papa.parse(file, {
          complete(results) {
            results.data.forEach((row,index)=>{
              if(index != 0 && row[1] != null){

               let assignment;
               let studentFirstName = capitalizeFirstLetter(row[1]);
               let studentLastName = capitalizeFirstLetter(row[2]);
                let studentName = `${studentFirstName} ${studentLastName}`;
                if(row[6] != null){
                  assignment = row[6].toLowerCase();
                }
                
                let timeSpent = row[9];
  
                if(studentName != "" && !studentMap[studentName]){
                  studentMap[studentName]={};
              } 
              if(assignment != null && !assignmentMap[assignment]){
                assignmentMap[assignment]={};
              }
              
              if(timeSpent !=null && timeSpent > 0 && (!studentMap[studentName].order || studentMap[studentName].order < assignmentMap[assignment].order)){
                studentMap[studentName].order=assignmentMap[assignment].order;
                studentMap[studentName].assignment=assignment; 
                studentMap[studentName].level = assignmentMap[assignment].level;
              }
    
            }})
          },
        });
      }
    }
    addLevel(studentMap,assignmentMap);
    setStudentData(studentMap);
  };

  export default handleMultiFileUpload;