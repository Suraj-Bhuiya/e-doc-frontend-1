import React from 'react'
import {
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import { styles } from './Home.styles'
import { useNavigation } from '@react-navigation/native'
import { Avatar, Input, Card, Button } from '@ui-kitten/components'
import AvatarImg from '../../assets/favicon.png'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import IonIcon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const Home = () => {
  const navigation = useNavigation()
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.wrapper}>
        <View style={styles.avatarCont}>
          <View style={styles.avatarWrapper}>
            <Image source={AvatarImg} />
          </View>
          <View style={styles.name}>
            <Text style={styles.h3}>Hi Alay</Text>
          </View>
        </View>
        <View style={styles.main}>
          <View style={styles.searchBar}>
            <Input
              size="large"
              style={styles.searchInput}
              placeholder="Search by doc name"
            />
          </View>
          <ScrollView>
            <View style={styles.cardList}>
              <Card style={styles.card}>
                <View style={styles.cardContent}>
                  <View style={styles.cardLeft}>
                    <Text style={styles.docName}>Adhar Card</Text>
                    <Text style={styles.docDate}>22 nov</Text>
                  </View>
                  <View style={styles.cardAction}>
                    <TouchableOpacity>
                      <FontAwesomeIcon
                        style={{ marginRight: 15 }}
                        size={25}
                        color="#3366ff"
                        name="edit"
                        onPress={() => console.log('pressed')}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <FontAwesomeIcon
                        size={25}
                        color="#ff3d71"
                        name="trash"
                        onPress={() => console.log('pressed')}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </Card>
              <Card style={styles.card}>
                <View style={styles.cardContent}>
                  <View style={styles.cardLeft}>
                    <Text style={styles.docName}>Adhar Card</Text>
                    <Text style={styles.docDate}>22 nov</Text>
                  </View>
                  <View style={styles.cardAction}>
                    <TouchableOpacity>
                      <FontAwesomeIcon
                        style={{ marginRight: 15 }}
                        size={25}
                        color="#3366ff"
                        name="edit"
                        onPress={() => console.log('pressed')}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <FontAwesomeIcon
                        size={25}
                        color="#ff3d71"
                        name="trash"
                        onPress={() => console.log('pressed')}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </Card>
              <Card style={styles.card}>
                <View style={styles.cardContent}>
                  <View style={styles.cardLeft}>
                    <Text style={styles.docName}>Adhar Card</Text>
                    <Text style={styles.docDate}>22 nov</Text>
                  </View>
                  <View style={styles.cardAction}>
                    <TouchableOpacity>
                      <FontAwesomeIcon
                        style={{ marginRight: 15 }}
                        size={25}
                        color="#3366ff"
                        name="edit"
                        onPress={() => console.log('pressed')}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <FontAwesomeIcon
                        size={25}
                        color="#ff3d71"
                        name="trash"
                        onPress={() => console.log('pressed')}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </Card>
              <Card style={styles.card}>
                <View style={styles.cardContent}>
                  <View style={styles.cardLeft}>
                    <Text style={styles.docName}>Adhar Card</Text>
                    <Text style={styles.docDate}>22 nov</Text>
                  </View>
                  <View style={styles.cardAction}>
                    <TouchableOpacity>
                      <FontAwesomeIcon
                        style={{ marginRight: 15 }}
                        size={25}
                        color="#3366ff"
                        name="edit"
                        onPress={() => console.log('pressed')}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <FontAwesomeIcon
                        size={25}
                        color="#ff3d71"
                        name="trash"
                        onPress={() => console.log('pressed')}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </Card>
              <Card style={styles.card}>
                <View style={styles.cardContent}>
                  <View style={styles.cardLeft}>
                    <Text style={styles.docName}>Adhar Card</Text>
                    <Text style={styles.docDate}>22 nov</Text>
                  </View>
                  <View style={styles.cardAction}>
                    <TouchableOpacity>
                      <FontAwesomeIcon
                        style={{ marginRight: 15 }}
                        size={25}
                        color="#3366ff"
                        name="edit"
                        onPress={() => console.log('pressed')}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <FontAwesomeIcon
                        size={25}
                        color="#ff3d71"
                        name="trash"
                        onPress={() => console.log('pressed')}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </Card>
              <Card style={styles.card}>
                <View style={styles.cardContent}>
                  <View style={styles.cardLeft}>
                    <Text style={styles.docName}>Adhar Card</Text>
                    <Text style={styles.docDate}>22 nov</Text>
                  </View>
                  <View style={styles.cardAction}>
                    <TouchableOpacity>
                      <FontAwesomeIcon
                        style={{ marginRight: 15 }}
                        size={25}
                        color="#3366ff"
                        name="edit"
                        onPress={() => console.log('pressed')}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <FontAwesomeIcon
                        size={25}
                        color="#ff3d71"
                        name="trash"
                        onPress={() => console.log('pressed')}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </Card>
              <Card style={styles.card}>
                <View style={styles.cardContent}>
                  <View style={styles.cardLeft}>
                    <Text style={styles.docName}>Adhar Card</Text>
                    <Text style={styles.docDate}>22 nov</Text>
                  </View>
                  <View style={styles.cardAction}>
                    <TouchableOpacity>
                      <FontAwesomeIcon
                        style={{ marginRight: 15 }}
                        size={25}
                        color="#3366ff"
                        name="edit"
                        onPress={() => console.log('pressed')}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <FontAwesomeIcon
                        size={25}
                        color="#ff3d71"
                        name="trash"
                        onPress={() => console.log('pressed')}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </Card>
              <Card style={styles.card}>
                <View style={styles.cardContent}>
                  <View style={styles.cardLeft}>
                    <Text style={styles.docName}>Adhar Card</Text>
                    <Text style={styles.docDate}>22 nov</Text>
                  </View>
                  <View style={styles.cardAction}>
                    <TouchableOpacity>
                      <FontAwesomeIcon
                        style={{ marginRight: 15 }}
                        size={25}
                        color="#3366ff"
                        name="edit"
                        onPress={() => console.log('pressed')}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <FontAwesomeIcon
                        size={25}
                        color="#ff3d71"
                        name="trash"
                        onPress={() => console.log('pressed')}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </Card>
              <Card style={styles.card}>
                <View style={styles.cardContent}>
                  <View style={styles.cardLeft}>
                    <Text style={styles.docName}>Adhar Card</Text>
                    <Text style={styles.docDate}>22 nov</Text>
                  </View>
                  <View style={styles.cardAction}>
                    <TouchableOpacity>
                      <FontAwesomeIcon
                        style={{ marginRight: 15 }}
                        size={25}
                        color="#3366ff"
                        name="edit"
                        onPress={() => console.log('pressed')}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <FontAwesomeIcon
                        size={25}
                        color="#ff3d71"
                        name="trash"
                        onPress={() => console.log('pressed')}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </Card>
              <Card style={styles.card}>
                <View style={styles.cardContent}>
                  <View style={styles.cardLeft}>
                    <Text style={styles.docName}>Last</Text>
                    <Text style={styles.docDate}>22 nov</Text>
                  </View>
                  <View style={styles.cardAction}>
                    <TouchableOpacity>
                      <FontAwesomeIcon
                        style={{ marginRight: 15 }}
                        size={25}
                        color="#3366ff"
                        name="edit"
                        onPress={() => console.log('pressed')}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <FontAwesomeIcon
                        size={25}
                        color="#ff3d71"
                        name="trash"
                        onPress={() => console.log('pressed')}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </Card>
            </View>
          </ScrollView>
        </View>

        <View style={styles.navigation}>
          <View style={styles.navigationLeft}>
            <IonIcon
              color="#000"
              size={30}
              name="home-outline"
              onPress={() => navigation.navigate('Home')}
            />
            <IonIcon
              color="#aaaaaa"
              size={30}
              name="search-outline"
              onPress={() => navigation.navigate('Search')}
            />
          </View>
          <TouchableHighlight onPress={() => null}>
            <View style={styles.navigationCenter}>
              <IonIcon color="#fff" size={30} name="add" />
            </View>
          </TouchableHighlight>

          <View style={styles.navigationRight}>
            <IonIcon color="#aaaaaa" size={30} name="chatbox-outline" />
            <MaterialCommunityIcon
              color="#aaaaaa"
              size={30}
              name="account-outline"
              onPress={() => navigation.navigate('Profile')}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Home
