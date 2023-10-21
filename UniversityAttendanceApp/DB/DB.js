import SQLite from 'react-native-sqlite-storage';

// Initialize the SQLite database (usually in your app setup)
const db = SQLite.openDatabase({ name: 'mydb.db', location: 'default' });

// Function to wipe the database
export const wipeDatabase = () => {
  db.transaction((tx) => {
    tx.executeSql('DROP TABLE IF EXISTS UserInfo', [], () => {
      console.log('Table dropped successfully.');
    });
  });
};

// Function to store userInfo in the database
export const storeUserInfoInDB = (userInfo) => {
  // Create the table if it doesn't exist
  db.transaction((tx) => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS UserInfo (id INTEGER PRIMARY KEY AUTOINCREMENT, data TEXT)',
      [],
      () => {
        console.log('Table created successfully.');
      }
    );
  });

  // Insert userInfo into the table
  db.transaction((tx) => {
    tx.executeSql(
      'INSERT INTO UserInfo (data) VALUES (?)',
      [JSON.stringify(userInfo)],
      (_, { insertId }) => {
        console.log(`User info inserted with ID: ${insertId}`);
      },
      (_, error) => {
        console.error('Error inserting user info:', error);
      }
    );
  });
};

// Function to retrieve userInfo from the database
export const getUserInfoFromDB = (callback) => {
  db.transaction((tx) => {
    tx.executeSql(
      'SELECT data FROM UserInfo ORDER BY id DESC LIMIT 1',
      [],
      (_, { rows }) => {
        if (rows.length > 0) {
          const userData = JSON.parse(rows.item(0).data);
          callback(userData);
        } else {
          callback(null);
        }
      },
      (_, error) => {
        console.error('Error fetching user info:', error);
        callback(null);
      }
    );
  });
};
