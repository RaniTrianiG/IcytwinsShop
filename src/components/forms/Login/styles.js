import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  button: {
    backgroundColor: '#DB3022',
    borderRadius: 30,
    marginHorizontal: 14,
    paddingVertical: 14
  },
  buttonText: {
    fontFamily: 'serif',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
    textTransform: 'uppercase'
  },

  forget: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 30,
    marginHorizontal: 16,
    marginTop: 4
  },
  forgetBtn: {
    aspectRatio: 1,
    width: 24
  },
  forgetBtnImg: {
    flex: 1,
    height: null,
    resizeMode: 'contain',
    width: null
  },
  forgetText: {
    fontFamily: 'serif',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
    marginRight: 3
  },

  inputContainer: {
    paddingHorizontal: 16
  }
});

export default style;
