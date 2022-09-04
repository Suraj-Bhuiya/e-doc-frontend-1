import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
  wrapper: {
    height: Dimensions.get('screen').height,
    // padding: 20,
    display: 'flex',
    alignItems: 'center',
  },
  top: {
    width: '100%',
    height: '40%',
    position: 'relative',
    marginBottom: 10,
  },
  h1Cont: {
    paddingHorizontal: '10%',
  },
  h1: {
    marginTop: '20%',
    fontSize: 30,
    color: '#fff',
    fontFamily: 'MontserratAlternates-Medium',
  },
  loginImg: {
    width: 300,
    height: 300,
    position: 'absolute',
    bottom: -10,
    right: 0,
  },
  form: {
    paddingHorizontal: '10%',
    width: '100%',
  },
  input: {
    marginBottom: 20,
  },
  btn: {
    borderRadius: 50,
    marginBottom: 20,
    elevation: 5,
  },
  sub: {
    color: '#666',
    fontSize: 15,
    fontFamily: 'MontserratAlternates-Medium',
  },
  link: {
    color: 'blue',
  },
  inputLabel: {
    color: 'rgb(143, 155, 179)',
    fontSize: 15,
    fontFamily: 'MontserratAlternates-SemiBold',
  },
})
