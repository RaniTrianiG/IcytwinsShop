import { StyleSheet, Dimensions } from 'react-native';

const WIDTH = Dimensions.get('screen').width - 28 * 2;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9F9F9',
    flex: 1
  },
  content: {
    flex: 1,
    marginTop: 13,
    paddingHorizontal: 26
  },

  icon: {
    flex: 1,
    height: null,
    resizeMode: 'contain',
    width: null
  },

  menu: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
    height: WIDTH / 3 - 14,
    justifyContent: 'center',
    marginBottom: 13,
    width: WIDTH / 3 - 10
  },
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  menuDesc: {
    color: '#888888',
    fontSize: 11,
    fontWeight: '400',
    textAlign: 'center'
  },
  menuDescTwo: {
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 15,
    textAlign: 'center'
  },
  menuIcon: {
    aspectRatio: 1,
    width: 65
  },
  menuLong: {
    flexDirection: 'row',
    paddingHorizontal: 13,
    width: (WIDTH / 3) * 2 - 5
  },
  menuLongDesc: {
    fontSize: 11,
    fontWeight: '400'
  },
  menuLongNum: {
    color: '#13A310',
    fontSize: 20,
    fontWeight: '700'
  },
  menuMedium: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 12,
    width: WIDTH / 2 - 8
  },
  menuName: {
    fontSize: 11,
    fontWeight: '700',
    textAlign: 'center'
  },
  menuNum: {
    fontSize: 32,
    fontWeight: '400',
    textAlign: 'center'
  },
  title: {
    fontFamily: 'serif',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 23.85,
    marginBottom: 19,
    marginTop: 20
  }
});

export default styles;
