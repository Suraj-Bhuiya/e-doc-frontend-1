import { StatusBar } from 'expo-status-bar'
import { TouchableWithoutFeedback, Keyboard, Text, View } from 'react-native'
import { mapping, light as lightTheme } from '@eva-design/eva'
// import { Button, Layout } from '@ui-kitten/components';
import { ApplicationProvider } from '@ui-kitten/components'
import Landing from './screens/landing/Landing'
import React, { useEffect, useState } from 'react'
import Login from './screens/login/Login'
import Signup from './screens/signup/Signup'
import RootNavigation from './navigation/RootNavigation'
import * as Font from 'expo-font'
import { Provider } from 'react-redux'
import store from './store'
import { firebaseConfig } from './config/firebaseConfig'
import { initializeApp } from 'firebase/app'

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  useEffect(() => {
    loadFonts()
    initializeApp(firebaseConfig)
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
      <Provider store={store}>
        <ApplicationProvider mapping={mapping} theme={lightTheme}>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <RootNavigation />
          </TouchableWithoutFeedback>
        </ApplicationProvider>
      </Provider>
    )
  } else {
    return null
    // <Text>Hello</Text>
  }
}

export default App
