import { useState } from "react";
import React, { useContext } from 'react'
import {
    Link, useNavigate
} from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';
import "./register.scss";

export default function Register() {
  // const [data, setData] = useState({
  //   Username:"",
  //   Email:"",
  //   Password:"",
  //   Name:""
   const navigate = useNavigate('/')
  // const { setAuth } = useContext(AuthContext);

    const submit1 = (e) => {

        e.preventDefault();

        function User(first_name, email, password, userID) {
            this.userID = userID;
            this.first_name = first_name;
            this.email = email;
            this.password = password;

  }
 
        // get inputs values
        let fname = document.getElementById("fname").value

        let email = document.getElementById("email").value
        let password = document.getElementById("password").value

        //check if email is exist
        let users = JSON.parse(localStorage.getItem("users")) || [];

        let isExist = users.find((user) => user.email === email);
        if (isExist) {
            return alert('The email is used!');
        }


        console.log(isExist)

        //add new user
        let userID = users.sort()[users.length - 1]?.userID + 1 || 1;
        let newUser = new User(fname, email, password, userID);
        users.push(newUser);





        localStorage.removeItem("users");
        localStorage.setItem("users", JSON.stringify(users));
        // alert("welcome " + users.first_name);

        //clear register form
        document.getElementById("fname").value = '';
        document.getElementById("email").value = '';
        document.getElementById("password").value = '';

        // setAuth(true)
        navigate('/Login')
      

    }




// https://youtu.be/nmCeSPGcBnY
  // كملي هاد الفيديوو 





  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>HIB HOB.</h1>
          <p>
            We make the world in your hands. Connect with your friends at any time and from anywhere and see the latest news
<br/>Hurry up to register now          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
          <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form id='form' onSubmit={submit1}>
            <input type="text" placeholder="Username" name="Username" id="fname"/>

            <input type="email" placeholder="Email" name="Email"id="email"    />
            <input type="password" placeholder="Password" name="Password" id="password"   />
            {/* <input type="text" placeholder="Name" name="Name"   /> */}
            <button type="submit" name="submit" value="Register">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

// export default Register;
