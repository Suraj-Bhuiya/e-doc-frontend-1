import React from 'react'
import { View, Text, TouchableHighlight, Pressable } from 'react-native'
import { StyleSheet, Dimensions } from 'react-native'
import IonIcon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import {
  useNavigation,
  useRoute,
  NavigationContainer,
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Landing from '../screens/landing/Landing'
import Search from '../screens/search/Search'
import LoginContainer from '../containers/login/LoginContainer'
import ProfileContainer from '../containers/profile/ProfileContainer'
import HomeContainer from '../containers/home/HomeContainer'
import SignupContainer from '../containers/signup/SignupContainer'

const { Navigator, Screen } = createNativeStackNavigator()

function Content(initialRoute) {
  const navigation = useNavigation()
  // const route = useRoute()

  return (
    // <NavigationContainer>
    <View style={styles.wrapper}>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={initialRoute}
      >
        <Screen name="Landing" children={() => <Landing />} />
        <Screen name="Login" children={() => <LoginContainer />} />
        <Screen name="Signup" children={() => <SignupContainer />} />
        <Screen name="Home" children={() => <HomeContainer />} />
        <Screen name="Search" children={() => <Search />} />
        <Screen name="Profile" children={() => <ProfileContainer />} />
      </Navigator>
      {useRoute().name !== 'Landing' && (
        <View style={styles.navigation}>
          <View style={styles.navigationLeft}>
            <IonIcon
              color="#000"
              size={30}
              name="home-outline"
              onPress={() => navigation.navigate('Home')}
            />
            <IonIcon
              color="#aaaaaa"
              size={30}
              name="search-outline"
              onPress={() => navigation.navigate('Search')}
            />
          </View>
          <TouchableHighlight onPress={() => null}>
            <View style={styles.navigationCenter}>
              <IonIcon color="#fff" size={30} name="add" />
            </View>
          </TouchableHighlight>

          <View style={styles.navigationRight}>
            <Pressable>
              <IonIcon color="#aaaaaa" size={30} name="chatbox-outline" />
            </Pressable>
            <MaterialCommunityIcon
              color="#aaaaaa"
              size={30}
              name="account-outline"
              onPress={() => navigation.navigate('Profile')}
            />
          </View>
        </View>
      )}
    </View>
    // </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    width: '100%',
    // position: 'relative',
  },
  navigation: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: Dimensions.get('screen').width,
    height: 60,
    paddingHorizontal: 40,
    // elevation: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },

  navigationCenter: {
    // position: 'absolute',
    alignSelf: 'center',
    backgroundColor: '#598672',
    width: 60,
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    overflow: 'hidden',
    marginTop: -60,
    elevation: 4,
  },

  navigationLeft: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '32%',
  },

  navigationRight: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '32%',
  },
})

export default Content
