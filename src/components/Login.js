import React, { useRef, useState } from 'react';
import Header from './Header';
import  {checkValidData} from '../utils/validate';
import { createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';


const Login = () => {

  const [isSignInForm, setIsSignInForm]=useState(true);
  const [errorMessge, setErrorMessage]=useState(null);
   const name =useRef(null);
  const email =useRef(null);
  const password =useRef(null);

  const handleButtonClick = () =>{
   
    // console.log(name.current.value);
    // console.log(email.current.value);
    // console.log(password.current.value);
   
    const message =checkValidData(
      email.current.value,password.current.value);
    setErrorMessage(message);

    if(message) return;

    //sign in / sign up logic

    if(!isSignInForm){
//sign logic
  createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + '-' + errorMessage);
    // ..
  });
    }
    else{
      //sign up logic
      signInWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + '-' + errorMessage)
  });

    }
  }
  const togglrSignInForm  = () =>  {

    setIsSignInForm(!isSignInForm);

  }
  return (
    <div>
        <Header />
        <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/3d7bd3dc-e3bf-4093-915d-2299d53943d6/PK-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt=''
        />
        </div>
        <form onSubmit={ (e) => e.preventDefault() } className='w-3/12 absolute p-12 bg-black my-36   text-white  mx-auto right-0 left-0 rounded-lg bg-opacity-80' >
          <h1 className='font-bold text-3xl py-4'>{ isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
          {!isSignInForm && (
            <input ref={name} type='text' placeholder='Full Name ' className='p-2 my-4 w-full bg-gray-700 '/>
           ) }
            <input ref={email} type='text' placeholder='Email Adress' className='p-2 my-4 w-full bg-gray-700 '/>
            <input ref={password} type='Password' placeholder='Password ' className='p-2 my-4 w-full bg-gray-700 '/>
            <p className='text-red-500 text-lg font-bold py-2'>{errorMessge}</p>
            <button  className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{ isSignInForm ? 'Sign In' : 'Sign Up'}</button> 
            <p className='py-6 cursor-pointer' onClick={togglrSignInForm}> { isSignInForm ? 'New to Netflix ? Sign up Now' : 'Already  Regiatered ? Sign In Now.'}</p>
        </form>


    </div>
  )
}

export default Login;