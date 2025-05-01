import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('macroTracker.db');

export const initDB = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS goals (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        protein REAL,
        carbs REAL,
        fat REAL,
        calories REAL
      );`
    );
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS meals (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        date TEXT DEFAULT CURRENT_TIMESTAMP,
        protein REAL,
        carbs REAL,
        fat REAL,
        calories REAL
      );`
    );
  });
};

// Example: Insert a meal
export const addMeal = (protein, carbs, fat, calories, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO meals (protein, carbs, fat, calories) VALUES (?, ?, ?, ?)',
      [protein, carbs, fat, calories],
      (_, result) => callback(null, result),
      (_, error) => callback(error, null)
    );
  });
};

export default db;