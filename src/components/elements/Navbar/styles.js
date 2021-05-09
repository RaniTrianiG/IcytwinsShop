import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 13
  },
  headerBtn: {
    aspectRatio: 1,
    width: 30
  },
  headerBtnIcon: {
    flex: 1,
    height: null,
    resizeMode: 'contain',
    width: null
  },
  headerBtnIconText: {
    alignSelf: 'center',
    color: '#FFFFFF',
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    justifyContent: 'center',
    marginVertical: 20
  },
  headerText: {
    flex: 1,
    fontFamily: 'serif',
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center'
  },

  menuIcon: {
    height: 16,
    width: 7
  },
  menuItem: {
    flex: 1,
    fontSize: 14,
    lineHeight: 21,
    marginVertical: 7.5
  },
  menuItemContainer: {
    alignItems: 'center',
    borderBottomColor: '#F1F1F1',
    borderBottomWidth: 1,
    flexDirection: 'row',
    paddingVertical: 5
  },
  menuSubTitle: {
    color: '#888888',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 18
  },
  modal: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: 0
  },
  sideContainer: {
    backgroundColor: '#fff',
    flex: 1,
    minWidth: 290,
    paddingHorizontal: 26,
    paddingTop: 13
  },
  sideEmail: {
    color: '#9B9B9B',
    fontFamily: 'serif',
    fontSize: 12,
    fontWeight: '700'
  },
  sideName: {
    fontSize: 18,
    fontWeight: '700'
  },
  sidePhoto: {
    aspectRatio: 1,
    backgroundColor: '#DB3022',
    borderRadius: 64,
    marginRight: 11,
    width: 64
  }
});

export default style;
