import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/telas/Home';
import Ficha from './src/telas/Ficha';
import Jogo from './src/telas/Jogo';
import Login from './src/telas/Login';

import { Ionicons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

function Tabs(){
  return(
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        color= '#90d'
        size = 30
        if (route.name === 'Ficha') {
          iconName = focused ? 'copy' : 'copy-outline';
        }else if (route.name === 'Jogo') {
          iconName = focused ? 'game-controller' : 'game-controller-outline'; 
        }
        
        //aqui define os ícones que irão aparecer nas Tabs
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      labelStyle: {
        fontSize: 12},
      activeTintColor: '#3f64c7',
      inactiveTintColor: 'gray',      
    }}    
    >
      <Tab.Screen name= "Ficha" component={Ficha}></Tab.Screen>
      <Tab.Screen name= "Jogo" component={Jogo}></Tab.Screen>
    </Tab.Navigator>
  )
}

export default function App() {
  const Stack = createStackNavigator();

  return (
    
 <NavigationContainer>
 <Stack.Navigator initialRouteName='Login'>

   <Stack.Screen 
       name="Ficha" 
       component={Tabs}
       options={{
         headerShown: false         
       }}
       >

   </Stack.Screen>
   <Stack.Screen name="Login" component={Login} options={{headerShown: false}}></Stack.Screen>
   <Stack.Screen name="Home" component={Home} ></Stack.Screen>      
   <Stack.Screen name="Jogo" component={Jogo} ></Stack.Screen>
 </Stack.Navigator>
</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
