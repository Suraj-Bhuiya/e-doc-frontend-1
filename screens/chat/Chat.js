import React from 'react'
import {
  TouchableWithoutFeedback,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import { styles } from './Chat.styles'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import { useState } from 'react'
import { useEffect } from 'react'
import moment from 'moment'

const Chat = ({ message, login, send_message, get_chat }) => {
  const [msg, setMsg] = useState('')

  const handle_send_msg = () => {
    send_message(msg, login)
  }

  useEffect(() => {
    if (login?.token) {
      get_chat(login)
    }
  }, [login.token])

  useEffect(() => {
    console.log(message, 'STORE MESSAGE')
    setMsg('')
  }, [message])

  return (
    <TouchableWithoutFeedback>
      <View style={styles.wrapper}>
        <View style={styles.topbar}>
          <AntDesign
            size={30}
            name="arrowleft"
            onPress={() => navigation.navigate('Message')}
            style={{ color: '#fff' }}
          />
          <Text style={styles.title}>Government organization</Text>
        </View>
        <View style={styles.flexContainer}>
          <View style={styles.chatFlex}>
            <ScrollView>
              {message?.chats?.map((item) => {
                if (item.toGovernment) {
                  return (
                    <View style={styles.me}>
                      <View style={styles.text}>
                        <Text style={styles.textContent}>{item.text}</Text>
                      </View>
                      <Text style={styles.date}>
                        {moment(item.createdAt).format('LT')}
                      </Text>
                    </View>
                  )
                } else {
                  return (
                    <View style={styles.from}>
                      <View style={styles.text}>
                        <Text style={styles.textContent}>{item.text}</Text>
                      </View>
                      <Text style={styles.date}>
                        {' '}
                        {moment(item.createdAt).format('LT')}
                      </Text>
                    </View>
                  )
                }
              })}
            </ScrollView>
          </View>
          {/* <Input
            style={styles.inputField}
            multiline={true}
            textStyle={styles.input}
            // value={docName}
            // onChangeText={(text) => setDocName(text)}
            // label={() => <Text style={styles.inputLabel}>Document Name</Text>}
          /> */}
          <View style={styles.inputField}>
            <TextInput
              multiline
              style={styles.input}
              placeholder="Send a message"
              value={msg}
              onChangeText={(text) => setMsg(text)}
            />
            <TouchableOpacity
              onPress={() => handle_send_msg()}
              style={styles.sendBtn}
            >
              <Feather
                size={20}
                name="send"
                // onPress={() => navigation.navigate('Message')}
                style={{ color: '#fff' }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Chat
