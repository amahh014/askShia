import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//screems
import HomeScreen from '../HomeScreen';
import Detail from '../src/screens/Detail';
import Profile from '../src/screens/Profile';
import AddPost from '../src/screens/AddPost';
import Login from '../src/screens/Login';
import Signup from '../src/screens/SignUp';

const HomeStack = createStackNavigator();
const Stack = createStackNavigator();

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
        <HomeStack.Screen name="Login" component={Login} />
        <HomeStack.Screen name="Signup" component={Signup} />
        <HomeStack.Screen name="AskShia" component={HomeScreen} />
        <HomeStack.Screen name="Detail" component={Detail} options={({route}) => ({
          title: route.params.username
        })}/>
    <HomeStack.Screen name="Profile" component={Profile} />
    <HomeStack.Screen name="Create Post" component={AddPost} options={{
      headerRight: () => (
        <TouchableOpacity
              style={styles.button}
              onPress={() => alert('This is a button!')}
        >
          <Text style={styles.text}>POST</Text>
        </TouchableOpacity>
      )
    }}/>
    </HomeStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  button: {
    left: -22
  },
  text: {
    fontSize: 18,
    fontWeight: 'normal',
    fontStyle: 'normal',
    color: '#0000ff'
  }
});