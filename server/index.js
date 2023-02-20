import  express  from "express";
import cors from "cors";
import mongoose from "mongoose";
import { useNavigate } from "react-router-dom";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());


mongoose.connect('mongodb://127.0.0.1:27017/tic-tac-toe',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('mongodb connected successfully');
})

const userSchema = new mongoose.Schema({
    name: 'string',
    username: 'string',
    email: 'string',
    password: 'string',
})

const User = new mongoose.model("User", userSchema)


app.post('/login', (req, res) => {
        const {  username, password} = (req.body)
        User.findOne({ username: username}, (err, user) => {
          if (user) {
            if (password !== user.password) {
                res.send({message: 'Please enter valid information'})
            } else {
              res.send({message: 'Login successful', user: user})
                
            
            }
          }else {
            res.send({message:"User not found"})
          }
        })
})

app.post('/signup', (req, res) => {
    const { name, username, email, password} = (req.body)
    User.findOne({ username: username}, (err, user) => {
       if(user){
            res.send({message:"User already has been created."})
       }else {
         const user = new User({name, username, email, password})
        user.save(err => {
          if (err) {
            res.send(err)
        } else {
            res.send ({message: "Congratulation! account has been created successfully"})
        }
    })
       }
    })
   
})

app.listen(3001,() => {
    console.log('mongodb listening on port 3001');
})