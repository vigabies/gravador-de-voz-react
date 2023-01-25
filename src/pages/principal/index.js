import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import Styles from './styles';
import {Navegar} from './functions';
import Tela4 from '../tela4';
import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

export default function Principal() {
  const [modalVisible, setModalVisible] = useState(false);
  const [gravar, setGravar] = useState(true);
  const navegation = useNavigation();
  const navegar = tela => {
    navegation.navigate(tela, {});
  };

  function toggleTela(teste) {
    setGravar(teste);
  }

  return (
    <View style={Styles.container}>
      <View style={Styles.top}>
        <View style={Styles.row}>
          <TouchableOpacity onPress={() => toggleTela(true)}>
            <Text style={gravar ? Styles.text2 : Styles.text3}>Gravar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => toggleTela(false)}>
            <Text style={gravar ? Styles.text3 : Styles.text2}>Ouvir</Text>
          </TouchableOpacity>
        </View>
      </View>

      {!gravar ? (
        <Tela4 />
      ) : (
        <>
          <View style={Styles.body}>
            <Text style={Styles.timer}>00:00</Text>
            <Text style={Styles.text}>Pronto para começar</Text>
          </View>

          <View style={Styles.bottom}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}>
              <TouchableWithoutFeedback
                onPress={() => setModalVisible(!modalVisible)}>
                <View style={Styles.modalcontainer}>
                  <View style={Styles.modalView}>
                    <Text style={Styles.modaltext}>Salvar Gravação</Text>
                    <TextInput
                      style={Styles.input}
                      maxLength={50}
                      placeholder="Nome"></TextInput>

                    <TextInput
                      style={Styles.input}
                      placeholder="Tag"></TextInput>

                    <View style={Styles.linhamodal}>
                      <LinearGradient
                        style={Styles.salvar}
                        colors={['#BFCDE0', '#5D5D81']}>
                        <Text style={Styles.textsalvar}>Salvar</Text>
                      </LinearGradient>

                      <TouchableOpacity
                        onPress={() => setModalVisible(!modalVisible)}>
                        <LinearGradient
                          style={Styles.cancelar}
                          colors={['#5D5D81', '#3B3355']}>
                          <Text style={Styles.textcancelar}>Cancelar</Text>
                        </LinearGradient>
                      </TouchableOpacity>

                    </View>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </Modal>

            <TouchableOpacity
              style={[Styles.button, Styles.buttonOpen]}
              onPress={() => setModalVisible(true)}>
              <LinearGradient
                style={Styles.botao}
                colors={['#BFCDE0', '#5D5D81']}>
                <Icon name="microphone" size={50} color="#fff" />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}
