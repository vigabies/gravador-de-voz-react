import {StyleSheet} from 'react-native';
const Styles = StyleSheet.create({
  //SEMPRE POR FLEX
  container: {
    flex: 1,
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
  },

  mic: {
    height: 50,
    width: 50,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  linha: {
    flexDirection: 'row',
    justifyContent: 'center',
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
    backgroundColor: 'orange',
    flex: 2,
  },
  // -----------------------------------------------------------------------------
  valores: {
    backgroundColor: 'pink',
    flex: 2,
  },
  // -----------------------------------------------------------------------------
  botao: {
    backgroundColor: 'black',
    flex: 2,
  },
  // -----------------------------------------------------------------------------
});

export default Styles;
