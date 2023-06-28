import { StyleSheet, StatusBar } from 'react-native'

export const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    // marginTop: 40,
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
    // marginBottom: 30,
    backgroundColor: '#598672',
  },
  title: {
    marginLeft: 40,
    fontSize: 18,
    fontFamily: 'MontserratAlternates-Regular',
    color: '#fff',
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingHorizontal: 20,
    width: '100%',
    height: '90%',
    marginBottom: 20,
  },
  inputField: {
    borderRadius: 20,
    backgroundColor: '#CFD8DC',
    width: '96%',
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    height: 56,
    fontSize: 20,
    flex: 1,
  },
  inputLabel: {
    color: '#555',
    fontSize: 15,
    fontFamily: 'MontserratAlternates-SemiBold',
    marginBottom: 6,
  },

  chatFlex: {
    width: '100%',
    height: '60%',
    // backgroundColor: 'green',
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },

  sendBtn: {
    backgroundColor: '#3F51B5',
    borderRadius: 40,
    padding: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },

  me: {
    flexDirection: 'column',
    gap: 2,
    alignItems: 'flex-end',
    marginBottom: 20,
  },

  from: {
    flexDirection: 'column',
    gap: 2,
    alignItems: 'flex-start',
    marginBottom: 20,
  },

  text: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#E0E0E0',
    width: '90%',
  },

  textContent: {
    fontSize: 17,
    color: '#424242',
    fontFamily: 'MontserratAlternates-Regular',
  },

  date: {
    color: '#9E9E9E',
    fontFamily: 'MontserratAlternates-Regular',
  },
})
