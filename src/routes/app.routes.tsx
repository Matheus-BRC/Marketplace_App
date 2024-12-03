import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screen/home';
import { SignIn } from '../screen/signin';
import { Recover } from '../screen/recover';
import { Check } from '../screen/check';

const Stack = createStackNavigator();
 
export function AppRoutes() {
  return(
    <Stack.Navigator screenOptions={{headerShown:false}} >    
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Recover" component={Recover} />
      <Stack.Screen name="Check" component={Check} />
    </Stack.Navigator>
  );
}