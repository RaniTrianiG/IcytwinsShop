import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  back: {
    aspectRatio: 1,
    marginTop: 8,
    width: 24
  },
  button: { alignItems: 'flex-start', borderRadius: 10},
  buttonText: { fontSize: 15, fontFamily: 'serif', fontWeight: 'bold' },
  buttonTextFeedback: { fontSize: 15, fontFamily: 'serif', fontWeight: 'bold', color: '#fff', textAlign: 'center' },
  viewChange: { alignItems: 'flex-end', padding: 3 },
  textChange: { fontSize: 12, fontFamily: 'serif', color: "#9B9B9B", fontWeight: 'bold', lineHeight: 21 },
  textBold: { fontSize: 12, fontFamily: 'serif', color: "#222222", fontWeight: 'bold', lineHeight: 21 },
  textStatus: { fontSize: 12, fontFamily: 'serif', color: "#2AA952", fontWeight: 'bold' },
  bar: {
    backgroundColor: '#fff',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 26,
    paddingVertical: 12
  },
  category: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 400,
    height: 200,
    elevation: 4,
    flexDirection: 'row',
    borderColor: '#222222',
    shadowColor: '#222222'
  },
  categorys: {
    alignSelf: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    width: 320,
    height: 50,
    flexDirection: 'row',
  },
  categoryse: {
    alignSelf: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    width: 320,
    flexDirection: 'row',
    paddingBottom: 200
  },
  viewTxt: { justifyContent: 'space-between', flexDirection: 'row', width: '90%', height: '70%' },
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
  buttonDetail : { borderRadius: 15, borderColor: '#222222', borderWidth: 1, padding: 10, marginTop: 15 },
  buttonDetailFeedback : { borderRadius: 15, borderColor: '#DB3022', borderWidth: 1, padding: 10, marginTop: 15, backgroundColor: '#DB3022', width: 120 },
  buttonText: { fontSize: 15, fontFamily: 'serif', fontWeight: 'bold' },
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
    width: '50%',
    paddingLeft: 20,
    borderRadius: 10
  },
  positionPrice: {paddingLeft: 40, paddingTop: 10 },
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
