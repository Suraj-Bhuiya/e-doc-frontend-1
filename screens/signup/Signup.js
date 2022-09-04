import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from './Signup.styles'
import Svg, { Path } from 'react-native-svg'
import signIllus from '../../assets/signup.png'
import { Input, Button } from '@ui-kitten/components'

const Signup = () => {
  const navigation = useNavigation()
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView>
        <View style={styles.wrapper}>
          <View style={styles.top}>
            <Svg
              id="visual"
              viewBox="0 0 100% 960"
              width="100%"
              height="960"
              version="1.1"
            >
              <Path
                d="M0 309L18 284.2C36 259.3 72 209.7 108 198.5C144 187.3 180 214.7 216 244.3C252 274 288 306 324 324.7C360 343.3 396 348.7 432 329.5C468 310.3 504 266.7 522 244.8L540 223L540 0L522 0C504 0 468 0 432 0C396 0 360 0 324 0C288 0 252 0 216 0C180 0 144 0 108 0C72 0 36 0 18 0L0 0Z"
                fill="#598672"
                strokeLinecap="round"
                strokeLinejoin="miter"
              ></Path>
              <View style={styles.h1Cont}>
                <Text style={styles.h1}>Sign Up</Text>
              </View>
            </Svg>
            <Image style={styles.signupImg} source={signIllus} />
          </View>
          <View style={styles.form}>
            <Input
              style={styles.input}
              label={() => <Text style={styles.inputLabel}>Full Name</Text>}
              size="large"
            />
            <Input
              style={styles.input}
              label={() => <Text style={styles.inputLabel}>E-mail</Text>}
              size="large"
              keyboardType="email-address"
            />
            <Input
              style={styles.input}
              label={() => <Text style={styles.inputLabel}>Password</Text>}
              size="large"
              secureTextEntry={true}
            />
            <Input
              style={styles.input}
              label={() => (
                <Text style={styles.inputLabel}>Confirm Password</Text>
              )}
              size="large"
              secureTextEntry={true}
            />
            <Button style={styles.btn} size="large">
              Sign Up
            </Button>
            <Text style={styles.sub}>
              Already have an account?&nbsp;
              <Text
                onPress={() => navigation.navigate('Login')}
                style={styles.link}
              >
                Login
              </Text>{' '}
            </Text>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  )
}

export default Signup
