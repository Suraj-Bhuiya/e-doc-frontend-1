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

  uploadModalWrapper: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 11,
  },
  uploadModal: {
    backgroundColor: '#fff',
    width: '100%',
    height: 380,
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },

  uploadModalInner: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
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
  inputLabel: {
    color: 'rgb(143, 155, 179)',
    fontSize: 15,
    fontFamily: 'MontserratAlternates-SemiBold',
  },
  fileName: {
    marginTop: 16,
    color: 'rgb(143, 155, 179)',
    fontSize: 15,
    fontFamily: 'MontserratAlternates-MediumItalic',
    alignSelf: 'flex-start',
  },

  chooseFileBtn: {
    marginVertical: 10,
    alignSelf: 'flex-start',
  },
  uploadBtn: {
    width: '100%',
    borderRadius: 40,
    marginTop: 30,
  },

  navigation: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 10,
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
