import {StyleSheet} from 'react-native';
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  botao: {
    backgroundColor: '#95a5ba',
    borderRadius: 100,
    position: 'absolute',
    width: 87,
    height: 87,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 65,
  },

  text: {
    fontWeight: '400',
    fontSize: 20,
    textAlign: 'center',
    color: '#3B3355',
    opacity: 0.5,
    top: 310,
  },

  text2: {
    color: '#3B3355',
    fontWeight: '500',
    fontSize: 17,
    top: 80,
  },

  text3: {
    color: '#3B3355',
    opacity: 0.5,
    fontSize: 17,
    fontWeight: '500',
    top: 80,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default Styles;
