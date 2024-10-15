import React from 'react'

const StudentContext = React.createContext({
    list:[],
    addStudent:()=>{},
    removeStudent:()=>{},
    updateStudent:()=>{}
})

export default StudentContext