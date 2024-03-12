const addExpectedAssignment=(assignmentMap, studentData, setStudentData)=>{
    const assignmentKeys = Object.keys(assignmentMap);
    assignmentKeys.sort((a,b)=>{
      return assignmentMap[b].expectedHours - assignmentMap[a].expectedHours;
    })

    for(const student in studentData){
      const hours = studentData[student].workHours;
      let position = 0;
      let expectedHours = assignmentMap[assignmentKeys[position]].expectedHours;

      while(expectedHours > hours && position < assignmentKeys.length-1){
        position++;
        expectedHours = assignmentMap[assignmentKeys[position]].expectedHours;
      }

      studentData[student].expectedAssignment = assignmentKeys[position];
      studentData[student].expectedLevel = assignmentMap[assignmentKeys[position]].level;
    }

    setStudentData(studentData);
  }

  export default addExpectedAssignment;