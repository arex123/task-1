import React, { useState } from "react";
import StudentContext from "./student-context";

const StudentProvider = (props) => {
  const [students, setStudents] = useState([]);
  const addStudentToListHandler = (item) => {
    setStudents((prev) => {
      let existingStudent = prev.find((stu) => stu.id == item.id);
      console.log("existing student: ", existingStudent);
      if (existingStudent) {
        return prev.map((itm) => (itm.id == item.id ? { ...item } : itm));
      } else {
        return [...prev,item];
      }
    });
};
// setStudents([...students, item]);
  const removeStudentFromListHandler = (id) => {
    setStudents((prev) => {
      return prev.filter((itm) => {
        if (itm.id != id) {
          return itm;
        }
      });
    });
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
