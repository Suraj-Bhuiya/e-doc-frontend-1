import { StyleSheet, StatusBar } from 'react-native'

export const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  topbar: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 20,
    width: '100%',
    borderColor: '#c1c1c1',
    borderBottomWidth: 2,
    // marginBottom: 30,
    backgroundColor: '#598672',
  },
  title: {
    marginLeft: 40,
    fontSize: 18,
    fontFamily: 'MontserratAlternates-Regular',
    color: '#fff',
  },
  content: {
    paddingHorizontal: 10,
    width: '100%',
    // backgroundColor: "#fff"
    marginTop: 16,
  },

  list: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    borderBottomColor: '#bdbdbd',
    borderBottomWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 10,
  },

  language: {
    fontFamily: 'MontserratAlternates-Regular',
    fontSize: 16,
  },
  languageHelpText: {
    fontFamily: 'MontserratAlternates-Regular',
    fontSize: 15,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
})
