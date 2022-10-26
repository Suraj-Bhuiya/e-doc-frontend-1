import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './DocDetail.styles'
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Input, Button, Card, Divider } from '@ui-kitten/components'
import moment from 'moment'

const DocDetail = ({ login, document, delete_document }) => {
  const navigation = useNavigation()
  const [docName, setDocName] = useState('')
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    setDocName(document?.current_document?.name)
  }, [document])

  const handle_delete_doc = () => {
    delete_document(document?.current_document?._id, login)
    navigation.navigate('Home')
  }

  return (
    <TouchableWithoutFeedback>
      <View style={styles.wrapper}>
        <View style={styles.topbar}>
          <AntDesign
            size={30}
            name="arrowleft"
            onPress={() => navigation.navigate('Profile')}
          />
          <Text style={styles.title}>Document Details</Text>
        </View>
        <View style={styles.flexContainer}>
          <Input
            style={styles.input}
            label={() => <Text style={styles.inputLabel}>Document Name</Text>}
            size="large"
            keyboardType="email-address"
            value={docName}
            onChangeText={(text) => setDocName(text)}
          />
          <Button style={styles.editBtn}>Edit</Button>
        </View>
        <Card style={{ width: '90%' }}>
          <View style={styles.cardDetail}>
            <View style={styles.part}>
              <Text style={styles.docDetailTitle}>Added On</Text>
              <Text style={styles.docDetailDate}>
                {moment(document?.current_document?.createdAt).format('ll')}{' '}
              </Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.part}>
              <Text style={styles.docDetailTitle}>Verified On</Text>
              <Text style={styles.docDetailDate}>
                {moment(Date.now()).format('ll')}{' '}
              </Text>
            </View>
          </View>
        </Card>
        <Button
          style={styles.deleteBtn}
          status="danger"
          onPress={() => handle_delete_doc()}
        >
          Delete
        </Button>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default DocDetail
