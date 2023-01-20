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
  },

  body: {
    flex: 5,
    backgroundColor: '#fff',
  },

  bottom: {
    flex: 2,
  },

  text: {
    color: '#fff',
    fontSize: 12,
    borderWidth: 1,
    borderColor: '#fff',
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
    marginLeft: '4%',
    marginRight: '4%',
  },

  linha4: {
    flexDirection: 'row',
  },

  linha5: {
    flexDirection: 'row',
  },

  title: {
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 24,
    color: '#000000',
  },

  subtext: {
    fontSize: 10,
    fontWeight: '400',
    color: '#000000',
    lineHeight: 12,
    marginRight: 10,
    marginBottom: 5,
  },

  time: {
    fontSize: 12,
    fontWeight: '400',
    color: '#000000',
  },

  tag: {
    fontSize: 12,
    fontWeight: '500',
    backgroundColor: '#3B3355',
    color: '#BFCDE0',
    borderRadius: 2,
    width: 40,
    textAlign: 'center',
    marginRight: 10,
  },

  once: {
    fontSize: 20,
    fontWeight: '400',
    color: '#fff',
  },

  slider: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Styles;
