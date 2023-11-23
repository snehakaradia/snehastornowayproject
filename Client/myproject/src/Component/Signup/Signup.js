import React,{useState} from 'react';
import './Signup.css';
import { NavLink } from 'react-router-dom';
import {useHistory} from 'react-router';

const Signup = () => {
  const history = useHistory()

  const [user,setUser] = useState({
    username : "",
    email : "",
    password : "",
  });

  //handleinput
  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setUser({...user,[name] : value});
  }

  //handlesubmit
  const handleSubmit = async (event) => {
    event.preventDefault();
    //object destructuring
    //strore object data into variables
    const {username,email,password} = user;
    try {
      const res = await fetch('/register',{
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          username,email,password
        })
      })
      
      console.log(res.status)
      if(res.status === 400 || !res){
        window.alert('Already used Deatails')
      }
      else{
        window.alert('Registered succesfully');
        history.push('/login')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
        <header className="header-signup">
</header>
    <form className='fro-signup' onSubmit={handleSubmit} method='POST'>
        <div className="container1-signup">
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr></hr>

            <label><b>Username</b></label>
            <input id="eml-signup" type="text" name='username' onChange={handleInput} value={user.username} placeholder="Enter Username"/>

           <div className="con2"> <label><b>Email</b></label>
            <input id="eml-signup" type="email" name='email' onChange={handleInput} value={user.email} placeholder="Enter Email"/></div>

           <div className="con2-signup"><label><b>Password</b></label>
            <input id="eml-signup" name='password' onChange={handleInput} value={user.password} type="password" placeholder="Password"/></div> 

            <div className="con2-signup"> 
              <input type="checkbox" className='checkb-signup' />Remember Me
          </div>
           
          <p>By creating an account you agree to our <a href="" className='dodger-signup'>Terms & Privacy</a></p>
            

            <div className="con1-signup">
                <button type="button" className="cancelbtn-signup"><NavLink to='/Signup'>Cancel</NavLink></button>
                <button type="submit" className="signupbtn-signup">Sign Up</button>
            </div>
        </div>

        <div className="container3-signup">
          <span>Already an account</span>
          <button className='white-signup' type="button"><NavLink to='/Login'>Login</NavLink></button>
        </div>
    </form>


    </div>
  )
}

export default Signup;