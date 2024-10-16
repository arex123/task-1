import React, { useContext, useState } from "react";
import StudentContext from "../../store/student-context";
import Form from "../form/Form";

const StudentItem = ({ student }) => {
  console.log("stuednet ", student);
  const ctx = useContext(StudentContext);
  const [editing, setEditing] = useState(false);
  const handleEdit = () => {
    setEditing(true);
  };
  const handleDelete = () => {
    ctx.removeStudent(student.id);
  };
  const handleOpenForm = ()=>{
    setEditing(!editing)
}
  return (
    <>
      <div className="flex w-[30%] justify-between items-center">
        <div className="flex space-x-2 m-5">
          <p>{student.name}</p>
          <p>{student.phone}</p>
          <p>{student.address}</p>
        </div>
        <div className="space-x-4">
          <button onClick={handleDelete} className="bg-red-200 p-2">
            Delete
          </button>
          <button onClick={handleEdit} className="bg-green-200 p-2">
            Edit
          </button>
        </div>
      </div>
      {
        editing && <Form onClose={handleOpenForm} student={student}/>
      }
    </>
  );
};

export default StudentItem;
