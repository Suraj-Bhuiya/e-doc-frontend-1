import React from 'react'

import {
  Text,
  TouchableWithoutFeedback,
  TouchableHighlight,
  View,
  Image,
  Keyboard,
} from 'react-native'
import { Button } from '@ui-kitten/components'
import Svg, { Path } from 'react-native-svg'
import { styles } from './Profile.styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import IonIcon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import AvatarImg from '../../assets/favicon.png'

const Profile = ({ login, logout }) => {
  const navigation = useNavigation()
  const route = useRoute()

  const handle_logout = () => {
    logout()
    // navigation.navigate('Landing')
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.wrapper}>
        <View style={styles.top}>
          <Svg
            id="visual"
            viewBox="0 0 100% 960"
            width="100%"
            height="960"
            version="1.1"
          >
            <Path
              d="M0 193L18 193.3C36 193.7 72 194.3 108 198.5C144 202.7 180 210.3 216 227.7C252 245 288 272 324 286.3C360 300.7 396 302.3 432 297.5C468 292.7 504 281.3 522 275.7L540 270L540 0L522 0C504 0 468 0 432 0C396 0 360 0 324 0C288 0 252 0 216 0C180 0 144 0 108 0C72 0 36 0 18 0L0 0Z"
              fill="#598672"
              stroke-linecap="round"
              stroke-linejoin="miter"
            ></Path>
          </Svg>
          <View style={styles.avatarWrapper}>
            <Image
              style={styles.avatar}
              source={
                login?.user?.url
                  ? {
                      uri: login?.user?.url,
                    }
                  : AvatarImg
              }
            />
          </View>
        </View>
        <Text style={styles.name}>{login?.user?.name}</Text>
        <Text style={styles.profession}>
          {login?.user?.profession || 'profession'}
        </Text>
        <View style={styles.content}>
          <Button
            onPress={() => handle_logout()}
            size="large"
            style={styles.logoutBtn}
            status="danger"
          >
            Log out
          </Button>
        </View>

        <View style={styles.navigation}>
          <View style={styles.navigationLeft}>
            <IonIcon
              color={route.name === 'Home' ? '#000' : '#aaaaaa'}
              size={30}
              name="home-outline"
              onPress={() => navigation.navigate('Home')}
            />
            <IonIcon
              color={route.name === 'Search' ? '#000' : '#aaaaaa'}
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
            <IonIcon color="#aaaaaa" size={30} name="chatbox-outline" />
            <MaterialCommunityIcon
              color={route.name === 'Profile' ? '#000' : '#aaaaaa'}
              size={30}
              name="account-outline"
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Profile
