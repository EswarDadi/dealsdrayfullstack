const express=require("express");
const router=express.Router();
const path=require("path")
const {t_Employee}=require('../models');
const multer=require("multer")
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        const dest= path.join(__dirname, '../Images')
        console.log('Destination:', dest);
        cb(null,dest)
    },
    filename:(req,file,cb)=>{
        console.log(file);
        cb(null,file.fieldname+"-"+Date.now()+path.extname(file.originalname))
    }
})
const upload=multer({storage:storage})
router.post("/",upload.single("f_Image"), async(req,res)=>{
    
    try{
        console.log(req.file);
        const {f_Name, f_Email, f_Mobile, f_Designation, f_Gender, f_Course }=req.body
        const f_Image = req.file ? req.file.filename : null;
        const employee=await t_Employee.create({
            f_Image, f_Name, f_Email, f_Mobile, f_Designation, f_Gender, f_Course 
        })
        
        res.status(201).json(employee)

    }catch(error){
        console.log(error);
    }

})

//get employeeDetails List

router.get("/",async(req,res)=>{
    const listOfEmployees=await t_Employee.findAll()
   
    res.json(listOfEmployees)
})

module.exports=router;