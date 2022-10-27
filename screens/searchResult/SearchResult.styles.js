import { StyleSheet, StatusBar } from 'react-native'

export const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    // marginTop: 40,
    // position: 'relative',
  },
  topbar: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 20,
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 20,
    width: '100%',
    borderColor: '#c1c1c1',
    borderBottomWidth: 2,
    marginBottom: 30,
    backgroundColor: '#598672',
  },
  title: {
    marginLeft: 40,
    fontSize: 18,
    fontFamily: 'MontserratAlternates-Regular',
    color: '#fff',
  },
  content: {
    // marginTop: 110,

    width: '100%',
    // backgroundColor: "#fff"
  },
  documentTitle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  documentCount: {
    backgroundColor: 'green',
    color: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 4,
    borderRadius: 40,
    elevation: 5,
    marginRight: 7,
    fontFamily: 'MontserratAlternates-Bold',
    fontSize: 17,
  },
  documentSub: {
    fontFamily: 'MontserratAlternates-Medium',
    fontSize: 17,
  },
  listWrapper: {},
  cardList: {
    display: 'flex',
    marginBottom: 200,
    paddingHorizontal: 20,
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
})
