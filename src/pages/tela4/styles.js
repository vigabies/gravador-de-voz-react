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
    marginRight: '30%',
    flex: 1,
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
  // =========================== MODAL ICONE

  modalOpen: {
    flex: 1,
    width: 360,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonClose: {
    position: 'absolute',
    left: 280,
    top: -10,
  },

  buttonCloseStyles: {
    borderRadius: 100,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  icone: {
    color: 'white',
  },

  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: 300,
    height: 200,
    alignItems: 'center',
  },

  modalText: {
    fontFamily: 'SofiaSans-Light',
    marginTop: '10%',
    marginBottom: '5%',
    fontSize: 16,
    color: '#3B3355',
    fontWeight: '600',
  },

  input: {
    fontFamily: 'SofiaSans-Light',
    marginBottom: '10%',
    borderWidth: 1,
    borderColor: '#3B3355',
    padding: 10,
    borderRadius: 5,
    width: 262,
    height: 47,
    color: '#3B3355',
    fontSize: 16,
    fontWeight: '600',
  },

  salvarText: {
    fontFamily: 'SofiaSans-Light',
    color: '#fff',
  },

  cancelar: {
    height: 30,
    width: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  salvar: {
    height: 30,
    width: 50,
    borderRadius: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: '10%',
  },

  linhadelete: {
    flexDirection: 'row',
  },

  // =========================== LISTA BOTAO
  backg: {
    backgroundColor: '#E6E6FA',
  },

  backg2: {
    backgroundColor: 'white',
  },

  // =========================== modal Editar

  modalViewEditar: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 300,
    height: 300,
    alignItems: 'center',
  },

  modaltext: {
    fontWeight: '700',
    color: '#000',
    fontSize: 20,
    marginBottom: '10%',
    marginTop: '10%',
  },

  linhadelete2: {
    flex: 1,
    flexDirection: 'row',
    marginTop: '-22%',
  },

  editor: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 0.5,
  },

  timer2: {
    fontFamily: 'SofiaSans',
    fontSize: 30,
    fontWeight: '600',
    color: '#3B3355',
  },
});

export default Styles;
