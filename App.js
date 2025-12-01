import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import PlanetDetailScreen from './src/screens/PlanetDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Solar System' }}
        />
        <Stack.Screen
          name="PlanetDetail"
          component={PlanetDetailScreen}
          options={{ title: 'Planet Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
