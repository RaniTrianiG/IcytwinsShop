import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  btnLogin: {
    alignSelf: 'center',
    backgroundColor: '#008080',
    width: 343
  },
  footer: {
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 15,
    width: 200
  },
  formContainer: {
    justifyContent: 'space-between'
  },
  loginScreen: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10
  },
  logoContainer: {
    alignSelf: 'center',
    height: 80,
    marginBottom: 10,
    width: 200
  },
  passwordInput: {
    borderColor: '#acabab',
    borderRadius: 1,
    borderWidth: 1,
    height: 40,
    marginBottom: 10
  },
  usernameInput: {
    borderColor: '#acabab',
    borderRadius: 1,
    borderWidth: 1,
    height: 40,
    marginBottom: 10
  }
});
export default styles;
