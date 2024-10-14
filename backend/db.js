import pg from "pg";
import dotenv from 'dotenv';

const { Pool } = pg;

// Load environment variables
dotenv.config();

// Create a pool for connecting to PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Create the entries table if it doesn't exist
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS entries (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    image TEXT,
    content TEXT NOT NULL
  );
`;

export default pool;
