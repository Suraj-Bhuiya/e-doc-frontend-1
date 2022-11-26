import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './Messages.styles'

const Messages = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.messageHeading}>Messages</Text>
      <View style={styles.main}>
        <ScrollView style={styles.messageList}>
          {[1, 2, 3, 7, 7, 7, 7, 7, 7, 7, 7].map((item, i) => {
            return (
              <TouchableOpacity style={styles.message}>
                <View style={styles.avatarWrapper}>
                  <Image
                    style={styles.avatar}
                    source={require('../../assets/avatar.png')}
                  />
                </View>
                <View style={styles.messageContent}>
                  <Text style={styles.messageTitle}>John Doe</Text>
                  <Text
                    numberOfLines={1}
                    style={
                      i % 2 === 0 ? styles.messageRead : styles.messageUnread
                    }
                  >
                    Couldn't verify document due to in com ple te evidances
                  </Text>
                </View>
                <View style={styles.messageDetail}>
                  {i % 2 !== 0 && (
                    <View style={styles.messageCount}>
                      <Text style={styles.messageCountText}>1</Text>
                    </View>
                  )}
                  <Text style={styles.messageTime}>06:20 PM</Text>
                </View>
              </TouchableOpacity>
            )
          })}
          <TouchableOpacity style={styles.message}>
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
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  )
}

export default Messages
