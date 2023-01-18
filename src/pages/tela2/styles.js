import {StyleSheet} from 'react-native';
const Styles = StyleSheet.create({
  //SEMPRE POR FLEX
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },

  img: {
    opacity: 0.8,
    flex: 0.5,
    height: 380,
    width: 420,
  },

  botao: {
    borderRadius: 6,
    position: 'absolute',
    width: 335,
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 85,
  },

  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '650',
  },

  icone: {
    alignItems: 'flex-end',
  },

  botao2: {
    borderRadius: 100,
    position: 'absolute',
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 470,
    left: 65,
  },

  easy: {
    color: '#BFCDE0',
    fontSize: 30,
    fontWeight: '600',
    position: 'absolute',
    left: 120,
    top: 298,
  },

  rec: {
    color: '#3B3355',
    fontSize: 30,
  },

  quadrado: {
    position: 'absolute',
    width: 120,
    height: 121,
    left: -109,
    top: 349,
    backgroundColor: '#D9D9D9',
    borderRadius: 5,
  },

  quadrado2: {
    position: 'absolute',
    width: 120,
    height: 121,
    left: 21,
    top: 349,
    backgroundColor: '#D9D9D9',
    borderRadius: 5,
  },

  quadrado3: {
    position: 'absolute',
    width: 121,
    height: 121,
    left: 151,
    top: 349,
    backgroundColor: '#D9D9D9',
    borderRadius: 5,
  },

  quadrado4: {
    position: 'absolute',
    width: 120,
    height: 121,
    left: 282,
    top: 349,
    backgroundColor: '#D9D9D9',
    borderRadius: 5,
  },

  mensal: {
    backgroundColor: '#fff',
    borderColor: '#5D5D81',
    borderWidth: 1,
    top: 475,
    width: 97,
    height: 107,
    left: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  valor: {
    fontSize: 30,
    height: 36,
    color: '#5D5D81',
    fontWeight: '700',
    lineHeight: 36,
  },

  tempo: {
    fontSize: 25,
    fontWeight: '400',
    lineHeight: 30,
    color: '#5D5D81',
  },

  anual: {
    backgroundColor: '#fff',
    borderColor: '#5D5D81',
    borderWidth: 1,
    top: 369,
    width: 97,
    height: 107,
    left: 144,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  vital: {
    backgroundColor: '#fff',
    borderColor: '#5D5D81',
    borderWidth: 1,
    top: 260,
    width: 113,
    height: 120,
    left: 268,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  trinta: {
    color: '#6b6385',
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '500',
  },

  vinte: {
    fontSize: 35,
    fontWeight: '700',
    lineHeight: 42,
    color: '#3B3355',
  },

  vitalicio: {
    fontSize: 26,
    fontWeight: '40',
    lineHeight: 31.2,
    color: '#3B3355',
  },

  linearGradient: {
    height: 380,
    width: 420,
    opacity: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Styles;
