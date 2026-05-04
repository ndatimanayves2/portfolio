# Ndatimana Yves - Portfolio Website

A modern, responsive portfolio website showcasing the work and skills of Ndatimana Yves, a fullstack developer.

## Project Structure

```
portfolio/
├── frontend/
│   ├── index.html       # Main HTML file
│   ├── style.css        # Stylesheet
│   └── script.js        # Frontend JavaScript
├── backend/
│   ├── server.js        # Express server
│   └── models/
│       ├── Message.js   # Contact message model
│       ├── Project.js   # Project model
│       ├── User.js      # User/profile model
│       └── Experience.js# Work experience model
├── package.json
└── README.md
```

## Setup

```bash
npm install
npm start
```

For development with auto-reload:
```bash
npm run dev
```

Open: `http://localhost:3000`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/projects` | Get all projects |
| GET | `/api/projects/:id` | Get project by ID |
| POST | `/api/projects` | Add new project |
| GET | `/api/experiences` | Get all experiences |
| GET | `/api/experiences/:id` | Get experience by ID |
| POST | `/api/experiences` | Add new experience |
| POST | `/api/contact` | Submit contact message |
| GET | `/api/contacts` | Get all messages (admin) |
| GET | `/api/profile` | Get profile info |
| GET | `/api/users` | Get all users |

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: Node.js, Express.js
- **Models**: Message, Project, User, Experience
# portfolio
