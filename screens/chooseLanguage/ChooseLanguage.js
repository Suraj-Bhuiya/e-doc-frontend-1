import { View, Text, TouchableHighlight, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Radio } from '@ui-kitten/components'
import { styles } from './ChooseLanguage.styles'
import { useState } from 'react'
import { useEffect } from 'react'

const LANGUAGES = [
  {
    name: 'English',
    code: 'en',
  },
  {
    name: 'Hindi',
    code: 'hi',
  },
  {
    name: 'Bangla',
    code: 'bn',
  },
  {
    name: 'Urdu',
    code: 'ur',
  },
  {
    name: 'Kanada',
    code: 'kn',
  },
  {
    name: 'Tamil',
    code: 'ta',
  },
]

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
        <Text style={styles.languageHelpText}>
          Select a language for translation. This tells us which language you
          understand well.
        </Text>
        <View style={styles.list}>
          {LANGUAGES?.map((item) => {
            return (
              <TouchableHighlight
                key={item.code}
                style={styles.listItem}
                underlayColor={'#eee'}
                onPress={() => set_language(item.code)}
              >
                <>
                  <Text style={styles.language}>{item.name}</Text>
                  <Radio
                    checked={login.language === item.code}
                    onChange={(nextChecked) => set_language(item.code)}
                  />
                </>
              </TouchableHighlight>
            )
          })}
        </View>
      </View>
    </View>
    // </SafeAreaView>
  )
}

export default ChooseLanguage
