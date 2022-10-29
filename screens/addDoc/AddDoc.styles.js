import { StyleSheet, StatusBar } from 'react-native'

export const styles = StyleSheet.create({
  wrapper: {
    // height: '100%',
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
    paddingHorizontal: 20,
    width: '100%',
    marginTop: 16,
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
  uploadBtn: {
    width: '100%',
    borderRadius: 40,
    marginTop: 30,
  },
  chooseFileBtn: {
    marginVertical: 10,
    alignSelf: 'flex-start',
  },
  addDocHelpText: {
    fontFamily: 'MontserratAlternates-Regular',
    fontSize: 15,
    marginBottom: 15,
  },
  uploadMessage: {
    width: 300,
    // height: 250,
    backgroundColor: '#fff',
    borderColor: '#eee',
    // borderWidth: 2,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    borderRadius: 10,
  },

  uploadText: {
    fontSize: 18,
    color: '#757575',
    fontFamily: 'MontserratAlternates-SemiBold',
    marginBottom: 15,
    marginTop: 10,
  },
  uploadMessageBackdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
})
