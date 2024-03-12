const addLevel = (studentData, assignmentMap) =>{
    for(const student in studentData){
      const assignment = studentData[student].assignment;
      studentData[student].level = assignmentMap[assignment].level;
    }
  }

export default addLevel;