import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import DetailScreen from './DetailScreen';
import CropScreen from './CropScreen';
import AddProperty from './AddProperty';
import Profile from './Profile';

const Tab = createMaterialBottomTabNavigator();
const DetailStack = createStackNavigator();
const PropertyStack = createStackNavigator();
const CropStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const MainScreen = () => {
    return (
        <Tab.Navigator
        initialRouteName="Feed"
        activeColor="#fff"
        style={{ backgroundColor: 'tomato' }}
        >
        <Tab.Screen
            name="CropScreen"
            component={CropScreen}
            options={{
            tabBarLabel: 'Crop',
            tabBarColor: '#009387',
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="pine-tree-box" color={color} size={26} />
            ),
            }}
        />
        <Tab.Screen
            name="Detail"
            component={DetailStackScreen}
            options={{
            tabBarLabel: 'Checkout',
            tabBarColor: '#009387',
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account-details" color={color} size={26} />
            ),
            }}
        />
        <Tab.Screen
            name="Add Property"
            component={PropertyStackScreen}
            options={{
            tabBarLabel: 'Home',
            tabBarColor: '#009387',
            tabBarIcon: ({ color }) => (
                <MaterialIcons name="add" color={color} size={26} />
            ),
            }}
        />
        <Tab.Screen
            name="Profile"
            component={ProfileStackScreen}
            options={{
            tabBarLabel: 'Profile',
            tabBarColor: '#009387',
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account-circle" color={color} size={26} />
            ),
            }}
        />
        </Tab.Navigator>
    )
}

export default MainScreen;

const CropStackScreen = ({navigation}) => {
  return(
    <CropStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor: '#009387'
      },
      headerTitleStyle:{
        textAlign: 'center',
        color: 'white',
        flexGrow:1,
        alignSelf:'center',
      }
    }}>
      <CropStack.Screen 
        name="Home" 
        component={CropScreen}
        options={{
          title: 'Space for crop production',
          headerLeft: () => {
          <MaterialCommunityIcons 
            name="menu" 
            size={24} 
            color="black" 
            onPress={() => navigation.openDrawer()}
            />
          } 
        }} 
        />
    </CropStack.Navigator>
  )
}
const PropertyStackScreen = ({navigation}) => {
  return(
    <PropertyStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor: '#009387'
      },
      headerTitleStyle:{
        textAlign: 'center',
        color: 'white',
        flexGrow:1,
        alignSelf:'center',
      }
    }}>
      <PropertyStack.Screen 
        name="Home" 
        component={AddProperty}
        options={{
          title: 'Add Property',
          headerLeft: () => {
          <MaterialCommunityIcons 
            name="menu" 
            size={24} 
            color="black" 
            onPress={() => navigation.openDrawer()}
            />
          } 
        }} 
        />
    </PropertyStack.Navigator>
  )
}

const DetailStackScreen = ({navigation}) => {
  return(
    <DetailStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor: '#009387'
      },
      headerTitleStyle:{
        textAlign: 'center',
        color: 'white',
        flexGrow:1,
        alignSelf:'center',
      }
    }}>
      
      <DetailStack.Screen name="Detail" component={DetailScreen} />
    </DetailStack.Navigator>
  )
  }
  const ProfileStackScreen = ({navigation}) => {
    return(
      <ProfileStack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor: '#009387'
        },
        headerTitleStyle:{
          textAlign: 'center',
          color: 'white',
          flexGrow:1,
          alignSelf:'center',
        }
      }}>        
        <ProfileStack.Screen name="Profile" component={Profile} />
      </ProfileStack.Navigator>
    )
}