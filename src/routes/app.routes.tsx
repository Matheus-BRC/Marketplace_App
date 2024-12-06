import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screen/home';
import { SignIn } from '../screen/signin';
import { Recover } from '../screen/recover';
import { Check } from '../screen/check';
import { AddressRegister } from '../screen/address_register';
import { UserRegister } from '../screen/user_register';
import { PhotoRegister } from '../screen/photo_register';
import { CompletedRegister } from '../screen/completed_register';
import { HomePage } from '../screen/home_page';

const Stack = createStackNavigator();
 
export function AppRoutes() {
  return(
    <Stack.Navigator screenOptions={{headerShown:false}} >    
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Recover" component={Recover} />
      <Stack.Screen name="Check" component={Check} />
      <Stack.Screen name="AddressRegister" component={AddressRegister} />
      <Stack.Screen name="UserRegister" component={UserRegister} />
      <Stack.Screen name="PhotoRegister" component={PhotoRegister} />
      <Stack.Screen name="CompletedRegister" component={CompletedRegister} />
      <Stack.Screen name="HomePage" component={HomePage} />
    </Stack.Navigator>
  );
}