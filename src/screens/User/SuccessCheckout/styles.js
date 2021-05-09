import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9F9F9',
    flex: 1
  },
  content: {
    flex: 1,
    marginTop: 13,
    paddingHorizontal: 26,
    justifyContent: 'center'
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

  title: {
    fontFamily: 'serif',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 23.85,
    marginBottom: 19
  }
});

export default styles;
