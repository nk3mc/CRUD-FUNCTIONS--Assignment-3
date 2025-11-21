
const express = require('express');
const router = express.Router();
const Task = require('../models/task');

// ---------- VIEW ALL TASKS ----------
router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.render('tasks', { tasks });
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
});

// ---------- SHOW ADD TASK FORM ----------
router.get('/tasks/add', (req, res) => {
    res.render('addTask');
});

// ---------- SAVE NEW TASK ----------
router.post('/tasks/add', async (req, res) => {
    try {
        await Task.create(req.body);
        res.redirect('/tasks');
    } catch (err) {
        console.log(err);
        res.send("Error saving task");
    }
});

// ---------- DELETE TASK ----------
router.post('/tasks/delete/:id', async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.redirect('/tasks');
    } catch (err) {
        console.log(err);
        res.redirect('/tasks');
    }
});

// ---------- MARK TASK AS COMPLETE ----------
router.post('/tasks/complete/:id', async (req, res) => {
    try {
        await Task.findByIdAndUpdate(req.params.id, { completed: true });
        res.redirect('/tasks');
    } catch (err) {
        console.log(err);
        res.send("Error completing task");
    }
});

// ---------- UPDATE A TASK ----------
router.post('/tasks/edit/:id', async (req, res) => {
    try {
        await Task.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            subject: req.body.subject,
            dueDate: req.body.dueDate
        });
        res.redirect('/tasks');
    } catch (err) {
        console.log(err);
        res.send("Error updating task");
    }
});

// ---------- HOMEPAGE ----------
router.get('/', (req, res) => {
    res.render('index');
});

module.exports = router;
