const Pool = require('pg').Pool

const pool = new Pool({
    'user': process.env.POSTGRES_USER || 'user',
    'password': process.env.POSTGRES_PASSWORD || 'password',
    'database': process.env.POSTGRES_DB || 'dev',
    'host': process.env.POSTGRES_HOST || 'localhost',
    'port': process.env.POSTGRES_PORT || '5432'
});

module.exports = { pool };