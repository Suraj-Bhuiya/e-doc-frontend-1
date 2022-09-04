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
    width: 50,
    height: 50,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#fff',
    overflow: 'hidden',
  },

  name: {
    marginHorizontal: 15,
  },
  h3: {
    color: '#fff',
    fontSize: 20,
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
    borderRadius: 40,
    margin: 0,
  },

  cardList: {
    display: 'flex',
    marginBottom: 220,
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
    fontFamily: 'MontserratAlternates-LightItalic',
  },

  navigation: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: Dimensions.get('screen').width,
    height: 60,
    paddingHorizontal: 40,
    elevation: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },

  navigationCenter: {
    // position: 'absolute',
    alignSelf: 'center',
    backgroundColor: '#598672',
    width: 60,
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    overflow: 'hidden',
    marginTop: -60,
    elevation: 4,
  },

  navigationLeft: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '32%',
  },

  navigationRight: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '32%',
  },
})
