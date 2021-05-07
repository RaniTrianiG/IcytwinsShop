import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    margin: 0
  },

  error: {
    color: '#DB3022',
    marginLeft: 20,
    marginTop: 2
  },

  innerInput: {
    fontFamily: 'serif',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
    marginTop: 3,
    minHeight: 20,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  input: {
    borderBottomWidth: 0,
    paddingVertical: 0
  },
  inputContainer: {
    backgroundColor: '#fff',
    borderColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    elevation: 1,
    marginBottom: 8,
    paddingBottom: 10,
    paddingHorizontal: 20,
    paddingTop: 12
  },
  label: {
    color: '#9B9B9B',
    fontFamily: 'serif',
    fontSize: 11,
    fontWeight: '400',
    lineHeight: 14.58
  }
});

export default style;
