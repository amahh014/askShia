import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//screems
import HomeScreen from '../HomeScreen';
import Detail from '../src/screens/Detail';

const HomeStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer
    theme={{
        colors: {
            background: '#fff',
            card: '#fff',
            text: '#2DB02A',
            primary: '#fff',
        },
    }}>
    <HomeStack.Navigator>
        <HomeStack.Screen name="AskShia" component={HomeScreen} />
        <HomeStack.Screen name="Detail" component={Detail} />
    </HomeStack.Navigator>
    </NavigationContainer>
  );
}