import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  back: {
    aspectRatio: 1,
    marginTop: 8,
    width: 24
  },
  bar: {
    backgroundColor: '#fff',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 26,
    paddingVertical: 12
  },
  button: {
    backgroundColor: '#DB3022',
    borderRadius: 10,
    paddingVertical: 14
  },
  buttonText: {
    fontFamily: 'serif',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 30,
    textTransform: 'uppercase',
    width: 130
  },
  category: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20
  },
  container: {
    backgroundColor: '#F9F9F9',
    flex: 1
  },
  content: {
    backgroundColor: '#F9F9F9',
    flex: 1,
    marginHorizontal: 26,
    marginTop: 13
  },
  icon: {
    borderRadius: 5,
    flex: 1,
    height: null,
    resizeMode: 'cover',
    width: null
  },
  img: {
    flex: 1,
    height: null,
    resizeMode: 'contain',
    width: null
  },
  menuIcon: {
    aspectRatio: 1.5,
    height: null,
    justifyContent: 'flex-end',
    width: '50%'
  },
  menuLongNum: {
    color: '#222222',
    fontSize: 20,
    fontWeight: '700'
  },
  title: {
    fontFamily: 'serif',
    fontSize: 34,
    fontWeight: '700',
    lineHeight: 45,
    marginBottom: 63,
    marginTop: 30
  },
  titleCategory: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingLeft: 40,
    paddingTop: 45,
    width: 70
  }
});

export default styles;
