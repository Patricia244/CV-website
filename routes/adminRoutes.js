const express = require("express");
const router = express.Router();
const AdminModel = require("../model/adminModel")
const VisitorsModel = require("../model/visitorModel")
const authMiddleware = require('../middleware/authMiddleware');



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

// router.get("/login", async (req, res) => {
//     try {
//         router.use(authMiddleware);
//         const visitors = await VisitorsModel.find();
//         res.status(201).send(visitors);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

module.exports = router;