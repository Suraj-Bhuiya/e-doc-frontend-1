import { StyleSheet, Dimensions, StatusBar } from 'react-native'

export const styles = StyleSheet.create({
  wrapper: {
    // height: Dimensions.get('window').height - 10,
    flex: 1,
    alignItems: 'center',
    width: '100%',
    // backgroundColor: '#598672',
    position: 'relative',
  },
  top: {
    width: '100%',
    position: 'relative',
    // backgroundColor: 'green',
  },
  searchImg: {
    width: 300,
    height: 300,
    position: 'absolute',
    bottom: 100,
    right: 0,
  },
  searchBox: {
    marginTop: -80,
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
  searchBtn: {
    marginTop: 20,
    borderRadius: 40,
    width: '60%',
    alignSelf: 'center',
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
    fontFamily: 'MontserratAlternates-Medium',
    alignItems: 'center',
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
