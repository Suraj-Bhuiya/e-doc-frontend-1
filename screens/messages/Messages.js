import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './Messages.styles'
import { useNavigation, useRoute } from '@react-navigation/native'

const Messages = () => {
  const navigation = useNavigation()

  const handle_chat = () => {
    console.log('ON PRESS DETECTED')
    navigation.navigate('Chat')
  }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.messageHeading}>Messages</Text>
      <View style={styles.main}>
        <ScrollView style={styles.messageList}>
          <TouchableOpacity
            style={styles.message}
            onPress={() => navigation.navigate('ChatPage')}
          >
            <View style={styles.avatarWrapper}>
              <Image
                style={styles.avatar}
                source={require('../../assets/logoIndia.jpg')}
              />
            </View>
            <View style={styles.messageContent}>
              <Text style={styles.messageTitle}>Government organization</Text>
              {/* <Text
                numberOfLines={1}
                // style={i % 2 === 0 ? styles.messageRead : styles.messageUnread}
                style={styles.messageUnread}
              >
                Couldn't verify document due to in com ple te evidances
              </Text> */}
            </View>
            <View style={styles.messageDetail}>
              {/* {i % 2 !== 0 && (
                <View style={styles.messageCount}>
                  <Text style={styles.messageCountText}>1</Text>
                </View>
              )} */}
              {/* <Text style={styles.messageTime}>06:20 PM</Text> */}
            </View>
          </TouchableOpacity>

          {/* <TouchableOpacity style={styles.message}>
            <View style={styles.avatarWrapper}>
              <Image
                style={styles.avatar}
                source={require('../../assets/avatar.png')}
              />
            </View>
            <View style={styles.messageContent}>
              <Text style={styles.messageTitle}>Hello There</Text>
              <Text numberOfLines={1} style={styles.messageRead}>
                Couldn't verify document due to in com ple te evidances
              </Text>
            </View>
            <View style={styles.messageDetail}>
              <View style={styles.messageCount}>
                <Text style={styles.messageCountText}>1</Text>
              </View>
              <Text style={styles.messageTime}>06:20 PM</Text>
            </View>
          </TouchableOpacity> */}
        </ScrollView>
      </View>
    </View>
  )
}

export default Messages
