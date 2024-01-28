const express = require("express");
const router = express.Router();
const VisitorsModel = require("../model/visitorModel");

//post a visito

  
router.post("/new_visitor", async (req, res) => {

    const { name, dateOfVisit, email, message } = req.body
    const visitor = new VisitorsModel({
        name: name,
        dateOfVisit: dateOfVisit,
        email: email,
        message: message,
    });
    try {
        const newVisitor = await visitor.save().then((res) => {
        });
        res.status(201).send(newVisitor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


//get a visitor
router.get("/new_visitors", async (req, res) => {
    try {
        const visitors = await VisitorsModel.find();
        res.status(201).send(visitors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
