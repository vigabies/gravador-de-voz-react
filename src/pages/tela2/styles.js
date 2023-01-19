import {StyleSheet} from 'react-native';
const Styles = StyleSheet.create({
  //SEMPRE POR FLEX
  container: {
    backgroundColor: 'white',
    flex: 1,
  },

  linearGradient: {
    height: 370,
    width: 500,
    opacity: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  img: {
    height: 370,
    width: 360,
  },

  icon: {
    flexDirection: 'row-reverse',
    top: '-6%',
    left: '23%',
  },

  icon2: {
    top: 188,
    left: -180,
  },

  mic: {
    borderRadius: 100,
    backgroundColor: '#95a5ba',
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    top: '44%',
    left: '-40%',
  },

  easy: {
    color: '#BFCDE0',
    left: '-10%',
    fontSize: 36,
    top: '30%',
    fontWeight: '500',
  },

  recorder: {
    color: '#3B3355',
    fontSize: 36,
    fontWeight: '800',
    top: 62,
    left: 35,
  },

  rectangle: {
    top: 150,
    borderRadius: 100,
    color: 'black',
  },

  text3: {
    fontSize: 30,
    height: 36,
    color: '#5D5D81',
    fontWeight: '700',
    lineHeight: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text4: {
    fontSize: 25,
    fontWeight: '400',
    lineHeight: 30,
    color: '#5D5D81',
    textAlign: 'center',
  },

  text5: {
    color: '#3B3355',
    fontWeight: '700',
    fontSize: 34,
  },

  vitalicio: {
    color: '#3B3355',
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 31.2,
  },

  text: {
    color: 'black',
    fontSize: 10,
    left: 15,
    margin: 3,
    width: 380,
    top: -10,
    textAlign: 'justify',
    lineHeight: 15,
    justifyContent: 'flex-end',
  },

  text2: {
    color: 'white',
    fontSize: 20,
  },

  text6: {
    color: '#918DA0',
    fontWeight: '500',
    fontSize: 20,
  },

  linha2: {
    top: '14%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#5D5D81',
    left: 20,
    width: 97,
    borderRadius: 10,
    height: 107,
  },

  linha3: {
    top: '-1.2%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#5D5D81',
    left: 134,
    width: 97,
    borderRadius: 10,
    height: 107,
  },

  linha4: {
    top: '-17%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#5D5D81',
    left: 245,
    width: 109,
    borderRadius: 10,
    height: 120,
  },

  linhav: {
    backgroundColor: '#918DA0',
    width: 60,
    height: 2,
    left: '74%',
    top: '-30.9%',
    transform: [{rotateY: '1deg'}, {rotateZ: '15deg'}],
  },

  touch: {
    top: -25,
    left: 20,
    width: 380,
    color: 'black',
    alignItems: 'center',
    backgroundColor: '#D3D3D3',
    padding: 5,
    borderRadius: 13,
  },

  linha: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    top: -50,
  },
});

export default Styles;
