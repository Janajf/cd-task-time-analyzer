import * as ExcelJS from "exceljs";
import { saveAs } from "file-saver";

const createWorkSheet = (studentData) => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Task Time Expectations vs Task Time Actuals Comparison report");
    worksheet.views = [{}];
    worksheet.properties.defaultColWidth = 15;
    worksheet.properties.defaultRowHeight = 20;

    const columnOne = worksheet.getColumn(1);
    columnOne.header = "Name";
    columnOne.key = "name";

    const columnTwo = worksheet.getColumn(2);
    columnTwo.header = "Work Hours";
    columnTwo.key = "hours";

    const columnThree = worksheet.getColumn(3);
    columnThree.header = "Expected Assignment";
    columnThree.key = "expected";

    const columnFour = worksheet.getColumn(4);
    columnFour.header = "Expected Level";
    columnFour.key = "expected level";

    const columnFive = worksheet.getColumn(5);
    columnFive.header = "Assignment";
    columnFive.key = "assignment";

    const columnSix = worksheet.getColumn(6);
    columnSix.header = "Level";
    columnSix.key = "level";

    const columnSeven = worksheet.getColumn(7);
    columnSeven.header = "Status";
    columnSeven.key = "status";

    const columnEight = worksheet.getColumn(8)
    columnEight.header = "Manager";
    columnEight.key = "manager";

    for(const student in studentData){
      const value = studentData[student];
      const {assignment, manager, workHours, expectedAssignment,level, expectedLevel} = value;
      if(assignment == null || student == "Student A Test"|| student == "Student B Test"|| student == "Student C Test"){
        continue;
      }
      worksheet.addRow([student, workHours, expectedAssignment,expectedLevel, assignment,level, (level-expectedLevel).toFixed(2), manager]);
      const currCell = worksheet.getCell(worksheet.rowCount, 7);

      if(parseFloat(currCell.value) >=0){
        currCell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '8000b050'}
        };
      }
      if(parseFloat(currCell.value) < 0 && parseFloat(currCell.value) >= -0.05){
        currCell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '80ffc000'}
        }; 
      }

    //   if(parseFloat(currCell.value) < -0.05){
    //     currCell.fill = {
    //       type: 'pattern',
    //       pattern: 'solid',
    //       fgColor: { argb: '80ff0000'}
    //     }; 
    // }
  }
      

    workbook.xlsx.writeBuffer().then((data) => {
      const blob = new Blob([data]);
      saveAs(blob, "Task Time Expectations vs Task Time Actuals Comparison report.xlsx");
    });
  }

  export default createWorkSheet;
