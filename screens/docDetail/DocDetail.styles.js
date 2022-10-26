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
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    width: '100%',
    marginBottom: 20,
  },
  input: {
    width: 260,
  },
  inputLabel: {
    color: '#555',
    fontSize: 15,
    fontFamily: 'MontserratAlternates-SemiBold',
    marginBottom: 6,
  },
  editBtn: {
    width: 80,
    borderRadius: 30,
  },
  cardDetail: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  part: {
    width: '50%',
  },
  docDetailTitle: {
    fontSize: 17,
    fontFamily: 'MontserratAlternates-Bold',
    marginBottom: 5,
    alignSelf: 'center',
    textAlign: 'center',
    color: '#598672',
  },
  docDetailDate: {
    fontSize: 15,
    fontFamily: 'MontserratAlternates-Regular',
    alignSelf: 'center',
    textAlign: 'center',
  },
  divider: {
    width: 2,
    height: '100%',
    backgroundColor: '#c1c1c1',
  },
  deleteBtn: {
    marginTop: 30,
    width: '60%',
    borderRadius: 30,
  },
})
