import 'react-native-gesture-handler';
import StackNavigation from './src/routes';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import Drawer from './src/routes/drawer';
import sqlite from './src/classes/sqlite';

sqlite.initDB();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
}
