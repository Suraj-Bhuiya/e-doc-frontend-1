import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React, { useState, useCallback, useEffect } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { styles } from './AddDoc.styles'
import { Button, Input, Modal } from '@ui-kitten/components'
import * as DocumentPicker from 'expo-document-picker'
import LottieView from 'lottie-react-native'

const AddDoc = ({ login, document, upload_document, set_upload_status }) => {
  const [docName, setDocName] = useState('')
  const [file, setFile] = useState('')
  const [uploadMessage, setUploadMessage] = useState(false)

  const navigation = useNavigation()

  useEffect(() => {
    if (document?.upload_status === 'uploading') {
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
      console.error(err)
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

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.wrapper}>
        <Modal
          visible={uploadMessage}
          backdropStyle={styles.uploadMessageBackdrop}
          onBackdropPress={() => {
            setUploadMessage(false)
            set_upload_status('')
            navigation.goBack()
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
                    navigation.goBack()
                    set_upload_status('')
                  }}
                >
                  Ok
                </Button>
              </>
            )}
          </View>
        </Modal>

        <View style={styles.topbar}>
          <AntDesign
            size={30}
            name="arrowleft"
            onPress={() => navigation.goBack()}
            style={{ color: '#fff' }}
          />
          <Text style={styles.title}>Add Document</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.addDocHelpText}>
            To add a new doucment fill the details below
          </Text>
          <Input
            value={docName}
            onChangeText={(text) => setDocName(text)}
            label={() => <Text style={styles.inputLabel}>Document Name</Text>}
          />
          <Text style={styles.fileName}>{file.name || 'No file Choosen'}</Text>
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
          {/* </Pressable> */}
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default AddDoc
