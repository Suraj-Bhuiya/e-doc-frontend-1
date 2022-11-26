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
import TabNavigator from './TabNavigation'
import AddDocContainer from '../containers/addDocContainer/AddDocContainer'

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
          // set_current_user_documents(JSON.parse(loginData).edocs)
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
        <Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={initialRoute}
        >
          <Screen name="Landing" children={() => <Landing />} />
          <Screen name="Login" children={() => <LoginContainer />} />
          <Screen name="Signup" children={() => <SignupContainer />} />
          <Screen name="Home" children={() => <TabNavigator />} />

          {/* <Screen name="Search" children={() => <SearchContainer />} />
          <Screen name="Profile" children={() => <ProfileContainer />} /> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(RootNavigation)
