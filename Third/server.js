import express from 'express';//type :  module 
import mongoose from 'mongoose';
import 'dotenv/config'

//Connection with mongoDB cluster
(async ()=>{
  const connectionInstance = await mongoose.connect(process.env.MONGO_URI);
  // console.log(connectionInstance.connection.host)
})()

// data defintion
const userSchema = mongoose.Schema({
  name: String,
  age: Number
})

//Collection creation
const userCollection = mongoose.model('user', userSchema)

const app = express();
app.use(express.json()) // Middleware for json formation


/**
 * To create a User with userSchema
 */
app.post('/create-user',async (req, res)=>{
  const userData = req.body
  const createdUser = await userCollection.create(userData)
  res.send({
    "createdUser": createdUser
  })
})

/**
 * To get all users
 */
app.get('/get-all-users', async(req, res)=>{
  const users = await userCollection.find();
  res.send(users)
})

/**
 * To get a single User
 */
app.get('/get-user', async (req, res)=>{
  const user = await userCollection.findOne({
    name: req.body.name
  })
  res.send(user)
})

/**
 * To update a user(Parameters used)
 */
app.put('/update-user', async (req, res)=>{
  const updatedUser = await userCollection.findByIdAndUpdate({
    _id: req.query._id
  }, req.body, {new: true})
  res.send({
    updatedUser
  })
})

/**
 * To delete a user
 */
app.delete('/delete-user', async(req, res)=>{
  const deletedUser = await userCollection.findByIdAndUpdate(req.query)
  res.send({
    deletedUser
  })
})

app.get('/', (req, res)=>{
  res.send("The Server is running fine");
})

const PORT = 5000; // The server will be running on this Port
app.listen(PORT, () =>{
  console.log(`The server is running on http://localhost:${PORT}`);
})
