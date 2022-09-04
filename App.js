import { StatusBar } from 'expo-status-bar'
import { TouchableWithoutFeedback, Keyboard, Text } from 'react-native'
import { mapping, light as lightTheme } from '@eva-design/eva'
// import { Button, Layout } from '@ui-kitten/components';
import { ApplicationProvider } from '@ui-kitten/components'
import Landing from './screens/landing/Landing'
import React, { useEffect, useState } from 'react'
import Login from './screens/login/Login'
import Signup from './screens/signup/Signup'
import RootNavigation from './navigation/RootNavigation'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
// import { AppLoading } from 'expo'

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  useEffect(() => {
    loadFonts()
  }, [])

  const loadFonts = async () => {
    await Font.loadAsync({
      'MontserratAlternates-BlackItalic': require('./assets/fonts/MontserratAlternates-BlackItalic.ttf'),
      'MontserratAlternates-Regular': require('./assets/fonts/MontserratAlternates-Regular.ttf'),
      'MontserratAlternates-Medium': require('./assets/fonts/MontserratAlternates-Medium.ttf'),
      'MontserratAlternates-Bold': require('./assets/fonts/MontserratAlternates-Bold.ttf'),
      'MontserratAlternates-SemiBold': require('./assets/fonts/MontserratAlternates-SemiBold.ttf'),
      'MontserratAlternates-Italic': require('./assets/fonts/MontserratAlternates-Italic.ttf'),
      'MontserratAlternates-LightItalic': require('./assets/fonts/MontserratAlternates-LightItalic.ttf'),
      'MontserratAlternates-MediumItalic': require('./assets/fonts/MontserratAlternates-MediumItalic.ttf'),
    })
    setFontsLoaded(true)
  }

  if (fontsLoaded) {
    return (
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <RootNavigation />
        </TouchableWithoutFeedback>
      </ApplicationProvider>
    )
  } else {
    return null
    // <Text>Hello</Text>
  }
}
