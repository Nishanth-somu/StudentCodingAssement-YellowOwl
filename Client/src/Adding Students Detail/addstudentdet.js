import React from 'react';
import '../MenuBar/menu.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Alert } from 'bootstrap';

export function AddStudentDet() {
  function addingvalue(event) {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const enrollnumber = event.target.enrollnumber.value;
    const dateofadmission = event.target.dateofadmission.value;
    

     //Using Condition / Regular Expression
    const nameRegex = /^[a-zA-Z]+$/;
    const phoneRegex = /^\d{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const enrollNumberRegex = /^[a-zA-Z0-9]+$/;

   if(name==="") {
     alert("Name is Empty");
   } else if (!nameRegex.test(name)) {
      alert("Name is Not Valid ! Please Enter Correctly");
    } else if(email===""){
       alert("Email id is Blank so , Please It");
    } else if (!emailRegex.test(email)) {
      alert("You EmailId id Invalid");
    } else if(phone===""){
       alert("Your Phone Number is Missing");
    }else if (!phoneRegex.test(phone)&&phone.length !== 10) {
      alert("Phone number is Invalid Enter 10 your 10 Digit Phone Number");
    } else if(enrollnumber===""){
       alert("Your EnrollNumber is Empty")
    } else if (!enrollNumberRegex.test(enrollnumber)) {
      alert("Kindly Enter enrollNumber");
    } else if (dateofadmission=="") {
      alert("Date of admission is empty, kindly fill");
    } else {
      const key = {
        name: name,
        email: email,
        phone: phone,
        enrollnumber: enrollnumber,
        dateofadmission: dateofadmission
      };

      axios.post("http://localhost:9597/insert", key)
        .then((res) => {
          if (res.data.status === "error") {
            window.location.reload();

          } else if (res.data.status === "success") {
            alert("Successfully Added");
            window.location.href='/admin'

          }
        });
    }
  }

  return (
    <>
      <div className="student-txt"> 
        <h1>Students</h1>
      </div>
    
      <form onSubmit={addingvalue}>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <td><input type="text" className="mt-3" id="name" name="name" /></td>
            </tr>
            <tr>
              <th>Email</th>
              <td><input type="text" className="mt-3" id="email" name="email" /></td>
            </tr>
            <tr>
              <th>Phone</th>
              <td><input type="number" className="mt-3" id="phone" name="phone" /></td>
            </tr>
            <tr>
              <th>Enroll Number</th>
              <td><input type="number" className="mt-3" id="enrollnumber" name="enrollnumber" /></td>
            </tr>
            <tr>
              <th>Date Of Admission</th>
              <td><input type="text" className="mt-3" id="dateofadmission" name="doa" placeholder='YYY-MM-DD' /></td>
            </tr>
            <tr>
              <td><input type="submit" className="btn btn-success text-center" /></td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
}
