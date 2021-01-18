import React from 'react';
import MainScreen from './app/screens/MainScreen';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './app/navigation/MainNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}
