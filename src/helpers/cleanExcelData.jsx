  import capitalizeFirstLetter from "./capitalizeFirstLetter";
  const cleanExcelData = (excelData,studentMap,setStudentData) => {
    console.log(excelData);
    excelData.forEach((row, index)=>{
      
      let firstName = capitalizeFirstLetter(row['First name']);
      let lastName = capitalizeFirstLetter(row['Last name']);
      let fullName = `${firstName} ${lastName}`;
      let manager = row['Direct manager'];
      let workHours = row['Total work hours'];

      if(workHours != null){
        let parts = workHours.split(':');
        let totalMinutes = parseInt(parts[0]) * 60 + parseInt(parts[1]);
        let totalHours = totalMinutes/60;
        workHours = totalHours.toFixed(2);
      }

      
    
  
      //console.log(`Name: ${fullName}, Work Hours: ${workHours}, Manager: ${manager}`);

      if(workHours != null && manager !=null && fullName != manager){

        if(fullName != "" && !studentMap[fullName]){
          studentMap[fullName]={};
      } 

      studentMap[fullName].workHours= parseInt(workHours);
      studentMap[fullName].manager= manager;

      }

      
    })
    setStudentData(studentMap);
  };

  export default cleanExcelData;