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
    paddingHorizontal: 20,
    width: '100%',
    // backgroundColor: "#fff"
  },
  inputLabel: {
    color: '#444',
    fontSize: 15,
    fontFamily: 'MontserratAlternates-SemiBold',
    marginBottom: 5,
  },
  input: {
    marginBottom: 12,
  },
  updateBtn: {
    marginTop: 20,
    borderRadius: 60,
    // elevation: 5,
    width: '60%',
    alignSelf: 'center',
  },
})
