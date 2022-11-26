import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useNavigation } from '@react-navigation/native'

import HomeContainer from '../containers/home/HomeContainer'
import SearchContainer from '../containers/search/SearchContainer'
import ProfileContainer from '../containers/profile/ProfileContainer'
import { Touchable, TouchableOpacity, View } from 'react-native'
import IonIcon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import AddDocContainer from '../containers/addDocContainer/AddDocContainer'
import MessagesContainer from '../containers/messages/MessagesContainer'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  const navigation = useNavigation()

  return (
    <Tab.Navigator
      initialRouteName="Home2"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          height: 60,
          //   backgroundColor: '#598672',
          //   borderTopLeftRadius: 30,
          //   borderTopRightRadius: 30,
          elevation: 10,
          borderWidth: 1,
          borderColor: '#eee',
        },
      }}
      //   tabBar={{ showLabel: false }}
      //   tabBarOptions={{
      //     showLabel: false,
      //   }}
    >
      <Tab.Screen
        name="Home2"
        component={HomeContainer}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <IonIcon
                  color={focused ? '#598672' : '#aaaaaa'}
                  size={focused ? 35 : 28}
                  name="home-outline"
                  //   onPress={() => navigation.navigate('Home')}
                />
              </View>
            )
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchContainer}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <IonIcon
                  color={focused ? '#598672' : '#aaaaaa'}
                  size={focused ? 35 : 28}
                  name="search-outline"
                />
              </View>
            )
          },
        }}
      />
      <Tab.Screen
        name="AddDoc"
        component={AddDocContainer}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignSelf: 'center',
                  backgroundColor: '#598672',
                  width: 60,
                  height: 60,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 50,
                  overflow: 'hidden',
                  marginTop: -50,
                  elevation: 4,
                }}
              >
                <IonIcon color="#fff" size={30} name="add" />
              </View>
            )
          },
        }}
      />
      <Tab.Screen
        name="Chat"
        component={MessagesContainer}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <IonIcon
                  color={focused ? '#598672' : '#aaaaaa'}
                  size={focused ? 35 : 28}
                  name="chatbox-outline"
                />
              </View>
            )
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileContainer}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <MaterialCommunityIcon
                  color={focused ? '#598672' : '#aaaaaa'}
                  size={focused ? 35 : 28}
                  name="account-outline"
                />
              </View>
            )
          },
        }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator
