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
    height: '32%',
    position: 'relative',
  },

  avatarWrapper: {
    width: 120,
    height: 120,
    borderRadius: 200,
    position: 'absolute',
    bottom: 15,
    alignSelf: 'center',
    overflow: 'hidden',
    borderColor: '#fff',
    borderWidth: 3,
  },

  editIcon = {
    position:'absolute',
right: 0,

boto    
  }

  avatar: {
    width: '100%',
    height: '100%',
  },
  name: {
    fontSize: 20,
    fontFamily: 'MontserratAlternates-Bold',
  },
  profession: {
    fontSize: 15,
    fontFamily: 'MontserratAlternates-Italic',
  },

  content: {
    paddingHorizontal: 40,
    marginTop: 40,
    width: '100%',
  },

  logoutBtn: {
    width: '100%',
    borderRadius: 30,
    elevation: 5,
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
