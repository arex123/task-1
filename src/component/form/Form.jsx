import React, { useContext, useState } from "react";
import ReactDOM from 'react-dom'
import StudentContext from "../../store/student-context";
const BackDrop = (props) => {
  return (
    <div
      onClick={props.onClose}
      className="fixed top-0 left-0 w-full h-lvh z-10 bg-black bg-opacity-75"
    ></div>
  );
};

const ModalOverlay = (props) => {
    const [name,setName] = useState("")
    const [phone,setPhone] = useState("")
    const [address,setAddress] = useState("")

    const ctx = useContext(StudentContext)

    const handleFormSubmittion = (e)=>{
        e.preventDefault()
        console.log("ctx" ,ctx)    
        let newStudent = {
            id:phone+Math.random()+phone,
            name:name,
            phone:phone,
            address:address
        }
        ctx.addStudent(newStudent)
        props.onClose()
    }
  
  return (
    <form onSubmit={handleFormSubmittion} className="fixed p-5 top-[30vh] bg-white left-1/2 -translate-x-1/2 rounded-xl z-[100] w-[30%] overflow-hidden">
      <div className="space-y-2 mb-5">
        
        <p className="font-bold">Enter Details</p>
        <div className="flex justify-between">
            <label>Name:</label>
            <input type="text" className="border-2" value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className="flex justify-between">
            <label>Phone:</label>
            <input type="tel" className="border-2" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
        </div>
        <div className="flex justify-between">
            <label>Address:</label>
            <input type="text" className="border-2" value={address} onChange={(e)=>setAddress(e.target.value)}/>
        </div>
        
      </div>
      <div className="flex flex-col items-end">
        <div className="space-x-4">
          <button
            onClick={props.onClose}
            className="bg-white p-2 border border-red-500 mt-2 px-4 rounded-xl text-red-500"
          >
            Close
          </button>
          <button type="submit"  className="bg-red-500 p-2 mt-2 px-4 rounded-xl text-white">
            Order
          </button>
        </div>
      </div>
    </form>
  );
};

const Form = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onClose={props.onClose} />,
        document.getElementById("bg-overlay")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose} />,
        document.getElementById("modal-overlay")
      )}
    </>
  );
};

export default Form;
