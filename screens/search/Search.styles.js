import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    // backgroundColor: '#598672',
    position: 'relative',
  },
  top: {
    width: '100%',
    height: '40%',
    position: 'relative',
    marginBottom: 10,
  },
  searchImg: {
    width: 300,
    height: 300,
    position: 'absolute',
    bottom: -10,
    right: 0,
  },
  searchBox: {
    marginTop: 50,
    width: '90%',
  },
  h1: {
    fontSize: 45,
    fontFamily: 'MontserratAlternates-Medium',
    // marginBottom: 0,
  },
  h2: {
    fontSize: 16,
    fontFamily: 'MontserratAlternates-MediumItalic',
    marginBottom: 30,
    marginLeft: 20,
    color: '#555',
  },
  searchInput: {
    borderRadius: 50,
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
