import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from './screen/MainScreen';
import RootStackScreen from './screen/RootStackScreen';
import { ActivityIndicator, View } from 'react-native';
import { AuthContext } from './components/context';

const Drawer = createDrawerNavigator();

export default function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const authContext = useMemo( () => ({
    signIn: () => {
      setUserToken('abc');
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken('abc');
      setIsLoading(false);
    },
  }), []);

  useEffect(() => {
    setTimeout(
      () => {
        setIsLoading(false);
      }, 1000
    );
  }, [])

  if(isLoading){
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large"/>  
      </View>    
    )
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
      {
        userToken != null ? (
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={MainScreen} />
          </Drawer.Navigator>
        )
        :
        <RootStackScreen />
      }
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

