import React, { useState } from "react";
import Form from "../form/Form";

const Heading = () => {
    const [openForm,setOpenForm] = useState(false)
    const handleOpenForm = ()=>{
        setOpenForm(!openForm)
    }

  return (
    <div className="flex flex-col items-center justify-center space-y-2 mt-5">
      <h2 className="font-bold text-3xl">Student Manager</h2>
      <p>
        All Students: <span>2</span>
      </p>
      <button onClick={handleOpenForm} className="bg-gray-300 p-2 rounded-lg text-sm">
        ADD NEW STUDENT
      </button>
      {openForm && <Form onClose={handleOpenForm}/>}
    </div>
  );
};

export default Heading;
