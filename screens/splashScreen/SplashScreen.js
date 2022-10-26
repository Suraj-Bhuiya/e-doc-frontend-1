import { View, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import { styles } from './SplashScreen.styles'

const SplashScreen = () => {
  return (
    <View style={styles.wrapper}>
      <LottieView
        style={{ width: 200, height: 200 }}
        source={require('../../assets/locker.json')}
        autoPlay
        loop
      />
    </View>
  )
}

export default SplashScreen
