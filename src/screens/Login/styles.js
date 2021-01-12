import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  anchor: {
    color: '#3088C8',
    textDecorationLine: 'underline'
  },
  footer: {
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 15,
    width: 200
  },
  loginScreen: {
    flex: 1,
    padding: 10
  },
  logoContainer: {
    alignSelf: 'center',
    height: '100%',
    marginBottom: 35,
    width: '100%'
  }
});

export default styles;
