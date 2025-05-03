import { db } from './database';

// Register new user
export const registerUser = (username, password) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO users (username, password) VALUES (?, ?)',
        [username, password],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};

// Login existing user
export const loginUser = (username, password) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM users WHERE username = ? AND password = ?',
        [username, password],
        (_, { rows }) => {
          if (rows.length > 0) resolve(rows._array[0]);
          else reject('Invalid credentials');
        }
      );
    });
  });
};