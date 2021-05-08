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
    borderRadius: 30,
    paddingVertical: 14
  },
  image: {
    borderRadius: 10,
    width: 400,
    height: 400,
    resizeMode:'stretch'
  },
  buttonText: {
    fontFamily: 'serif',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 15,
    textTransform: 'uppercase',
    width: 120,
    height: 20
  },
  buttons: {
    paddingTop: 120,
    width: '90%'
  },
  viewChange: { alignItems: 'flex-end', bottom: 30, width: '98%' },
  viewArow: { alignItems: 'flex-end', bottom: 20, width: '98%' },
  textChange: { fontSize: 16, fontFamily: 'serif', color: "#222222", fontWeight: 'bold' },
  buttonTexts: {
    fontFamily: 'serif',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 20,
    color: "#222222"
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
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 45,
    marginBottom: 15,
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
