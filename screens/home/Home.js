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
} from 'react-native'
import { styles } from './Home.styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Input, Card, Button, Modal } from '@ui-kitten/components'
import AvatarImg from '../../assets/avatar.png'

import IonIcon from 'react-native-vector-icons/Ionicons'
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
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
  const [uploadMessage, setUploadMessage] = useState(false)

  const navigation = useNavigation()
  const route = useRoute()

  useEffect(() => {
    get_user_documents(login.user.uid, login)
  }, [])

  useEffect(() => {
    if (document.upload_status === 'uploading') {
      setUploadMessage(true)
    }
  }, [document])

  const handle_set_doc = useCallback(async () => {
    try {
      const response = await DocumentPicker.getDocumentAsync({
        presentationStyle: 'fullScreen',
      })
      setFile(response)
    } catch (err) {
      console.warn(err)
    }
  }, [])

  const getBlob = async (uri) => {
    const response = await fetch(uri)
    const blob = await response.blob()

    return blob
  }

  const handle_upload_document = async () => {
    setUploadModal(false)
    const blob = await getBlob(file.uri)
    const doc = {
      name: docName,
      file: file,
      blob: blob,
    }

    upload_document(doc, login)
  }

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
    FileSystem.downloadAsync(uri, fileUri)
      .then(({ uri }) => {
        saveFile(uri)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const saveFile = async (fileUri) => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    if (status === 'granted') {
      const asset = await MediaLibrary.createAssetAsync(fileUri)

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
            <Text style={styles.h3}>Hi {login?.user?.name?.split(' ')[0]}</Text>
          </View>
        </View>
        <View style={styles.main}>
          <View style={styles.searchBar}>
            <Input
              size="large"
              style={styles.searchInput}
              placeholder="Search by doc name"
              value={searchWord}
              onChangeText={(text) => setSearchWord(text)}
            />
          </View>
          <ScrollView>
            <View style={styles.cardList}>
              {filteredList.length === 0 && (
                <View style={styles.noDoc}>
                  <LottieView
                    style={{ width: 250, height: 250 }}
                    source={require('../../assets/noDocuments.json')}
                    // autoPlay
                    // loop
                  />
                </View>
              )}
              {filteredList.length !== 0 &&
                filteredList?.map((item) => {
                  return (
                    <Card
                      key={uuid()}
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
                              onPress={() => downloadFile(item.url, item.name)}
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
                  )
                })}
            </View>
          </ScrollView>
        </View>
        <Modal
          visible={uploadMessage}
          backdropStyle={styles.uploadMessageBackdrop}
          onBackdropPress={() => {
            setUploadMessage(false)
            set_upload_status('')
          }}
        >
          <View style={styles.uploadMessage}>
            {document.upload_status === 'error' && (
              <>
                <LottieView
                  style={{ width: 100, height: 100 }}
                  source={require('../../assets/error.json')}
                  autoPlay
                  loop
                />
                <Text style={styles.uploadText}>Something Went Wrong!</Text>
                <Button
                  onPress={() => {
                    setUploadMessage(false)
                    set_upload_status('')
                  }}
                >
                  Ok
                </Button>
              </>
            )}

            {document.upload_status === 'uploading' && (
              <>
                <LottieView
                  style={{ width: 100, height: 100 }}
                  source={require('../../assets/uploading.json')}
                  autoPlay
                  loop
                />
                <Text style={styles.uploadText}>Uploading...</Text>
              </>
            )}
            {document.upload_status === 'uploaded' && (
              <>
                <LottieView
                  style={{ width: 100, height: 100 }}
                  source={require('../../assets/tick.json')}
                  autoPlay
                  loop
                />
                <Text style={styles.uploadText}>Uploaded</Text>
                <Button
                  onPress={() => {
                    setUploadMessage(false)
                    set_upload_status('')
                  }}
                >
                  Ok
                </Button>
              </>
            )}
          </View>
        </Modal>
        {uploadModal && (
          <View
            style={styles.uploadModalWrapper}
            onPress={() => setUploadModal(false)}
          >
            <View
              style={styles.uploadModal}
              onStartShouldSetResponder={(event) => true}
              onTouchEnd={(e) => {
                e.stopPropagation()
              }}
            >
              <Pressable
                style={styles.uploadModalInner}
                onPress={() => Keyboard.dismiss()}
              >
                <View style={styles.bar} />
                <Text style={styles.h2}>Upload a new Document</Text>
                <Input
                  value={docName}
                  onChangeText={(text) => setDocName(text)}
                  label={() => (
                    <Text style={styles.inputLabel}>Document Name</Text>
                  )}
                />
                <Text style={styles.fileName}>
                  {file.name || 'No file Choosen'}
                </Text>
                <Button
                  status="success"
                  style={styles.chooseFileBtn}
                  onPress={handle_set_doc}
                >
                  Choose File
                </Button>
                <Button
                  onPress={() => handle_upload_document()}
                  size="large"
                  style={styles.uploadBtn}
                >
                  Upload
                </Button>
              </Pressable>
            </View>
          </View>
        )}

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
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Home
