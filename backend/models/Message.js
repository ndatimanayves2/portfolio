const db = require('../db');

class Message {
    static validate({ name, email, message }) {
        if (!name || !email || !message) throw new Error('All fields are required');
        if (!/^\S+@\S+\.\S+$/.test(email)) throw new Error('Invalid email');
    }

    static async create({ name, email, message }) {
        const [result] = await db.execute(
            'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)',
            [name, email, message]
        );
        return { id: result.insertId, name, email, message };
    }

    static async findAll() {
        const [rows] = await db.execute('SELECT * FROM messages ORDER BY created_at DESC');
        return rows;
    }
}

module.exports = Message;
