const express = require("express");
const router = express.Router();
const AdminModel = require("../model/adminModel")

router.post("/login", async (req, res) => {
    const { userName, password } = req.body
    try {
       const admin = await  AdminModel.findOne({userName})
       if(!admin || admin.password !== password){
        return res.status(401).json({message:"Invalid username or password"})
       }
      
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
module.exports = router;