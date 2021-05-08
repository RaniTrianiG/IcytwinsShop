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
  menuLongNum: {
    color: '#222222',
    fontSize: 20,
    fontWeight: '700'
  },
  category: {
    flexDirection: 'row', width: '92%', alignSelf: 'center', backgroundColor: '#fff', borderRadius: 10,
    elevation: 2, justifyContent: 'space-between', margin: 20
  },
  bar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingHorizontal: 26,
    justifyContent: 'space-evenly',
    paddingVertical: 12,
    borderRadius: 15
  },
  titleCategory: { flex: 1, justifyContent: 'flex-start', paddingLeft: 40, paddingTop: 45, width: 70 },
  icon: {
    flex: 1,
    height: null,
    resizeMode: 'cover',
    borderRadius: 5,
    width: null,
  },
  menuIcon: {
    aspectRatio: 1.5,
    width: '50%',
    height: null,
    justifyContent: 'flex-end'
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
