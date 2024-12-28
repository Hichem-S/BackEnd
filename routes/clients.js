const express = require('express');
const router = express.Router();
const Client = require('../models/Client');


router.post('/', async (req, res) => {
    try {
        const { name, email, resume, jobSite } = req.body;
        const newClient = new Client({ name, email, resume, jobSite });
        const savedClient = await newClient.save();
        res.status(201).json(savedClient);
    } catch (err) {
        console.error("Error saving client:", err);
        res.status(500).json({ message: "Failed to save client", error: err.message });
    }
});


router.get('/', async (req, res) => {
    try {
        const clients = await Client.find();
        res.status(200).json(clients);
    } catch (err) {
        console.error("Error fetching clients:", err);
        res.status(500).json({ message: "Failed to fetch clients", error: err.message });
    }
});

module.exports = router;
