import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Animated, { FadeInDown } from 'react-native-reanimated'
import Octicons from 'react-native-vector-icons/Octicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { styles } from './SearchResult.styles'
import { useNavigation } from '@react-navigation/native'
import { Card } from '@ui-kitten/components'
import { v4 as uuid } from 'uuid'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import { useEffect } from 'react'
import moment from 'moment/moment'
import LottieView from 'lottie-react-native'
import NoResult from '../../assets/noResult.png'

const SearchResult = ({
  login,
  document,
  set_current_document,
  reset_user_documents,
  set_get_document_status,
}) => {
  const navigation = useNavigation()
  const [loading, setLoading] = useState(false)

  const handle_doc_detail = (doc) => {
    set_current_document(doc)
    navigation.navigate('DocDetail')
  }

  useEffect(() => {
    if (document.get_document_status === 'loading') {
      setLoading(true)
    } else {
      setLoading(false)
    }
  }, [document.get_document_status])

  // useEffect(() => {
  //   return () => {
  //     reset_user_documents()
  //   }
  // }, [])

  return (
    <View style={styles.wrapper}>
      <View style={styles.topbar}>
        <AntDesign
          size={30}
          name="arrowleft"
          onPress={() => navigation.navigate('Search')}
          style={{ color: '#fff' }}
        />
        <Text style={styles.title}>Alay Naru</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.documentTitle}>
          <Text style={styles.documentCount}>
            {document?.other_user_documents?.length < 10
              ? `0${document?.other_user_documents?.length}`
              : document?.other_user_documents?.length}
          </Text>
          <Text style={styles.documentSub}>Documents</Text>
        </View>
        <ScrollView style={styles.cardList}>
          {loading && (
            <View style={styles.loading}>
              <LottieView
                style={{ width: 250, height: 250 }}
                source={require('../../assets/loadingDocument.json')}
                autoPlay
                loop
              />
            </View>
          )}
          {!loading && document.other_user_documents.length === 0 && (
            <View style={styles.noDoc}>
              <Text style={styles.noDocText}>No Document To Show!!</Text>

              <Image style={styles.noDocImage} source={NoResult} />
            </View>
          )}
          {!loading &&
            document?.other_user_documents?.map((item, i) => {
              return (
                <Animated.View
                  key={item._id}
                  entering={FadeInDown.delay(100 * i).springify()}
                >
                  <Card
                    style={styles.card}
                    onPress={() => handle_doc_detail(item)}
                  >
                    <View style={styles.cardContent}>
                      <View style={styles.cardLeft}>
                        <Text style={styles.docName}>{item.name}</Text>
                        <Text style={styles.docDate}>
                          {moment(item.createdAt).format('ll')}
                        </Text>
                      </View>
                      <View style={styles.cardAction}>
                        <TouchableOpacity>
                          <Octicons
                            size={25}
                            color="#3366ff"
                            name="download"
                            onPress={() => console.log('pressed')}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </Card>
                </Animated.View>
              )
            })}
        </ScrollView>
      </View>
    </View>
  )
}

export default SearchResult
