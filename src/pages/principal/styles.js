import {StyleSheet} from 'react-native';
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  // -----------------------------------------------------------------------------
  top: {
    flex: 0.5,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: '16%',
  },

  text2: {
    color: '#3B3355',
    fontWeight: '500',
    fontSize: 17,
  },

  text3: {
    color: '#3B3355',
    opacity: 0.5,
    fontSize: 17,
    fontWeight: '500',
  },

  // -----------------------------------------------------------------------------
  body: {
    flex: 2,
    justifyContent: 'center',
  },

  timer: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 50,
    color: '#3B3355',
  },

  text: {
    fontWeight: '400',
    fontSize: 20,
    textAlign: 'center',
    color: '#3B3355',
    opacity: 0.5,
  },

  // -----------------------------------------------------------------------------

  bottom: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },

  botao: {
    borderRadius: 100,
    width: 87,
    height: 87,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Styles;
