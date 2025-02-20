const express= require("express")
const app=express()
app.listen(5000,()=>{
    console.log("Server has been started");
})
let usersData=[
    {
        id:1,
        name:"V",
        address:"Z",
    },
    {
        id:2,
        name:"R",
        address:"B",
    },
    {
        id:3,
        name:"P",
        address:"M",
    }
]
app.get("/allusers",(req,res)=>{
    res.send(usersData)
})
app.get("/getuserbyid",(req,res)=>{
    let {id}=req.query
    let flag=false
    let i;
    for (i=0;i<usersData.length;i++){
        if (usersData[i].id==id){
            return res.send(usersData[i])
        }
    }
    return res.send("User Not Found")
})
app.get("/deleteuserbyid",(req,res)=>{
    let {id}=req.query
    for (let i=0;i<usersData.length;i++){
        if (usersData[i].id==id){
            usersData.splice(i,1)
            return res.send("User Deleted")
        }
        return res.send("No user found to delete")
    }
})
app.get("/adduser",(req,res=>{
    let {id,name,address}=req.query;
    usersData.push()
}))
//use & to send multiple query Parameters
//https://localhost:4000/profile?username=V&rollno=2310991160