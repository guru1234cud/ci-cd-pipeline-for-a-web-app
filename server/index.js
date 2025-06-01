const express = require("express")
const app = express()
app.use(express.json())
app.get('/',(req,res)=>{
    res.json(
        {
            status:"success"
            ,message:"your first message via ci/cd"
        }
    )
})

app.listen(8080,()=>console.log("server is running in the port 8080"))
