import React, {useState} from "react";
import './Contact.css';

const Contact = () => {

  const [msg, setMsg] = useState({
    firstname : "",
    lastname : "",
    email : "",
    message : ""
  });

  // Handle Inputs
  const handleChange = (event) =>{
    let name = event.target.name;
    let value = event.target.value;

    setMsg({...msg, [name]:value});
  }

  // Handle Submit
  const handleSubmit = async (event)=>{
    event.preventDefault();
    // Object DeStructuring
    // Store Object Data into Variables
    const {firstname,lastname, email, message} = msg;
    try {
      //It is Submitted on port 3000 by default
      // Which is Front End but we need to 
      // Submit it on Backend which is on 
      // Port 3001. So we need Proxy.
      const res = await fetch('/message', {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
         firstname,lastname, email, message
        })
      })
      console.log(res.status)
      if(res.status === 400 || !res){
        window.alert("Message Not Sent. Try Again Later")
      }else{
        // You need to Restart the Server for Proxy Works
        // Now Try Again
        window.alert("Message Sent");
        setMsg({
          firstname : "",
          lastname:"",
          email : "",
          message : ""
        })
        
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    

    <>
    <header className="header-contact">
        <h3 className="heading-contact">CONTACTS</h3>
        
    </header>
    <br/><br/><br/><br/><br/><br/>
         <form className="contact-form" onSubmit={handleSubmit} method="POST">
             <label>Name :</label> <br/>
             <input className="contact-input" id="name" placeholder="enter name" type="text" name="firstname" value={msg.firstname} onChange={handleChange}  ></input>
             <br/><br/>
             <label>Last Name :</label> <br/>
             <input className="contact-input" id="lastname" placeholder="enter lastname" type="text" name="lastname" value={msg.lastname} onChange={handleChange}  ></input>
             <br/><br/>
             <label>Email :</label> <br/>
             <input className="contact-input" id="email" placeholder="enter email" type="text" name="email" value={msg.email} onChange={handleChange}  ></input>
             <br/><br/>
             <label>Message :</label> <br/>
             <input className="contact-input" id="message" placeholder="enter message" type="text" name="message" value={msg.message} onChange={handleChange}  ></input>
             <br/><br/><br/><br/>
             <button className="contact-button" type="submit">SUBMIT</button>
             <br/><br/>
         </form>
    </>
  );
};

export default Contact;
