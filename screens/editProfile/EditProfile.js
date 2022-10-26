import { View, Text, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { styles } from './EditProfile.styles'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Input, Button } from '@ui-kitten/components'

const EditProfile = ({ login, update_profile }) => {
  const navigation = useNavigation()
  const [name, setName] = useState('')
  const [profession, setProfession] = useState('')
  const [contactNo, setContactNo] = useState('')
  const [bio, setBio] = useState('')

  useEffect(() => {
    setName(login.user.name)
    setProfession(login.user.profession)
    setContactNo(login.user.phoneNo)
    setBio(login.user.bio)
  }, [login])

  const handle_update_profile = () => {
    const data = {
      name,
      profession,
      phoneNo: contactNo,
      bio,
    }

    update_profile(data, login)
  }

  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        <View style={styles.topbar}>
          <AntDesign
            size={30}
            name="arrowleft"
            onPress={() => navigation.navigate('Profile')}
          />
          <Text style={styles.title}>Edit Profile</Text>
        </View>
        <View style={styles.content}>
          <Input
            style={styles.input}
            label={() => <Text style={styles.inputLabel}>Full Name</Text>}
            size="large"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <Input
            style={styles.input}
            label={() => <Text style={styles.inputLabel}>Profession</Text>}
            size="large"
            value={profession}
            onChangeText={(text) => setProfession(text)}
          />
          <Input
            style={styles.input}
            label={() => <Text style={styles.inputLabel}>Contact No.</Text>}
            size="large"
            value={contactNo}
            onChangeText={(text) => setContactNo(text)}
          />
          <Input
            multiline={true}
            textStyle={{ minHeight: 64 }}
            style={styles.input}
            label={() => <Text style={styles.inputLabel}>Bio</Text>}
            size="large"
            value={bio}
            onChangeText={(text) => setBio(text)}
          />
          <Button
            style={styles.updateBtn}
            onPress={() => handle_update_profile()}
          >
            Update
          </Button>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default EditProfile
