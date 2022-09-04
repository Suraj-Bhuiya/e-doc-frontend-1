import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Landing from '../screens/landing/Landing'
import Login from '../screens/login/Login'
import Signup from '../screens/signup/Signup'
import Home from '../screens/home/Home'
import Search from '../screens/search/Search'
import Profile from '../screens/profile/Profile'

const { Navigator, Screen } = createNativeStackNavigator()

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Screen name="Landing" children={() => <Landing />} />
        <Screen name="Login" children={() => <Login />} />
        <Screen name="Signup" children={() => <Signup />} />
        <Screen name="Home" children={() => <Home />} />
        <Screen name="Search" children={() => <Search />} />
        <Screen name="Profile" children={() => <Profile />} />
      </Navigator>
    </NavigationContainer>
  )
}

export default RootNavigation
