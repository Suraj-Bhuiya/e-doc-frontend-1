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
    // overflow: 'hidden',
  },

  editIcon: {
    position: 'absolute',
    right: 0,
    bottom: 10,
    zIndex: 10,
    width: 35,
    height: 35,
    backgroundColor: 'rgb(51, 102, 255)',
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  avatar: {
    width: 116,
    height: 116,
    borderRadius: 200,
    borderColor: '#fff',
    borderWidth: 3,
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
    paddingHorizontal: 20,
    marginTop: 40,
    width: '100%',
  },
  list: {
    marginBottom: 30,
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#cdcdcd',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.18,
    // shadowRadius: 1,

    // elevation: 1,
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  listText: {
    fontSize: 16,
    color: '#444',
    fontFamily: 'MontserratAlternates-Medium',
    marginLeft: 10,
  },

  logoutBtn: {
    width: '90%',
    borderRadius: 30,
    // elevation: 5,
    alignSelf: 'center',
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
