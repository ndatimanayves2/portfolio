CREATE DATABASE IF NOT EXISTS portfolio_db;
USE portfolio_db;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    title VARCHAR(100) NOT NULL,
    bio TEXT,
    skills JSON,
    contact JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    description TEXT NOT NULL,
    technologies JSON NOT NULL,
    github VARCHAR(255) DEFAULT '',
    demo VARCHAR(255) DEFAULT '',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS experiences (
    id INT AUTO_INCREMENT PRIMARY KEY,
    company VARCHAR(150) NOT NULL,
    role VARCHAR(150) NOT NULL,
    description TEXT,
    start_date VARCHAR(10) NOT NULL,
    end_date VARCHAR(10) DEFAULT NULL,
    current BOOLEAN DEFAULT FALSE,
    technologies JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seed data
INSERT IGNORE INTO users (name, email, title, bio, skills, contact) VALUES (
    'Ndatimana Yves',
    'ndatimanayves@example.com',
    'Fullstack Developer',
    'Passionate fullstack developer with 5+ years of experience building scalable web applications.',
    '{"frontend":["React.js","Vue.js","JavaScript/TypeScript","HTML5","CSS3"],"backend":["Node.js","Python","Express.js","RESTful APIs","GraphQL"],"database":["MongoDB","PostgreSQL","MySQL","Redis"],"tools":["Git","Docker","AWS","CI/CD","Jest"]}',
    '{"email":"ndatimanayves@example.com","linkedin":"https://linkedin.com/in/ndatimanayves","github":"https://github.com/ndatimanayves","location":"Kigali, Rwanda"}'
);

INSERT IGNORE INTO projects (title, description, technologies, github, demo) VALUES
('E-Commerce Platform', 'Full-stack e-commerce solution with React frontend and Node.js backend.', '["React","Node.js","MongoDB","Stripe API"]', 'https://github.com/ndatimanayves/ecommerce-platform', 'https://ecommerce-demo.com'),
('Task Management App', 'Real-time collaborative task management with WebSocket connections.', '["Vue.js","Express.js","PostgreSQL","Socket.io"]', 'https://github.com/ndatimanayves/task-manager', 'https://taskmanager-demo.com'),
('API Gateway Service', 'Microservices API gateway with rate limiting and authentication.', '["Python","FastAPI","Redis","Docker"]', 'https://github.com/ndatimanayves/api-gateway', 'https://api-gateway-demo.com'),
('Social Media Dashboard', 'Analytics dashboard with data visualization and scheduling.', '["React","D3.js","Node.js","MySQL"]', 'https://github.com/ndatimanayves/social-dashboard', 'https://social-dashboard-demo.com');

INSERT IGNORE INTO experiences (company, role, description, start_date, end_date, current, technologies) VALUES
('TechCorp Rwanda', 'Senior Fullstack Developer', 'Led development of enterprise web applications serving 50k+ users.', '2022-01', NULL, TRUE, '["React","Node.js","PostgreSQL","AWS"]'),
('StartupHub Kigali', 'Fullstack Developer', 'Built and maintained multiple client projects from scratch.', '2020-03', '2021-12', FALSE, '["Vue.js","Express.js","MongoDB"]'),
('Freelance', 'Web Developer', 'Delivered custom web solutions for local businesses.', '2019-01', '2020-02', FALSE, '["HTML","CSS","JavaScript","PHP"]');
