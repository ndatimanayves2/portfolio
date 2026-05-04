const db = require('../db');

class Project {
    static validate({ title, description, technologies }) {
        if (!title || !description) throw new Error('Title and description are required');
        if (!Array.isArray(technologies) || technologies.length === 0) throw new Error('Technologies must be a non-empty array');
    }

    static async findAll() {
        const [rows] = await db.execute('SELECT * FROM projects ORDER BY created_at DESC');
        return rows.map(Project.parse);
    }

    static async findById(id) {
        const [rows] = await db.execute('SELECT * FROM projects WHERE id = ?', [id]);
        return rows[0] ? Project.parse(rows[0]) : null;
    }

    static async create({ title, description, technologies, github = '', demo = '' }) {
        const [result] = await db.execute(
            'INSERT INTO projects (title, description, technologies, github, demo) VALUES (?, ?, ?, ?, ?)',
            [title, description, JSON.stringify(technologies), github, demo]
        );
        return { id: result.insertId, title, description, technologies, github, demo };
    }

    static parse(row) {
        return { ...row, technologies: typeof row.technologies === 'string' ? JSON.parse(row.technologies) : row.technologies };
    }
}

module.exports = Project;
