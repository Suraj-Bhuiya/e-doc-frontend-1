import React from 'react'
import { Text, View, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from './Landing.styles'
import { Button } from '@ui-kitten/components'
import Svg, { Path } from 'react-native-svg'
import uploadIllus from '../../assets/upload.png'

const Landing = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.wrapper}>
      <Svg
        id="visual"
        viewBox="0 0 100% 860"
        width="100%"
        height="860"
        version="1.1"
      >
        <Path
          d="M0 392L45 419.5C90 447 180 502 270 523.3C360 544.7 450 532.3 495 526.2L540 520L540 0L495 0C450 0 360 0 270 0C180 0 90 0 45 0L0 0Z"
          fill="#598672"
          strokeLinecap="round"
          strokeLinejoin="miter"
        ></Path>
        <View style={styles.txtCont}>
          <Text style={styles.h1}>E-Doc</Text>
          <Text style={styles.sub}>Store any document.</Text>
          <Text style={styles.sub}>Get it any time any place.</Text>

          <Image style={styles.uploadImage} source={uploadIllus} />
        </View>
      </Svg>

      <View style={styles.cta}>
        <Button
          size="giant"
          style={styles.ctaBtn}
          onPress={() => navigation.navigate('Home')}
        >
          <Text>Get Started</Text>
        </Button>
      </View>
    </View>
  )
}

export default Landing
