import express from 'express';//type :  module 

const app = express();

app.get('/', (req, res)=>{
  res.send("The Server is running fine");
})

const PORT = 5000; // The server will be running on this Port
app.listen(PORT, () =>{
  console.log(`The server is running on http://localhost:${PORT}`);
})
