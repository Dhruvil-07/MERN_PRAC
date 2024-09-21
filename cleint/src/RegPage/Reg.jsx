import React from 'react'
import RegNavBar from './RegNavBar'
import { Route, Router, Routes } from 'react-router-dom'
import AddData from './AddData'
import DispData from './Disp'

export default function Reg() {
  return (
    <>
      <RegNavBar/>  

      <Routes>
        <Route path="/" element={<AddData val={null}/>} />
        <Route path="/dispdata" element={<DispData/>} />
      </Routes>
    </>
  )
}
