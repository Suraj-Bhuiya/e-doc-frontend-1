import React, { useEffect, useState } from 'react'

import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { set_reload_login } from '../actions/login/loginActions'
import { set_current_user_documents } from '../actions/document/documentActions'
import SplashScreen from '../screens/splashScreen/SplashScreen'
import Landing from '../screens/landing/Landing'
import LoginContainer from '../containers/login/LoginContainer'
import SignupContainer from '../containers/signup/SignupContainer'
import HomeContainer from '../containers/home/HomeContainer'
import ProfileContainer from '../containers/profile/ProfileContainer'
import EditProfileContainer from '../containers/editProfile/EditProfileContainer'
import Search from '../screens/search/Search'
import Content from './Content'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  StyleSheet,
  Dimensions,
  View,
  TouchableHighlight,
  Pressable,
} from 'react-native'
import IonIcon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import SearchResult from '../screens/searchResult/SearchResult'
import SearchResultContainer from '../containers/searchResult/SearchResultContainer'
import SearchContainer from '../containers/search/SearchContainer'
import DocDetailContainer from '../containers/docDetail/DocDetailContainer'
import ChooseLanguageContainer from '../containers/chooseLanguage/ChooseLanguageContainer'

const { Navigator, Screen } = createNativeStackNavigator()

const RootNavigation = ({
  login,
  set_reload_login,
  set_current_user_documents,
}) => {
  const [initialRoute, setInitialRoute] = useState(null)
  const [isSplash, setIsSpalsh] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsSpalsh(false)
    }, 3000)
  }, [])

  useEffect(() => {
    const getLocalStorage = async () => {
      try {
        const token = await AsyncStorage.getItem('E_DOC_TOKEN')
        if (token) {
          const loginData = await AsyncStorage.getItem('E_DOC_LOGIN')

          set_reload_login({ token, user: JSON.parse(loginData) })
          set_current_user_documents(JSON.parse(loginData).edocs)
          setInitialRoute('Home')
        } else {
          setInitialRoute('Landing')
        }
      } catch (e) {
        console.error(e)
      }
    }
    getLocalStorage()
  }, [])

  if (initialRoute) {
    return (
      <NavigationContainer>
        {/* <View style={styles.wrapper}> */}
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
          <Screen name="Search" children={() => <SearchContainer />} />
          <Screen name="Profile" children={() => <ProfileContainer />} />
          <Screen
            name="EditProfile"
            children={() => <EditProfileContainer />}
          />
          <Screen
            name="ChooseLanguage"
            children={() => <ChooseLanguageContainer />}
          />
          <Screen
            name="SearchResult"
            children={() => <SearchResultContainer />}
          />
          <Screen name="DocDetail" children={() => <DocDetailContainer />} />
        </Navigator>
        {/* <View style={styles.navigation}>
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
        </View> */}
        {/* </View> */}
      </NavigationContainer>
    )
  } else {
    return
  }
}

const mapStateToProps = (store) => {
  return {
    login: store.login,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    set_reload_login: (user) => {
      dispatch(set_reload_login(user))
    },
    set_current_user_documents: (payload) => {
      dispatch(set_current_user_documents(payload))
    },
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(RootNavigation)
