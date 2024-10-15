import React, { useState } from "react";
import StudentContext from "./student-context";

const StudentProvider = (props) => {
  const [students, setStudents] = useState([]);
  const addStudentToListHandler = (item) => {
    setStudents([...students, item]);
  };
  const removeStudentFromListHandler = (item) => {
    setStudents([...students, item]);
  };

  const updateStudentHandler = (id) => {};

  const cartContext = {
    list: students,
    addStudent: addStudentToListHandler,
    removeStudent: removeStudentFromListHandler,
    updateStudent: updateStudentHandler,
  };
  
  return (
    <StudentContext.Provider value={cartContext}>
      {props.children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;
