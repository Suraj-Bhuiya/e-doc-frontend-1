import React, { useState } from 'react'
import {
  View,
  Text,
  Image,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
  Modal,
} from 'react-native'
import LottieView from 'lottie-react-native'
import { styles } from './Login.styles'
import { useNavigation } from '@react-navigation/native'
import Svg, { Path } from 'react-native-svg'
import loginIllus from '../../assets/login.png'
import { Input, Button } from '@ui-kitten/components'
import { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = ({ login, do_login, set_reload_login, set_login_status }) => {
  const navigation = useNavigation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginMessage, setLoginMessage] = useState('')

  useEffect(() => {
    if (login.token) {
      navigation.navigate('Home')
    }
  }, [login])

  useEffect(() => {
    if (login.login_status === 'error') {
      setLoginMessage(true)
      alert('Wrong username or password')
    }
  }, [login])

  useEffect(() => {
    const getLocalStorage = async () => {
      try {
        const token = await AsyncStorage.getItem('E_DOC_TOKEN')
        if (token) {
          const loginData = await AsyncStorage.getItem('E_DOC_LOGIN')

          set_reload_login({ token, ...JSON.parse(loginData) })
          navigation.navigate('Home')
        }
      } catch (e) {
        console.error(e)
      }
    }

    getLocalStorage()
  }, [])

  const handle_login = () => {
    do_login({
      email,
      password,
    })
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {/* <ScrollView> */}
      <View style={styles.wrapper}>
        <View style={styles.top}>
          <Svg
            id="visual"
            viewBox={`0 0 ${Dimensions.get('screen').width} 960`}
            width="100%"
            height="960"
            version="1.1"
          >
            <Path
              d="M0 260L18 263.8C36 267.7 72 275.3 108 276C144 276.7 180 270.3 216 258.8C252 247.3 288 230.7 324 211C360 191.3 396 168.7 432 187.2C468 205.7 504 265.3 522 295.2L540 325L540 0L522 0C504 0 468 0 432 0C396 0 360 0 324 0C288 0 252 0 216 0C180 0 144 0 108 0C72 0 36 0 18 0L0 0Z"
              fill="#598672"
              stroke-linecap="round"
              stroke-linejoin="miter"
            ></Path>
            <View style={styles.h1Cont}>
              <Text style={styles.h1}>Login</Text>
            </View>
          </Svg>
          <Image style={styles.loginImg} source={loginIllus} />
        </View>
        <View style={styles.form}>
          <Input
            style={styles.input}
            label={() => <Text style={styles.inputLabel}>E-mail</Text>}
            size="large"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Input
            style={styles.input}
            label={() => <Text style={styles.inputLabel}>Password</Text>}
            size="large"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Button
            onPress={() => handle_login()}
            style={styles.btn}
            size="large"
          >
            Login
          </Button>
          <Text style={styles.sub}>
            Don&apos;t have an account?
            <Text
              onPress={() => navigation.navigate('Signup')}
              style={styles.link}
            >
              Sign up
            </Text>{' '}
          </Text>
        </View>
      </View>
      {/* </ScrollView> */}
    </TouchableWithoutFeedback>
  )
}

export default Login
