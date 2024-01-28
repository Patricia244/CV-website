const express = require("express");
const router = express.Router();
const AdminModel =require("../model/adminModel")

//post a visitor

router.post("/new_admin", async (req, res) => {

    const { adminName,password} = req.body
    const admin= new AdminModel({
        adminName: adminName,
        password:password
    });
    try {
        const newAdmin= await admin.save()
        res.json(newAdmin);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//get a visitor
router.get("/new_admin", async (req, res) => {
    try {
        const admins = await VisitorsModel.find();
        res.status(201).send(admins);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;