import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  back: {
    aspectRatio: 1,
    marginLeft: 8,
    marginTop: 8,
    width: 24
  },
  img: {
    flex: 1,
    height: null,
    resizeMode: 'contain',
    width: null
  },
  loginScreen: {
    backgroundColor: '#F9F9F9',
    flex: 1
  },
  button: {
    backgroundColor: '#DB3022',
    borderRadius: 10,
    marginHorizontal: 14,
    paddingVertical: 14
  },
  buttonText: {
    fontFamily: 'serif',
    fontSize: 14,
    width: 130,
    fontWeight: '700',
    lineHeight: 30,
    textTransform: 'uppercase'
  },
  container: {
    backgroundColor: '#F9F9F9',
    flex: 1
  },
  title: {
    fontFamily: 'serif',
    fontSize: 34,
    fontWeight: '700',
    lineHeight: 45,
    marginBottom: 63,
    marginLeft: 16,
    marginTop: 30
  }
});

export default styles;
