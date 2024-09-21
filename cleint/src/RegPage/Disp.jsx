import React, { useEffect, useState } from 'react'
import axios, { Axios } from 'axios';
import { json, NavLink } from 'react-router-dom'

export default function Disp() {

  const [userdata, setUserdata] = useState([]);

  //useeffect
  useEffect(() => {
    getdata();
  }, []);


  //function for get data
  async function getdata() {
    try {
      const resposne = await axios.get("http://localhost:8000/ex1/alluser");
      setUserdata(resposne.data.data);
      console.log(userdata.length);
    }
    catch (error) {
      alert(error.resposne.data.msg);
    }
  }

  //function for delete data
  async function deleteData(id)
  {
    try
    {
      const response = await axios.delete(`http://localhost:8000/ex1/delete/${id}`);
      console.log(response);
      alert(response.data.msg);
      getdata();
    }
    catch(error)
    {
      alert(error.resposne.data.msg);
    }
  }

  return (
    <>

      <div className="container my-4 mb-5">
        <div className="row">

          <div className="col-4 d-flex justify-content-center ms-auto me-auto">

            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>

          </div>
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">DOB</th>
            <th scope="col">Qualification</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            userdata.map((ele, index) => {
              return <tr>
                <th scope="row">{index + 1}</th>
                <td>{ele.name}</td>
                <td>{ele.email}</td>
                <td>{ele.gender}</td>
                <td>{ele.dob}</td>
                <td>{ele.qualification}</td>
                <td>
                  <div className='d-flex justify-content-start'>

                    <button type="button" className="btn btn-warning"
                    onClick={()=>{
                      localStorage.setItem('editdata' , JSON.stringify(userdata[index]))
                    }}
                    >
                      <NavLink className="nav-link active" to='/'> Edit </NavLink>
                    </button>


                    <button type="button" className="btn btn-danger ms-4"
                    onClick={()=>{deleteData(userdata[index]._id)}}
                    >Delete</button>

                  </div>
                </td>
              </tr>

            })
          }

        </tbody>
      </table>
    </>
  )
}
