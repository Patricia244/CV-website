const express = require("express");
const router = express.Router();
const VisitorsModel = require("../model/visitorModel");

router.post("/new_visitor", async (req, res) => {

    const { name, dateOfVisit, email, message } = req.body
    const visitor = new VisitorsModel({
        name: name,
        dateOfVisit: dateOfVisit,
        email: email,
        message: message,
    });
    try {
        await visitor.save()
        res.status(201).json({success:true,message:"form submitted successfully"});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
