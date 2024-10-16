import React, { useContext, useEffect, useState } from "react";
import StudentContext from "../../store/student-context";
import StudentItem from "./StudentItem";

const DataList = () => {
    const ctx = useContext(StudentContext);
    console.log("ctx.list ",ctx.list)

  return (
    <div>
      <h2 className="text-3xl font-bold m-5">All Students</h2>
      <div>
        {ctx.list.length==0 && <p className="m-5 font-extralight">No Student is present</p>}
        {ctx.list.map((item,index)=>{
            return (<StudentItem key={index+item.id} student={item} />)
        })}
      </div>
    </div>
  );
};

export default DataList;
