const db = require('../db');

class Experience {
    static validate({ company, role, startDate }) {
        if (!company || !role || !startDate) throw new Error('Company, role and startDate are required');
    }

    static async findAll() {
        const [rows] = await db.execute('SELECT * FROM experiences ORDER BY start_date DESC');
        return rows.map(Experience.parse);
    }

    static async findById(id) {
        const [rows] = await db.execute('SELECT * FROM experiences WHERE id = ?', [id]);
        return rows[0] ? Experience.parse(rows[0]) : null;
    }

    static async create({ company, role, description = '', startDate, endDate = null, current = false, technologies = [] }) {
        const [result] = await db.execute(
            'INSERT INTO experiences (company, role, description, start_date, end_date, current, technologies) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [company, role, description, startDate, current ? null : endDate, current, JSON.stringify(technologies)]
        );
        return { id: result.insertId, company, role, description, startDate, endDate, current, technologies };
    }

    static parse(row) {
        return {
            ...row,
            startDate: row.start_date,
            endDate: row.end_date,
            technologies: typeof row.technologies === 'string' ? JSON.parse(row.technologies) : row.technologies
        };
    }
}

module.exports = Experience;
