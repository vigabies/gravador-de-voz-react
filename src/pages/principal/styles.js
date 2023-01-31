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
    fontFamily: 'SofiaSans-Light',
  },

  text3: {
    color: '#3B3355',
    opacity: 0.5,
    fontSize: 17,
    fontWeight: '500',
    fontFamily: 'SofiaSans-Light',
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
    fontFamily: 'SofiaSans-Light',
  },

  text: {
    fontWeight: '400',
    fontSize: 20,
    textAlign: 'center',
    color: '#3B3355',
    opacity: 0.5,
    fontFamily: 'SofiaSans-Light',
  },

  // -----------------------------------------------------------------------------

  bottom: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },

  bottom2: {
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
    marginBottom: '4%',
  },

  modalView: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: 330,
    height: 310,
  },

  modaltext: {
    fontWeight: '700',
    color: '#000',
    fontSize: 20,
    marginBottom: '10%',
  },

  cancelar: {
    borderRadius: 6,
    height: 38,
    width: 78,
    textAlign: 'center',
    marginLeft: '4%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textcancelar: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },

  linhamodal: {
    flexDirection: 'row',
    marginTop: '10%',
  },

  //a sombra ali é no background, o A no rgbA serve para definir a opacidade
  modalcontainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  salvar: {
    borderRadius: 6,
    height: 38,
    width: 160,
    marginRight: '4%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textsalvar: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },

  input: {
    marginBottom: '10%',
    borderWidth: 1,
    borderColor: '#3B3355',
    padding: 10,
    borderRadius: 5,
    width: 262,
    height: 47,
    color: '#3B3355',
    fontSize: 16,
    fontWeight: '400',
  },

  // -----------------------------------------------------------------------------

  dropdown1BtnStyle: {
    width: 262,
    height: 47,
    backgroundColor: '#FFF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#3B3355',
  },

  textDrop: {
    color: '#3B3355',
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '400',
  },

  colorClick: {
    backgroundColor: '#ddd',
  },

  corLinha: {
    backgroundColor: '#fff',
    borderBottomColor: '#fff',
  },

  corTextLinha: {
    color: '#000000',
    textAlign: 'left',
    marginLeft: '4%',
    fontSize: 16,
    fontWeight: '400',
  },
  // -----------------------------------------------------------------------------
  modalContainer2: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  modalCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  modal2View: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 30,
    marginHorizontal: 30,
    width: 330,
    height: 310,
  },

  parabens: {
    textAlign: 'center',
    color: '#000',
    fontWeight: '700',
    fontSize: 20,
    marginTop: '3%',
    marginBottom: '6%',
    lineHeight: 24,
    fontFamily: 'SofiaSans-Light',
  },

  avaliacao: {
    textAlign: 'center',
    color: '#000',
    fontWeight: '400',
    fontSize: 15,
    marginTop: '5%',
    marginBottom: '6%',
    lineHeight: 18,
    fontFamily: 'SofiaSans-Light',
  },

  avaliar: {
    borderRadius: 6,
    height: 42,
    width: 260,
    textAlign: 'center',
    marginLeft: '4%',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'SofiaSans-Light',
  },

  textAvaliar: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 19,
    fontFamily: 'SofiaSans-Light',
  },

  closeModal: {
    borderRadius: 100,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  linhaStar: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: '9%',
  },

  position: {
    position: 'absolute',
    left: 310,
    top: -10,
  },

  modals: {
    marginBottom: '3%',
    backgroundColor: '#ddd',
    width: 55,
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalsText: {
    color: '#000',
    fontWeight: '300',
    fontFamily: 'SofiaSans-Light',
  },
});

export default Styles;
