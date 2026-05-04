require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const Message = require('./models/Message');
const Project = require('./models/Project');
const User = require('./models/User');
const Experience = require('./models/Experience');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend-dist')));

// --- Project Routes ---
app.get('/api/projects', async (req, res) => {
    try {
        res.json(await Project.findAll());
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.get('/api/projects/:id', async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) return res.status(404).json({ error: 'Project not found' });
        res.json(project);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.post('/api/projects', async (req, res) => {
    try {
        Project.validate(req.body);
        res.status(201).json(await Project.create(req.body));
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});

// --- Experience Routes ---
app.get('/api/experiences', async (req, res) => {
    try {
        res.json(await Experience.findAll());
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.get('/api/experiences/:id', async (req, res) => {
    try {
        const exp = await Experience.findById(req.params.id);
        if (!exp) return res.status(404).json({ error: 'Experience not found' });
        res.json(exp);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.post('/api/experiences', async (req, res) => {
    try {
        Experience.validate(req.body);
        res.status(201).json(await Experience.create(req.body));
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});

// --- Message Routes ---
app.post('/api/contact', async (req, res) => {
    try {
        Message.validate(req.body);
        await Message.create(req.body);
        res.json({ success: true, message: 'Message received successfully' });
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});

app.get('/api/contacts', async (req, res) => {
    try {
        res.json(await Message.findAll());
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

// --- User / Profile Routes ---
app.get('/api/profile', async (req, res) => {
    try {
        res.json(await User.findFirst());
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.get('/api/users', async (req, res) => {
    try {
        res.json(await User.findAll());
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

// --- Serve Frontend ---
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend-dist/index.html'));
});

app.listen(PORT, () => {
    console.log(`Portfolio server running on http://localhost:${PORT}`);
});
