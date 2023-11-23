// Import All Dependencies
const dotenv = require('dotenv');
const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();

// Configure ENV File & Require Connection File
dotenv.config({path : './config.env'});
require('./db/conn');
const port = process.env.PORT;

// Require Model
const Users = require('./models/userSchema'); 
const Message = require('./models/msgSchema');
const authenticate = require('./middleware/authenticate');

// These Method is Used to Get Data and Cookies from FrontEnd
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());

app.get('/', (req, res)=>{
    res.send("Hello World");
})

// Registration
app.post('/register',async (req,res)=> {
    try 
    {
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;
        
        const createUser = new Users({
            username : username,
            email : email,
            password : password,
        });

        const created = await createUser.save();
        console.log(created);
        res.status(200).send("Registered");
    } catch (error) {
        res.status(400).send(error)
    }
})

// Login User
app.post('/login',async (req,res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const user = await Users.findOne({
            email : email,
        });

        if(user){
            const isMatch  = await bcryptjs.compare(password,user.password)

            if(isMatch){
                const token = await user.generateToken();
                res.cookie("jwt",token,{
                    //generateToken which is define the user schema and expires within 24 hours
                    expires : new Date(Date.now() + 86400000),
                    httpOnly : true
                })
                res.status(200).send('Login')
            }
            else{
                res.status(400).send('invalid credentials');
            }
        }
        else{
            res.status(400).send('invalid credentials');
        }
    } catch (error) {
        res.status(400).send(error);
    }
})


// Message
app.post('/message', async (req, res)=>{
    try {
        // Get body or Data
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const email = req.body.email;
        const message = req.body.message;

        const sendMsg = new Message({
            firstname : firstname,
            lastname:lastname,
            email : email,
            message : message
        });
        // Save Method is Used to Create User or Insert User
        // But Before Saving or Inserting, Password will Hash 
        // Because of Hashing. After Hash, It will save to DB
        const created = await sendMsg.save();
        console.log(created);
        res.status(200).send("Sent");

    } catch (error) {
        res.status(400).send(error)
    }
})

//logout
app.get('/logout',(req,res) => {
    res.clearCookie("jwt",{path : '/'})
    res.status(200).send('User has been logout')
})

app.get('/auth',authenticate,(req,res) => {
    
})




// Run Server 
app.listen(port, ()=>{
    console.log("Server is Listening")
})


// Our Backend is Done And Store Data in Database
// Now Its Time to Connect Front End With BackEnd