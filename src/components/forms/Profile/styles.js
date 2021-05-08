import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  button: { alignItems: 'flex-start', marginTop: 25 },
  buttonText: { fontSize: 15, fontFamily: 'serif', marginTop: 20, fontWeight: 'bold' },
  viewChange: { alignItems: 'flex-end' },
  textChange: { fontSize: 12, fontFamily: 'serif', color: "#9B9B9B", fontWeight: 'bold' },
  buttons: {
    backgroundColor: '#DB3022',
    borderRadius: 30,
    marginHorizontal: 14,
    marginTop: 30,
    paddingVertical: 14
  },
  buttonTexts: {
    fontFamily: 'serif',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
    textTransform: 'uppercase'
  },
});

export default style;
