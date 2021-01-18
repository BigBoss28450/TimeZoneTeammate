import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';
import AddTeammateScreen from '../screens/AddTeammateScreen';

const Stack = createStackNavigator();

export default function MainNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Add"
        component={AddTeammateScreen}
        options={{
          title: 'Agregar compañero',
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
