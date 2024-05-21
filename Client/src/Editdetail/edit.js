import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function Edit()
{

        let {sno}=useParams()
        const[name,setname]=useState('')
        const[email,setemail]=useState('')
        const[phone,setphone]=useState('')
        const[enrollnumber,setenrollnumber]=useState('')
        const[dateofadmission,setdateofadmission]=useState('')

    useEffect(()=>{
        fetch("http://localhost:9597/single/"+sno)
        .then(res=>res.json())
        .then((out)=>{
          setname(out[0].name)
          setemail(out[0].email)
          setphone(out[0].phone)
          setenrollnumber(out[0].enrollnumber)
          setdateofadmission(out[0].dateofadmission.split('T')[0])

        })
    },[])
    
 

   function handleupdate(event){
        event.preventDefault()

    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let enrollnumber = document.getElementById('enrollnumber').value
    let dateofadmission = document.getElementById('dateofadmission').value
       
    if (name === "") {
        alert("Name is Missing, please enter");
      } else if (email === "") {
        alert("You have not entered email id");
      } else if (phone === "") {
        alert("Missed your phone number");
      } else if (enrollnumber === "") {
        alert("Kindly Enter enrollNumber");
      } else if (dateofadmission === "") {
        alert("Date of admission is empty, kindly fill");
      } else {
        let key = {
          name: name,
          email: email,
          phone: phone,
          enrollnumber: enrollnumber,
          dateofadmission: dateofadmission
        };
  
        axios.put("http://localhost:9597/update/"+sno, key)
          .then((res) => {
            if (res.data.status === "error") {
              window.location.reload();
  
            } else if (res.data.status === "success") {
              alert("Successfully updated");
              window.location.href='/admin'
  
            }
          });
      } }

    return(
        <>
    <div className="text-center p-5 bg-secondary vh-100">
         <div className="bg-dark text-white mt-5">
            {
                <form onSubmit={handleupdate}>
                  <div className="d-flex justify-content-center">  
                      <table> 
                    <tr>   
                      <th>  <label className="p-3">name </label>  </th>
                        <td>    <input type='text' id="name" value={name} onChange={(update)=>setname(update.target.value)}  className="p-3"/> <br></br> </td>
                    </tr> 
                    <tr>  
                    <th> <label className="p-3">email</label> </th>
                   <td>  <input type='text' id="email" value={email} onChange={(update)=>setemail(update.target.value)}  className="p-3"/> <br></br> </td>
                    </tr>
                    <tr> 
                   <th>  <label className="p-3"> Phone</label> </th>
                   <td>   <input type='text' id="phone" value={phone} onChange={(update)=>setphone(update.target.value)}  className="p-3" /><br></br> </td>
                    </tr>
                    <tr>  
                     <th>    <label className="p-3"> EnrollNumber </label> </th>
                     <td>  <input type='text' id="enrollnumber" value={enrollnumber} onChange={(update)=>setenrollnumber(update.target.value)}  className="p-3" /><br></br> </td>
                    </tr>
                    <tr>   
                    <th>   <label className="p-3"> dateofadmission</label>  </th>
                    <td>   <input type='text' id="dateofadmission" value={dateofadmission} onChange={(update)=>setdateofadmission(update.target.value)}  className="p-3" /><br></br> </td>
                   
                    </tr>
                    <tr> 
                    <td> <input type='submit' value="update" className="bg-success"/> </td>
                    </tr>
                    </table>
                    </div>
                </form>
                }
       

        </div>
    </div>
        </>
    );
}


