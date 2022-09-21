const { Pool } = require('pg');
require('dotenv/config');

const databaseConfig = { connectionString: '' }; // Poderia inserir uma conexão com o banco de dados aqui
const pool = new Pool(databaseConfig);

exports = {
    pool
};
