const express=require("express")
const router=express.Router();
const {t_login}=require("../models")
const bcrypt=require("bcrypt");
const {sign}=require("jsonwebtoken")
router.post("/", async (req, res) => {

    
    const { f_userName, f_Pwd } = req.body;
    try{
    const user=await t_login.findOne({where:{f_userName:f_userName}})
    if (user) res.status(400).json({error:"User already exists"})
    bcrypt.hash(f_Pwd, 10).then((hash) => {
      t_login.create({
        f_userName: f_userName,
        f_Pwd: hash,
      });
      res.json("SUCCESS");
    });
}catch(error){
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
}
  });
router.post("/login",async(req,res)=>{
    const { f_userName, f_Pwd } = req.body;
    const user=await t_login.findOne({where:{f_userName:f_userName}})
    if (!user) res.json({error:"User doesn't exist"})
    bcrypt.compare(f_Pwd,user.f_Pwd).then((match)=>{
        if (!match) res.json({error:"Wrong Username and Password Combination"})
        const accessToken=sign(
            {f_userName:user.f_userName,f_sno:user.f_sno},
            "important secret"
        )
        res.json(accessToken);
    })
})
module.exports=router