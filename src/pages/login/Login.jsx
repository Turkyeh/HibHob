// import { Toast } from 'flowbite-react';
// npm i flowbite flowbite - react
import React, { useContext } from 'react'
// import { useContext } from "react";

import toast, { Toaster } from "react-hot-toast";

import {
    Link, useNavigate
} from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.scss";
const notify = () => toast.custom(
    (t) => (
        <>
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
                <div className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">
                Email or Password is incorrect
            </div>
            <div />
        </>
    ),
    { id: "unique-notification", position: "top-right" }
);

export default function Login3() {



    const navigate = useNavigate('/')
    // const { auth, setAuth } = useContext(AuthContext)



    const submit1 = (e) => {
        // notify()

        e.preventDefault();


        let email = document.getElementById("login_form").value
        let password = document.getElementById("login_password").value


        let users = JSON.parse(localStorage.getItem("users")) || [];
        let currentUser = users.find((user) => user.email === email && user.password === password);
        if (!currentUser) {
            return notify()
        }


        localStorage.setItem("currentUser", JSON.stringify(currentUser))
        

        // setAuth(true)
        navigate('/')



        document.getElementById("login_form'").value = '';
        document.getElementById("login_password'").value = '';



    }



  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
           🐼HIB HOB<br/>
           Connect with friends and the world around you on HIB HOB SOCIAL PLATFORM We make the world small in your hands
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form onSubmit={submit1} autoComplete="off">
            <input  type="Email" placeholder='Email' id='login_form' />
            <input  type="password" placeholder='Password' id='login_password'/>
            <button >Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

