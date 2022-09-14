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
} from 'react-native'
import { styles } from './Home.styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Avatar, Input, Card, Button } from '@ui-kitten/components'
import AvatarImg from '../../assets/favicon.png'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import IonIcon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import 'react-native-get-random-values'
import { v4 as uuid } from 'uuid'
import * as DocumentPicker from 'expo-document-picker'

const Home = ({ login, document, upload_document, delete_document }) => {
  const [uploadModal, setUploadModal] = useState(false)
  const [docName, setDocName] = useState('')
  const [file, setFile] = useState('')

  const navigation = useNavigation()
  const route = useRoute()

  useEffect(() => {
    console.log(login, 'FROM HOME')
  }, [login])

  const handle_set_doc = useCallback(async () => {
    try {
      const response = await DocumentPicker.getDocumentAsync({
        presentationStyle: 'fullScreen',
      })
      setFile(response)
      console.log(response)
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
    const blob = await getBlob(file.uri)
    const doc = {
      name: docName,
      file: file,
      blob: blob,
    }

    upload_document(doc, login)
  }

  useEffect(() => {
    console.log(document)
  }, [document])

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
                login?.user?.url
                  ? {
                      uri: login?.user?.url,
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
            />
          </View>
          <ScrollView>
            <View style={styles.cardList}>
              {document?.current_user_documents?.map((item) => {
                return (
                  <Card key={uuid()} style={styles.card}>
                    <View style={styles.cardContent}>
                      <View style={styles.cardLeft}>
                        <Text style={styles.docName}>{item.name}</Text>
                        <Text style={styles.docDate}>22 nov</Text>
                      </View>
                      <View style={styles.cardAction}>
                        <TouchableOpacity>
                          <FontAwesomeIcon
                            style={{ marginRight: 15 }}
                            size={25}
                            color="#3366ff"
                            name="edit"
                            onPress={() => console.log('pressed')}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <FontAwesomeIcon
                            size={25}
                            color="#ff3d71"
                            name="trash"
                            onPress={() => delete_document(item._id, login)}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </Card>
                )
              })}
            </View>
          </ScrollView>
        </View>
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
