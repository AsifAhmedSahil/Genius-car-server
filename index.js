const express = require('express');
const cors = require('cors');
const { response } = require('express');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors())
app.use(express.json());

app.get("/" , (req,res)=>{
    res.send("genius car server is running")
})

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})