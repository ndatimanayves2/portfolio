const db = require('../db');

class User {
    static validate({ name, email, title }) {
        if (!name || !email || !title) throw new Error('Name, email and title are required');
        if (!/^\S+@\S+\.\S+$/.test(email)) throw new Error('Invalid email');
    }

    static async findAll() {
        const [rows] = await db.execute('SELECT * FROM users');
        return rows.map(User.parse);
    }

    static async findFirst() {
        const [rows] = await db.execute('SELECT * FROM users LIMIT 1');
        return rows[0] ? User.parse(rows[0]) : null;
    }

    static async create({ name, email, title, bio = '', skills = {}, contact = {} }) {
        const [result] = await db.execute(
            'INSERT INTO users (name, email, title, bio, skills, contact) VALUES (?, ?, ?, ?, ?, ?)',
            [name, email, title, bio, JSON.stringify(skills), JSON.stringify(contact)]
        );
        return { id: result.insertId, name, email, title, bio, skills, contact };
    }

    static parse(row) {
        return {
            ...row,
            skills: typeof row.skills === 'string' ? JSON.parse(row.skills) : row.skills,
            contact: typeof row.contact === 'string' ? JSON.parse(row.contact) : row.contact
        };
    }
}

module.exports = User;
