import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginTop: 40,
  },
  topbar: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingTop: 20,
    paddingHorizontal: 20,
    width: '100%',
    borderColor: '#c1c1c1',
    borderBottomWidth: 2,
    marginBottom: 30,
    // backgroundColor: "#fff"
  },
  title: {
    marginLeft: 40,
    fontSize: 18,
    fontFamily: 'MontserratAlternates-Regular',
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
