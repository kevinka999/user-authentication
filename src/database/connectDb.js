import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

export async function connectDb () {
  return open({
    filename: './src/database/database.sqlite',
    driver: sqlite3.Database
  })
}