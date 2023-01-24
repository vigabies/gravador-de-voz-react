import {StyleSheet} from 'react-native';
const Styles = StyleSheet.create({
  //SEMPRE POR FLEX
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  img: {
    flex: 3,
    height: 310,
    width: 360,
  },

  linearGradient: {
    height: 310,
    width: 360,
    opacity: 10,
  },

  icon: {
    flexDirection: 'row-reverse',
    marginTop: '4%',
  },

  mic: {
    height: 50,
    width: 50,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '3%',
  },

  linha: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: '-6%',
  },

  easy: {
    color: '#BFCDE0',
    fontWeight: '500',
    fontSize: 36,
  },

  recorder: {
    color: '#3B3355',
    fontSize: 36,
    fontWeight: '800',
  },
  // -----------------------------------------------------------------------------
  quadrados: {
    flex: 2,
  },

  quadro: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 80,
    top: '9%',
  },

  quadro1: {
    backgroundColor: '#D9D9D9',
    flex: 0.4,
    borderRadius: 5,
    height: 120,
    marginRight: '3%',
  },

  quadros: {
    backgroundColor: '#D9D9D9',
    flex: 0.8,
    borderRadius: 5,
    height: 120,
    marginRight: '3%',
  },

  quadrofinal: {
    backgroundColor: '#D9D9D9',
    flex: 0.5,
    borderRadius: 5,
    height: 120,
  },

  // -----------------------------------------------------------------------------
  valores: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: '-15%',
  },

  mensal: {
    borderWidth: 1,
    borderColor: '#5D5D81',
    borderRadius: 10,
    width: 97,
    height: 107,
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
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 30,
    color: '#5D5D81',
  },

  vital: {
    borderWidth: 2,
    borderColor: '#3B3355',
    borderRadius: 10,
    width: 97,
    height: 107,
    alignItems: 'center',
    justifyContent: 'center',
  },

  trinta: {
    color: '#918DA0',
    fontWeight: '500',
    fontSize: 18,
  },

  vinte: {
    color: '#3B3355',
    fontWeight: '700',
    fontSize: 32,
  },

  vitalicio: {
    color: '#3B3355',
    fontWeight: '400',
    fontSize: 22,
    lineHeight: 31.2,
  },

  linhav: {
    backgroundColor: '#918DA0',
    width: 60,
    height: 2,
    top: '14%',
    transform: [{rotateY: '1deg'}, {rotateZ: '15deg'}],
  },

  linhaicon: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '3%',
  },

  icon2: {
    backgroundColor: '#5D5D81',
    borderRadius: 100,
  },

  // -----------------------------------------------------------------------------
  botao: {
    flex: 2,
  },

  touch: {
    padding: '4%',
    borderRadius: 6,
    alignItems: 'center',
    marginRight: '3%',
    marginLeft: '3%',
    marginTop: '2.5%',
  },

  continuar: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
  },

  mintext: {
    color: '#000',
    fontSize: 10,
    lineHeight: 12,
    fontWeight: '300',
    textAlign: 'justify',
  },

  textn: {
    marginLeft: '3%',
    marginRight: '3%',
    marginTop: '1%',
  },
  // -----------------------------------------------------------------------------
});

export default Styles;
