import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pokedex from './pokedex';
import Card from './card';
import Pokemon from './Pokemon';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Pokedex" component={Pokedex}  options={{headerTransparent:true,title:'',}}/>  
        <Stack.Screen name="Card" component={Card} options={{headerTransparent:true,title:'',}}/>  
        <Stack.Screen name="Pokemon" component={Pokemon} options={{headerTransparent:true,title:'',}}/> 
      </Stack.Navigator>
    </NavigationContainer>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fefeff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingHorizontal: '2%',
  },

});
