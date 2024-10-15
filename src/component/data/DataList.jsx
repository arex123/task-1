import React, { useContext, useEffect, useState } from "react";
import StudentContext from "../../store/student-context";

const DataList = () => {
  const ctx = useContext(StudentContext);
    console.log("ctx.list ",ctx.list)

  return (
    <div>
      <h2 className="text-3xl font-bold m-5">All Students</h2>
      <div>
        {ctx.list.map((stu) => {
            {console.log("13")}
          <div>
            <p>{stu.name}</p>
            <p>{stu.phone}</p>
            <p>{stu.address}</p>
          </div>;
        })}
      </div>
    </div>
  );
};

export default DataList;
