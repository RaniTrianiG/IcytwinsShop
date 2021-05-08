import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#DB3022',
    borderRadius: 30,
    paddingBottom: 12,
    paddingHorizontal: 20,
    paddingTop: 9
  },
  buttonText: {
    fontFamily: 'serif',
    fontSize: 13,
    fontWeight: '700',
    lineHeight: 20
  },

  container: {
    backgroundColor: '#F9F9F9',
    flex: 1
  },
  content: {
    flex: 1,
    marginTop: 13,
    paddingHorizontal: 26
  },

  table: {
    marginTop: 15
  },
  tableHead: {
    height: 30
  },
  tableHeadText: {
    fontSize: 15,
    fontWeight: '700'
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 3
  },
  tableText: {
    fontSize: 15
  },
  h1: {
    fontFamily: 'serif',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 23.85,
    marginBottom: 19,
    marginTop: 30
  },
  title: {
    fontFamily: 'serif',
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 23.85,
    marginBottom: 19
  }
});

export default styles;
