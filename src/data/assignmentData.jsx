{/* 
  This map represents a set of assignments for learning HTML, CSS, JavaScript, React, 
  and Java, organized into different levels of difficulty.
  Each assignment is keyed by its title and contains the following properties:

  expectedHours: Total estimated number of hours the learner should have worked up to that assignment 
  based on the total curriculum.
    - time: Estimated number of hours required to complete the assignment
    - level: Represents the difficulty level of the assignment.
           Level 1: HTML and CSS
           Level 2: JavaScript
           Level 3: React
           Level 4: Java
    - order: Sequence order of the assignment in the learning path. 
  */}
  const assignmentMap = {
    "introduction to html": {expectedHours: 90, time:3, level:1.00, order: 1},
    "urls and links": {expectedHours: 93,time:8, level:1.01, order: 2},
    "the codio editor": {expectedHours: 101, time:3, level:1.02, order: 3},
    "css": {expectedHours: 103, time:2, level:1.03, order: 4},
    "chrome developer tools": {expectedHours: 110, time:7, level:1.04, order: 5},
    "classes and ids": {expectedHours: 112, time:5, level:1.05,order: 6},
    "margins, padding and the box model": {expectedHours: 117, time:3, level:1.06, order: 7},
    "floats and layouts": {expectedHours: 120,time:3, level:1.07, order: 8},
    "html crash course": {expectedHours: 123,time:1, level:1.08, order: 9},
    "flex playground": {expectedHours: 124, time:3, level:1.09, order: 10},
    "introduction": {expectedHours: 126, time:2, level:1.10,order: 11},
    "file system commands": {expectedHours: 128,time:2, level:1.11, order: 12},
    "the file system": {expectedHours: 130, time:3, level:1.12,order: 13},
    "searching files and file contents": {expectedHours: 133,time:4, level:1.13, order: 14},
    "is it cake pt 01 - blog site": {expectedHours: 137,time:15, level:1.14, order: 15},
    "js javascript crash course": {expectedHours: 153,time:2, level:2.00, order: 16},
    "js challenge level 01a": {expectedHours: 155, time:3, level:2.01,order: 17},
    "js challenge level 01b": {expectedHours: 158,time:5, level:2.02, order: 18},
    "js challenge pt 1": {expectedHours: 163, time:2, level:2.03,order: 19},
    "js challenge pt 2": {expectedHours: 165, time:1, level:2.04,order: 20},
    "core js data types": {expectedHours: 166,time:4, level:2.05, order: 21},
    "js challenge pt 3": {expectedHours: 170, time:4, level:2.06,order: 22},
    "javascript assessment 01": {expectedHours: 173,time:3, level:2.07, order: 23},
    "country guide app": {expectedHours: 188,time:15, level:2.08, order: 24},
    "week 4 - problem set 01": {expectedHours: 206, time:2, level:3.00,order: 25},
    "counter": {expectedHours: 208, time:2, level:3.01,order: 26},
    "profilecard": {expectedHours: 212,time:6, level:3.02, order: 27},
    "react props lab": {expectedHours: 218,time:6, level:3.03, order: 28},
    "week 04 problem set 02": {expectedHours: 220,time:2, level:3.04, order: 29},
    "react exploration lab": {expectedHours: 222,time:9, level:3.05, order: 30},
    "react beats lab: making music with code": {expectedHours: 231,time:9, level:3.06, order: 31},
    "w04 challenege longest odd": {expectedHours: 240,time:1, level:3.07, order: 32},
    "music-artist-list-app": {expectedHours: 241,time:9, level:3.08, order: 33},
    "mega dashboard app lab":{expectedHours: 250,time:15, level:3.09, order: 34},
    "java refresher course": {expectedHours: 265, time:1, level:4.00, order: 35},
    "part 01 assessment": {expectedHours:268,time:1, level:4.01, order: 36},
    "part 02 assessment chapters 03 - 06 - coding": {expectedHours: 269,time:1, level:4.02, order: 37},
    "algo-challenge-01": {expectedHours: 270,time:1, level:4.03, order: 38},
    "spring research": {expectedHours: 271,time:3, level:4.04, order: 39},
    "my first api": {expectedHours: 274,time:6, level:4.05, order: 40},
    "algo-challenge-02": {expectedHours: 280, time:1, level:4.06,order: 41},
    "full stack spring part a": {expectedHours: 281,time:15, level:4.07, order: 42},
    "full stack spring part b": {expectedHours: 296,time:15, level:4.08, order: 43},
    "algo-challenge-count-smiles": {expectedHours: 311,time:1, level:4.09, order: 44}
  };
export default assignmentMap;