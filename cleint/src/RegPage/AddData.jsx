import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AddData() {

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [address,setAddress] = useState('');
  const [gender,setGender] = useState();
  const [hobby,setHobby] = useState([]);
  const [dob,setDob] = useState();
  const [qul,setQly] = useState('Bechlore');
  const [id,setId] = useState();
  const [edit,setEdit] = useState(false);

  //useeffect
  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem('editdata'));

    if(data)
    {
      setName(data.name);
      setAddress(data.address);
      setEmail(data.email);
      setDob(data.dob);
      setHobby(data.hobby);
      setGender(data.gender);
      setQly(data.qualification);
      setId(data._id)
      setEdit(true);
    }

    localStorage.removeItem('editdata');
  },[]);


  //function for hooby manage
  function manage_hobby(e)
  {
    if(e.target.checked)
    {
       setHobby([...hobby,e.target.value]);
    }
    else
    {
      setHobby(hobby.filter((ele)=>{
        return ele != e.target.value;
      }));
    }
  }

  //post data to database
  async function addUser()
  {
    try
    {
      const response = await axios.post("http://localhost:8000/ex1/insert",
        {
          name : name,
          email : email,
          address : address,
          gender : gender,
          hobby : hobby,
          dob : dob,
          qualification : qul,
        }
      );

      alert(response.data.msg);
    }
    catch(error)
    {
      alert(error.response.data.msg);
    }
  }


  //update user
  async function updateuser(id)
  {
    try
    {
      const response = await axios.put(`http://localhost:8000/ex1/update/${id}`,
        {
          name : name,
          email : email,
          address : address,
          gender : gender,
          hobby : hobby,
          dob : dob,
          qualification : qul,
        }
      );

      alert(response.data.msg);
      localStorage.removeItem('editdata');
    }
    catch(error)
    {
      alert(error.response.data.msg);
    } 
  }

  return (
    <div className='ex1Main'>

      <div className='w-50'>

        <div className='w-100 text-center m-3'>
          <h3>Registration Form</h3>
        </div>

        {/* name field */}
        <div className='w-100 p-2'>
          <label htmlFor="">Name : </label>
          <input type="text" placeholder='Enter Name' className='w-100 mt-1 p-1' value={name}
          onChange={(e)=>{setName(e.target.value)}}
          />
        </div>

        {/* email feild */}
        <div className='w-100 p-2'>
          <label htmlFor="">Email : </label>
          <input type="text" placeholder='Enter Email' className='w-100 mt-1 p-1' value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
          />
        </div>

        {/* address fiels */}
        <div className='w-100 p-2'>
          <label htmlFor="">Address : </label>
          <textarea cols="5" rows="3" className='w-100 mt-1 p-1' value={address}
          onChange={(e)=>{setAddress(e.target.value)}}
          ></textarea>
        </div>

        {/* DOB -> date */}
        <div className='w-50 p-2'>
          <label htmlFor="">DOB : </label>
          <input type="date" name="" id="" className='w-100 mt-1 p-1' value={dob}
          onChange={(e)=>{setDob(e.target.value)}}
          />
        </div>

        {/* course fiels -> dropdown*/}
        <div className='w-50 p-2'>
          <label htmlFor="">Qualification : </label>
          <select className='w-100 mt-1 p-1'
          onChange={(e)=>{setQly(e.target.value)}}
          >
            <option value="Bechlore" selected={qul === "Bechlore"}>Bechlore</option>
            <option value="Masters" selected={qul === "Masters"}>Masters</option>
            <option value="P.H.D." selected={qul === "P.H.D."}>P.H.D.</option>
          </select>
        </div>

        {/* gender -> radio button*/}
        <div className='w-100 p-2'>
          <label htmlFor="" className='w-100 mb-1'>Gender: </label>
          <input type="radio" name='Gender' value={"male"} className='me-2'
          checked={gender === "male"}
          onChange={(e)=>{setGender(e.target.value)}}
          />
          <label htmlFor="" className='me-3'>Male</label>
          <input type="radio" name='Gender' value={"female"} className='me-2' 
          checked={gender === "female"}
          onChange={(e)=>{setGender(e.target.value)}}
          />
          <label htmlFor="">Female</label>
        </div>

        {/* documnet you have -> checkbox */}
        <div className='w-100 p-2'>
          <label htmlFor="" className='w-100 mb-1'>Documents : </label>
          <input type="checkbox" value={"sport"} className='me-2' 
          checked = {hobby.includes("sport")}
          onChange={(e)=>{manage_hobby(e)}}
          />
          <label htmlFor="" className='me-3'>Sport</label>

          <input type="checkbox" value={"reading"} className='me-2'
          checked = {hobby.includes("reading")}
          onChange={(e)=>{manage_hobby(e)}}
          />
          <label htmlFor="" className='me-3'>Reading</label>

          <input type="checkbox" value={"music"} className='me-2' 
          checked = {hobby.includes("music")}
          onChange={(e)=>{manage_hobby(e)}}
          />
          <label htmlFor="" className='me-3'>Music</label>
        </div>

        {/* submit button */}
        <div className='w-100 p-2 text-center mt-3'>
          <button type="button" class="btn btn-primary"
          onClick={()=>{
            edit ? updateuser(id) : addUser()
          }}
          >Primary</button>
        </div>


      </div>

    </div>
  )
}
