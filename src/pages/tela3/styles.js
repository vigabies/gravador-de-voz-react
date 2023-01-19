import {StyleSheet} from 'react-native';
const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },

  title: {
    fontSize: 20,
    color: '#BFCDE0',
    fontWeight: '700',
    lineHeight: 24,
    top: '5%',
    left: '4%',
    flexDirection: 'column',
    marginBottom: '3%',
  },

  text: {
    fontSize: 16,
    fontWeight: '500',
    color: '#3B3355',
    top: '5%',
    left: '4%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginBottom: '2%',
  },

  avancado: {
    top: '5%',
  },

  sub: {
    fontSize: 12,
    fontWeight: '300',
    flexDirection: 'column',
    left: '4%',
    marginTop: '1%',
    color: '#3B3355',
  },
});

export default Styles;
