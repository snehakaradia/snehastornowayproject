import React,{useState} from 'react';
import './Login.css';
import {useHistory} from 'react-router';



const Login = () => {
  const history = useHistory()
  const [user,setUser] = useState({
    email : "",
    password : "",
  });

  //handleinput
  const handleChange = (event) => {
    let name = event.target.name
    let value = event.target.value
    setUser({...user,[name] : value})
  }

  //handle login
  const handleSubmit = async (event) => {
    event.preventDefault();
    const {email,password} = user;
    try {
      const res = await fetch('/login',{
        method : 'POST',
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          email,password
        })
      });
      if(res.status === 400 || !res){
        window.alert('Invalid credentials')
      }
      else{
        history.push('/');
        window.alert('Login Successfull');
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  }
 return (
    <div><header className="header-login">
    </header>
        <form onSubmit={handleSubmit} method='POST' className='form-login'>
            <div className="container1-login">
               
                <h1>Login</h1>
                <label><b>Email</b></label>
                <input id="eml-login" type="email" name='email' value={user.email} onChange={handleChange} placeholder="Enter Email"/>
    
               <div className="con2-login"> <label><b>Password</b></label>
                <input id="eml-login" type="password"  name='password' value={user.password} onChange={handleChange} placeholder="Enter Password"/></div>
    
               
    
                <div className="con2-login"> <label>
                  <input type="checkbox" id='remember'/>Remember Me
              </label></div>
              <hr/>
               
    
                
                <div className="con1-login">
                    
                    <button type="submit" className="signupbtn-login">Login</button>
                </div>
            </div>
    
           </form>
        
    
    </div>
  )
}

export default Login;