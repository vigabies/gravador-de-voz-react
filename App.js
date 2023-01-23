import 'react-native-gesture-handler';
import StackNavigation from './src/routes';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Drawer from './src/routes/drawer';

export default function App() {
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
}
