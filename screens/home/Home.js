import React, { useEffect, useState, useCallback } from 'react'
import {
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
  PermissionsAndroid,
  Platform,
  Alert,
  Linking,
} from 'react-native'
import Animated, { FadeInDown } from 'react-native-reanimated'
import { WebView } from 'react-native-webview'

import { styles } from './Home.styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Input, Card, Button, Modal } from '@ui-kitten/components'
import AvatarImg from '../../assets/avatar.png'
import NoResult from '../../assets/noResult.png'

import AntDesign from 'react-native-vector-icons/AntDesign'
import Octicons from 'react-native-vector-icons/Octicons'
import 'react-native-get-random-values'
import { v4 as uuid } from 'uuid'
import * as DocumentPicker from 'expo-document-picker'
import moment from 'moment'
import * as MediaLibrary from 'expo-media-library'
import * as FileSystem from 'expo-file-system'
import * as Permissions from 'expo-permissions'
import LottieView from 'lottie-react-native'

const Home = ({
  login,
  document,
  upload_document,
  delete_document,
  get_user_documents,
  set_current_document,
  set_upload_status,
}) => {
  const [uploadModal, setUploadModal] = useState(false)
  const [docName, setDocName] = useState('')
  const [file, setFile] = useState('')
  const [filteredList, setFilteredList] = useState([])
  const [searchWord, setSearchWord] = useState('')

  const navigation = useNavigation()

  useEffect(() => {
    get_user_documents(login?.user?.uid, login)

    return () => {
      setSearchWord('')
    }
  }, [])

  const handle_doc_detail = (doc) => {
    set_current_document(doc)
    navigation.navigate('DocDetail')
  }

  useEffect(() => {
    if (searchWord === '') {
      setFilteredList(document.current_user_documents)
    } else {
      let tmp = document.current_user_documents
      tmp = tmp.filter((doc) => doc.name.includes(searchWord))

      setFilteredList(tmp)
    }
  }, [searchWord, document])

  const downloadFile = (uri, name) => {
    let fileUri = FileSystem.documentDirectory + `${name}.pdf`
    console.log('FILEURI', fileUri)
    FileSystem.downloadAsync(uri, fileUri)
      .then(({ uri }) => {
        console.log('URI', uri)
        // Linking.openURL(uri)
        saveFile(uri)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const saveFile = async (fileUri) => {
    const { status } = await MediaLibrary.requestPermissionsAsync()
    console.log('status', status)
    if (status === 'granted') {
      const asset = await MediaLibrary.createAssetAsync(fileUri).catch((err) =>
        console.log('ERROR', err)
      )
      console.log('ASSET', asset)

      await MediaLibrary.createAlbumAsync('Download', asset, false)
    }
  }

  // const downloadFile = async (uri) => {
  //   const fileUri = `${FileSystem.documentDirectory}filenami.pdf`
  //   const downloadedFile = await FileSystem.downloadAsync(uri, fileUri)
  //   if (downloadedFile.status === 200) {
  //     // handleError()
  //     const perm = await Permissions.askAsync(Permissions.MEDIA_LIBRARY)
  //     if (perm.status != 'granted') {
  //       return
  //     }

  //     try {
  //       const asset = await MediaLibrary.createAssetAsync(downloadedFile.uri)
  //       const album = await MediaLibrary.getAlbumAsync('Download')
  //       if (album == null) {
  //         await MediaLibrary.createAlbumAsync('Download', asset, false)
  //       } else {
  //         console.log('WORKING')
  //         await MediaLibrary.addAssetsToAlbumAsync([asset], album, false)
  //       }
  //     } catch (e) {
  //       // handleError(e)
  //       console.log(e, downloadFile, 'ERROR')
  //     }
  //   }

  //   if (downloadedFile.status != 200) {
  //     // handleError()
  //     console.log('ERROR')
  //   }
  // }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
        setUploadModal(false)
      }}
    >
      <View style={styles.wrapper}>
        <View style={styles.avatarCont}>
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
          </View>
          <View style={styles.name}>
            <Text style={styles.h3}>
              Hallo! {login?.user?.name?.split(' ')[0]}
            </Text>
            <Text style={styles.welcomeText}>Welcome Back</Text>
          </View>
        </View>
        <View style={styles.main}>
          <View style={styles.searchBar}>
            <Input
              size="large"
              style={styles.searchInput}
              placeholder="Search by document name"
              value={searchWord}
              onChangeText={(text) => setSearchWord(text)}
              accessoryRight={
                <AntDesign size={25} color="#BDBDBD" name="search1" />
              }
            />
          </View>
          <ScrollView style={styles.cardList}>
            {filteredList.length === 0 && (
              <View style={styles.noDoc}>
                <Text style={styles.noDocText}>No Document To Show!!</Text>

                <Image style={styles.noDocImage} source={NoResult} />
              </View>
            )}
            {filteredList.length !== 0 &&
              filteredList?.map((item, i) => {
                return (
                  <Animated.View
                    key={item._id}
                    entering={FadeInDown.delay(100 * i).springify()}
                  >
                    <Card
                      style={styles.card}
                      onPress={() => handle_doc_detail(item)}
                    >
                      <View style={styles.cardContent}>
                        <View style={styles.cardLeft}>
                          <Text style={styles.docName}>{item.name}</Text>
                          <Text style={styles.docDate}>
                            {moment(item.createdAt).format('ll')}
                          </Text>
                        </View>
                        <View style={styles.cardAction}>
                          <TouchableOpacity onPress={() => null}>
                            <Octicons
                              style={{ marginRight: 15 }}
                              size={25}
                              color="#3366ff"
                              name="download"
                              // onPress={() => downloadFile(item.url, item.name)}
                              onPress={() => Linking.openURL(item.url)}
                            />
                          </TouchableOpacity>
                          {/* <TouchableOpacity>
                          <FontAwesomeIcon
                            size={25}
                            color="#ff3d71"
                            name="trash"
                            onPress={() => delete_document(item._id, login)}
                          />
                        </TouchableOpacity> */}
                        </View>
                      </View>
                    </Card>
                  </Animated.View>
                )
              })}
          </ScrollView>
        </View>

        {/* <View style={styles.navigation}>
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
          <TouchableHighlight onPress={() => setUploadModal(true)}>
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
              onPress={() => navigation.navigate('Profile')}
            />
          </View>
        </View> */}
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Home
