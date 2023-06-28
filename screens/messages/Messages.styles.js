import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    width: '100%',
    backgroundColor: '#598672',
    position: 'relative',
    paddingTop: '20%',
  },
  messageHeading: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'MontserratAlternates-Bold',
    paddingLeft: 40,
    marginBottom: 20,
  },

  main: {
    elevation: 10,
    marginTop: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    minHeight: '83%',
  },
  messageList: {
    paddingHorizontal: 10,
    marginBottom: 50,
  },
  message: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 18,
    borderBottomColor: '#EEEEEE',
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  avatarWrapper: {
    width: 60,
    height: 60,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#fff',
    overflow: 'hidden',
    marginRight: 16,
  },
  avatar: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    objectFit: 'contain',
  },
  messageContent: {
    flex: 1,
    marginRight: 10,
  },
  messageTitle: {
    fontSize: 16,
    fontFamily: 'MontserratAlternates-Bold',
    marginBottom: 5,
  },
  messageRead: {
    fontSize: 14,
    fontFamily: 'MontserratAlternates-Regular',
  },
  messageUnread: {
    fontSize: 14,
    fontFamily: 'MontserratAlternates-Bold',
  },
  messageDetail: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageCount: {
    backgroundColor: '#7E57C2',
    width: 23,
    height: 23,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  messageCountText: {
    color: '#fff',
    fontFamily: 'MontserratAlternates-Medium',
    fontSize: 15,
  },
  messageTime: {
    color: '#9E9E9E',
  },
})
