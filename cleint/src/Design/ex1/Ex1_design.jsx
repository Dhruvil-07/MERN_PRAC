import React from 'react'

export default function Ex1_design() {
  return (
     <div className='ex1Main'>
      
      <div className='w-50'>
         
        <div className='w-100 text-center m-3'>
            <h3>Registration Form</h3>
        </div>

          {/* name field */}
         <div className='w-100 p-2'>
            <label htmlFor="">Name : </label>
            <input type="text" placeholder='Enter Name' className='w-100 mt-1 p-1'/>
         </div>

         {/* email feild */}
         <div className='w-100 p-2'>
            <label htmlFor="">Email : </label>
            <input type="text" placeholder='Enter Email' className='w-100 mt-1 p-1'/>
         </div>

         {/* address fiels */}
         <div className='w-100 p-2'>
            <label htmlFor="">Address : </label>
            <textarea cols="5" rows="3" className='w-100 mt-1 p-1'></textarea>
         </div>

         {/* DOB -> date */}
         <div className='w-50 p-2'>
            <label htmlFor="">DOB : </label>
            <input type="date" name="" id="" className='w-100 mt-1 p-1'/>
         </div>

        {/* course fiels -> dropdown*/}
        <div className='w-50 p-2'>
            <label htmlFor="">Course : </label>
            <select className='w-100 mt-1 p-1'>
                <option value="BCA">BCA</option>
                <option value="BBA">BBA</option>
                <option value="B.COM">B.com</option>
            </select>
         </div>

         {/* gender -> radio button*/}
         <div className='w-100 p-2'>
            <label htmlFor="" className='w-100 mb-1'>Gender: </label>
              <input type="radio" name='Gender'value={"male"} className='me-2'/>
              <label htmlFor="" className='me-3'>Male</label>
              <input type="radio" name='Gender' value={"female"} className='me-2'/>
              <label htmlFor="">Female</label>
         </div>

        {/* documnet you have -> checkbox */}
        <div className='w-100 p-2'>
            <label htmlFor="" className='w-100 mb-1'>Documents : </label>
              <input type="checkbox" value={"Adhar-Card"} className='me-2'/>
              <label htmlFor="" className='me-3'>Adhar-Card</label>
              
              <input type="checkbox" value={"Pan-Card"} className='me-2'/>
              <label htmlFor="" className='me-3'>Pan-Card</label>

              <input type="checkbox" value={"Driving-Licence"} className='me-2'/>
              <label htmlFor="" className='me-3'>Driving-Licence</label>
         </div>

         {/* submit button */}
         <div className='w-100 p-2 text-center mt-3'>
           <button type="button" class="btn btn-primary">Primary</button>
         </div>


      </div>

    </div>
  )
}
