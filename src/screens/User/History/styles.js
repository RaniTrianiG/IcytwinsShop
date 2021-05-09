import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  back: {
    aspectRatio: 1,
    marginTop: 8,
    width: 24
  },
  button: { alignItems: 'flex-start', paddingLeft: 20 },
  buttonText: { fontSize: 15, fontFamily: 'serif', fontWeight: 'bold' },
  viewChange: { alignItems: 'flex-end', padding: 3 },
  textChange: { fontSize: 12, fontFamily: 'serif', color: "#9B9B9B", fontWeight: 'bold', lineHeight: 21 },
  textBold: { fontSize: 12, fontFamily: 'serif', color: "#222222", fontWeight: 'bold', lineHeight: 21 },
  textStatus: { fontSize: 12, fontFamily: 'serif', color: "#2AA952", fontWeight: 'bold' , marginTop: 20},
  bar: {
    backgroundColor: '#fff',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 26,
    paddingVertical: 12
  },
  buttonDetail : { borderRadius: 15, borderColor: '#222222', borderWidth: 1, padding: 10, marginTop: 15 },
  category: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 400,
    height: 200,
    elevation: 2,
    flexDirection: 'row',
    marginVertical: 20
  },
  viewTxt: { justifyContent: 'space-between', flexDirection: 'row', width: '90%', height: '70%', padding: 20 },
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
    marginBottom: 23,
    marginTop: 30
  },
  titleCategory: { flex: 1, justifyContent: 'flex-start', width: 70 }
});

export default styles;
