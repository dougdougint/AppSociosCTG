import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import SociosScreen from './src/screens/SociosScreen';
import MensalidadesScreen from './src/screens/MensalidadesScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Socios" component={SociosScreen} />
        <Stack.Screen name="Mensalidades" component={MensalidadesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
