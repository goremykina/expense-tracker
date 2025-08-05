import Database from 'better-sqlite3'
import dotenv from 'dotenv'

dotenv.config()

const dbPath = process.env.DB_PATH || './data.sqlite'
const db = new Database(dbPath)

db.exec(`
  CREATE TABLE IF NOT EXISTS expenses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    amount REAL NOT NULL,
    currency TEXT NOT NULL,
    category TEXT NOT NULL,
    date TEXT NOT NULL
  );
`)

export default db
