import React from "react";

export function Loginpage(){

   function handllogin(event){
    event.preventDefault()
     
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username== ""){
        alert("Please enter UserName");
    } else if(password == ""){
        alert("Please enter Password")
    } else if(username =="admin" && password == "admin"){

        alert("Login Sucessfully");
        window.location.href = '/admin'
    } else {
        alert("Check User Name or Password");
    }

   }

    return(
        <>
        <div className="d-flex justify-content-center p-5">
        <form onSubmit={handllogin}>
        <table style={{ marginTop: '190px' }}>
            <tr><input type="text"  id="username" placeholder="username"/></tr>
            <tr><input type="password" id="password" className="my-3" placeholder="password"/></tr>
            <tr><button className="bg-primary" style={{ marginLeft: '50px' }} >Submit</button></tr>
        </table>
        </form>
        </div>

        </>
    );
}