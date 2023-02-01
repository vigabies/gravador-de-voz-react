import 'react-native-gesture-handler';
import StackNavigation from './src/routes';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import Drawer from './src/routes/drawer';
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {
    name: 'MainDB',
    location: 'default',
  },
  () => {},
  error => {
    console.log(error);
  },
);

export default function App() {
  useEffect(() => {
    const createTable = () => {
      db.transaction(tx => {
        tx.executeSql(`CREATE TABLE IF NOT EXISTS audios
        (id INTEGER AUTOINCREMENT PRIMARY KEY NOT NULL,
        title TEXT,
        datahora TEXT,
        tamanho INTEGER,
        tags TEXT,
        duracao TEXT,
        caminho TEXT,
        )
        `);
      });
    };

    createTable();
  }, []);

  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
}
