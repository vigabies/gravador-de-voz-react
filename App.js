import StackNavigation from './src/routes';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
