import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#598672',
    position: 'relative',
  },

  avatarCont: {
    padding: 30,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 100,
  },

  avatarWrapper: {
    elevation: 6,
    width: 70,
    height: 70,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#fff',
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },

  name: {
    marginHorizontal: 15,
  },
  welcomeText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'MontserratAlternates-Medium',
  },
  h3: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'MontserratAlternates-Medium',
  },
  main: {
    elevation: 10,
    marginTop: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    width: Dimensions.get('screen').width,
    minHeight: Dimensions.get('window').height,
    backgroundColor: '#fff',
    paddingVertical: 50,
    paddingHorizontal: 20,
    position: 'relative',
  },
  searchBar: {
    position: 'absolute',
    top: -16,
    alignSelf: 'center',
    // transform: [{ translateY: -10 }, { translateX: -150 }],
  },
  searchInput: {
    width: 300,
    borderRadius: 10,
    margin: 0,
  },

  cardList: {
    display: 'flex',
    marginBottom: 200,
  },

  card: {
    // elevation: 5,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  cardAction: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 0.7,
  },

  docName: {
    fontSize: 16,
    fontFamily: 'MontserratAlternates-Bold',
    color: '#598672',
  },

  docDate: {
    fontSize: 15,
    fontFamily: 'MontserratAlternates-Regular',
    color: '#757575',
  },

  bar: {
    backgroundColor: '#c1c1c1',
    width: '40%',
    height: 6,
    borderRadius: 20,
    marginBottom: 20,
  },
  h2: {
    // color: 'rgb(143, 155, 179)',
    fontSize: 20,
    fontFamily: 'MontserratAlternates-SemiBold',
    alignSelf: 'flex-start',
    marginBottom: 20,
  },

  noDoc: {
    width: '100%',
    alignItems: 'center',
    marginTop: 50,
  },
  noDocImage: {
    width: '60%',
    height: 250,
  },
  noDocText: {
    fontSize: 18,
    fontFamily: 'MontserratAlternates-Regular',
  },
})
