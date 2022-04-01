import React, { useState } from 'react'
import './entry.style.css'
import { LoginForm } from "../../components/login/login.comp";
import { ResetPassword } from "../../components/password-reset/passwordreset.comp";


export const Entry = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [frmLoad, setFrmLoad] = useState("login");
  const formSwitcher = frmType => {
		setFrmLoad(frmType);
	};
  const handleOnchange = e =>{
    const {name,value} = e.target
    
		switch (name) {
			case "email":
				setEmail(value);
				break;

			case "password":
				setPassword(value);
				break;

			default:
				break;
		}
  }
  const handleOnSubmit = (e) => {
		e.preventDefault();
  	if (!email || !password) {
			 alert("Fill up all the form!");
		}
    console.log(email, password)
  }
  const handleOnResetSubmit = (e) => {
		e.preventDefault();
  	if (!email) {
			 alert("Please enter your email!");
		}
    console.log(email, password)
  }
  return (
  <div className ="entry-page bg-image">
    
  <div className="jumbotron form-box ">
  {frmLoad === "login" &&  <LoginForm handleOnchange = {handleOnchange} email = {email} pass={password} handleOnSubmit ={handleOnSubmit} formSwitcher={formSwitcher}/>}
  {frmLoad === "rest" &&   <ResetPassword handleOnchange = {handleOnchange} email = {email}  handleOnResetSubmit ={handleOnResetSubmit} formSwitcher={formSwitcher}/> }</div>
    
   
   
  </div>
  );
}

