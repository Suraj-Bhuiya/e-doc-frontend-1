import React, { useState, useCallback } from 'react'

import {
  Text,
  TouchableWithoutFeedback,
  TouchableHighlight,
  View,
  Image,
  Keyboard,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
import { Button } from '@ui-kitten/components'
import Svg, { Path } from 'react-native-svg'
import { styles } from './Profile.styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import IonIcon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import AvatarImg from '../../assets/avatar.png'
import * as DocumentPicker from 'expo-document-picker'

const Profile = ({ login, logout, upload_profile_pic }) => {
  const navigation = useNavigation()
  const route = useRoute()
  const [file, setFile] = useState('')

  const handle_logout = () => {
    logout()
    navigation.navigate('Landing')
  }

  const getBlob = async (uri) => {
    const response = await fetch(uri)
    const blob = await response.blob()

    return blob
  }

  const handle_upload_profile_pic = async () => {
    const blob = await getBlob(file.uri)
    const doc = {
      file: file,
      blob: blob,
    }
    upload_profile_pic(doc, login)
  }

  const handle_set_doc = useCallback(async () => {
    // try {
    const response = await DocumentPicker.getDocumentAsync({
      presentationStyle: 'fullScreen',
    })
    setFile(response)
    console.log('helloasdsa')
    handle_upload_profile_pic()
    // const blob = await getBlob(file.uri)
    // const doc = {
    //   file: response,
    //   blob: blob,
    // }
    // upload_profile_pic(doc, login)
    // } catch (err) {
    //   console.error(err, 'Form handle_set_doc')
    // }
  }, [])

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.wrapper}>
        <View style={styles.top}>
          <Svg
            id="visual"
            viewBox={`0 0 ${Dimensions.get('screen').width} 960`}
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
                login?.user?.photo
                  ? {
                      uri: login?.user?.photo,
                    }
                  : AvatarImg
              }
            />
            <TouchableOpacity>
              <View style={styles.editIcon}>
                <MaterialIcon
                  size={20}
                  color="#fff"
                  name="edit"
                  onPress={() => handle_set_doc()}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.name}>{login?.user?.name}</Text>
        <Text style={styles.profession}>
          {login?.user?.profession || '....'}
        </Text>

        <View style={styles.content}>
          <View style={styles.list}>
            <TouchableOpacity
              onPress={() => navigation.navigate('EditProfile')}
            >
              <View style={styles.listItem}>
                <View style={styles.flex}>
                  <MaterialIcon size={25} color="#666" name="edit" />
                  <Text style={styles.listText}>Edit profile</Text>
                </View>

                <MaterialIcon size={40} color="#9e9e9e" name="chevron-right" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('ChooseLanguage')}
            >
              <View style={styles.listItem}>
                <View style={styles.flex}>
                  <MaterialIcon size={25} color="#666" name="language" />
                  <Text style={styles.listText}>Change Language</Text>
                </View>
                <MaterialIcon size={40} color="#9e9e9e" name="chevron-right" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.listItem}>
                <View style={styles.flex}>
                  <Octicons size={25} color="#666" name="thumbsup" />
                  <Text style={styles.listText}>Rate Us</Text>
                </View>
                <MaterialIcon size={40} color="#9e9e9e" name="chevron-right" />
              </View>
            </TouchableOpacity>
          </View>
          <Button
            onPress={() => handle_logout()}
            size="large"
            style={styles.logoutBtn}
            status="danger"
          >
            Log out
          </Button>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Profile
