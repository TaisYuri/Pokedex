import React from 'react';
import {createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Search } from '../pages/Search';
import { Home } from '../pages/Home';
import { Introduction } from '../pages/Introduction';
import { FeaturePokemon } from '../pages/FeaturePokemon';
import { PokeCards } from '../pages/PokeCards';
import Feather from 'react-native-vector-icons/Feather'

export function Routes() {
    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator initialRouteName='Introduction'>
            <Stack.Screen name='Home' component={TabScreen} options={{ headerShown: false}}/>
            <Stack.Screen name='Search' component={Search} options={{ headerShown: false}}/>
            <Stack.Screen name='Introduction' component={Introduction} options={{ headerShown: false}}/>
            <Stack.Screen name='FeaturePokemon' component={FeaturePokemon} options={{ headerShown: false}}/>
            <Stack.Screen name='PokeCards' component={PokeCards} options={{ headerShown: false}}/>
        </Stack.Navigator>


    )
}

function TabScreen() {
    const Tab = createBottomTabNavigator();

    return (
      <Tab.Navigator>
       <Tab.Screen name='Home' component={Home} options={{ headerShown: false, tabBarIcon: ({ focused, color, size }) => { return (<Feather name='home' color={color} size={size} />)}}} />
       <Tab.Screen name='Search' component={Search} options={{ headerShown: false, tabBarIcon: ({ focused, color, size }) => { return (<Feather name='search' color={color} size={size} />)}}} />
         <Tab.Screen name='Cards' component={PokeCards} options={{ headerShown: false, tabBarIcon: ({ focused, color, size }) => { return (<Feather name='grid' color={color} size={size} />)}}} />
      </Tab.Navigator>
    );
  }


