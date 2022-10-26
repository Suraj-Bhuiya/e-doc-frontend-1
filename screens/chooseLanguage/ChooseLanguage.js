import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Radio } from '@ui-kitten/components'
import { styles } from './ChooseLanguage.styles'
import { useState } from 'react'

const ChooseLanguage = ({ login, set_language }) => {
  const navigation = useNavigation()
  const [currentLanguage, setCurrentLanguage] = useState('en')

  return (
    // <SafeAreaView>
    <View style={styles.wrapper}>
      <View style={styles.topbar}>
        <AntDesign
          size={30}
          name="arrowleft"
          onPress={() => navigation.navigate('Profile')}
          style={{ color: '#fff' }}
        />
        <Text style={styles.title}>Choose Language</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.list}>
          <View style={styles.listItem}>
            <Text style={styles.language}>English</Text>
            <Radio
              checked={login.language === 'en'}
              onChange={(nextChecked) => set_language('en')}
            />
          </View>
          <View style={styles.listItem}>
            <Text style={styles.language}>Hindi</Text>
            <Radio
              checked={login.language === 'hi'}
              onChange={(nextChecked) => set_language('hi')}
            />
          </View>
        </View>
      </View>
    </View>
    // </SafeAreaView>
  )
}

export default ChooseLanguage
