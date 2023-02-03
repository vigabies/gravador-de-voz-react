import {StyleSheet} from 'react-native';
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },

  header: {
    flex: 0.5,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  letra: {
    color: '#3B3355',
    fontWeight: '500',
    fontSize: 17,
    fontFamily: 'SofiaSans-Light',
  },

  letra2: {
    fontWeight: '500',
    fontSize: 17,
    color: '#3B3355',
    opacity: 0.5,
    fontFamily: 'SofiaSans-Light',
  },

  body: {
    flex: 4,
    backgroundColor: '#fff',
    marginTop: '-28%',
  },

  bottom: {
    flex: 2,
  },

  text: {
    color: '#fff',
    fontSize: 12,
    borderWidth: 1,
    borderColor: '#fff',
    marginLeft: '5%',
    fontFamily: 'SofiaSans-Light',
  },

  texto: {
    color: '#fff',
    fontSize: 12,
    borderWidth: 1,
    borderColor: '#fff',
    marginRight: '5%',
    fontFamily: 'SofiaSans-Light',
  },

  linha: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
  },

  linha2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  linha3: {
    marginLeft: '6%',
    marginRight: '10%',
  },

  linha4: {
    flexDirection: 'row',
  },

  linha5: {
    flexDirection: 'row-reverse',
    marginRight: '44%',
  },

  linhav: {
    backgroundColor: '#BFCDE0',
    height: 1,
    marginTop: '2%',
    width: '108%',
  },

  title: {
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 24,
    color: '#000000',
    fontFamily: 'SofiaSans-Light',
  },

  subtext: {
    fontSize: 10,
    fontWeight: '400',
    color: '#000000',
    lineHeight: 12,
    marginRight: 10,
    fontFamily: 'SofiaSans-Light',
  },

  time: {
    fontSize: 12,
    fontWeight: '400',
    color: '#000000',
    marginTop: '-3%',
    fontFamily: 'SofiaSans-Light',
  },

  tag: {
    fontSize: 12,
    fontWeight: '500',
    backgroundColor: '#3B3355',
    color: '#BFCDE0',
    borderRadius: 2,
    textAlign: 'center',
    marginRight: 10,
    marginTop: '-3%',
    fontFamily: 'SofiaSans-Light',
  },

  once: {
    fontSize: 20,
    fontWeight: '400',
    color: '#fff',
    fontFamily: 'SofiaSans-Light',
  },
});

export default Styles;
