const express=require("express");
const app=express();
const path=require("path")
const cors=require("cors");
app.use(cors());
app.use(express.json())

const db=require("./models");
app.use('/images', express.static(path.join(__dirname, 'Images')));

const employeeRouter=require("./routes/Employee")
app.use("/employee",employeeRouter)
const userRouter=require("./routes/Users");
app.use("/auth",userRouter)
db.sequelize.sync().then(()=>{
    app.listen(3008,()=>{
        console.log("server running at 3008")
    })
})

