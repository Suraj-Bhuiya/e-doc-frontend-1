import {
  Text,
  TouchableWithoutFeedback,
  TouchableHighlight,
  View,
  Image,
  Keyboard,
} from 'react-native'
import React from 'react'
import { styles } from './Search.styles'
import Svg, { Path } from 'react-native-svg'
import { Input } from '@ui-kitten/components'
import { useNavigation, useRoute } from '@react-navigation/native'
import IonIcon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import SearchIllus from '../../assets/search.png'

const Search = () => {
  const navigation = useNavigation()
  const route = useRoute()

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
              d="M0 260L18 263.8C36 267.7 72 275.3 108 276C144 276.7 180 270.3 216 258.8C252 247.3 288 230.7 324 211C360 191.3 396 168.7 432 187.2C468 205.7 504 265.3 522 295.2L540 325L540 0L522 0C504 0 468 0 432 0C396 0 360 0 324 0C288 0 252 0 216 0C180 0 144 0 108 0C72 0 36 0 18 0L0 0Z"
              fill="#598672"
              stroke-linecap="round"
              stroke-linejoin="miter"
            ></Path>
          </Svg>
          <Image style={styles.searchImg} source={SearchIllus} />
        </View>
        <View style={styles.searchBox}>
          <Text style={styles.h1}>Search </Text>
          <Text style={styles.h2}>users by UID...</Text>
          <Input
            style={styles.searchInput}
            size="large"
            placeholder="eg : UXXXXX"
          />
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
              color="#aaaaaa"
              size={30}
              name="account-outline"
              onPress={() => navigation.navigate('Profile')}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Search
