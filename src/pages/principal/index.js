import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import Styles from './styles';
import {Navegar} from './functions';
import Tela4 from '../tela4';
import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import SelectDropdown from 'react-native-select-dropdown';
import InAppReview from 'react-native-in-app-review';

export default function Principal() {
  const opcao = ['Sem Tag', 'Estudo', 'Faculdade', 'Minhas Músicas'];
  const [defaultRating, setDefaultRating] = useState(0);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  const [modalVisible, setModalVisible] = useState(false);
  const [gravar, setGravar] = useState(true);

  const navegation = useNavigation();
  const navegar = tela => {
    navegation.navigate(tela, {});
  };

  function toggleTela(teste) {
    setGravar(teste);
  }

  const RatingBar = () => {
    return (
      <View style={Styles.linhaStar}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setDefaultRating(item)}>
              <AntDesign
                name={item <= defaultRating ? 'star' : 'staro'}
                size={40}
                color="#BFCDE0"
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

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
                      placeholder="Nome"
                    />

                    <SelectDropdown
                      data={opcao}
                      onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index);
                      }}
                      defaultButtonText={'Tag'}
                      buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem;
                      }}
                      rowTextForSelection={(item, index) => {
                        return item;
                      }}
                      buttonStyle={Styles.dropdown1BtnStyle}
                      buttonTextStyle={Styles.textDrop}
                      renderDropdownIcon={isOpened => {
                        return (
                          <AntDesign
                            name={isOpened ? 'caretup' : 'caretdown'}
                            color={'#3B3355'}
                            size={18}
                          />
                        );
                      }}
                      dropdownIconPosition={'right'}
                      dropdownStyle={Styles.colorClick}
                      rowStyle={Styles.corLinha}
                      rowTextStyle={Styles.corTextLinha}
                    />

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

            <View style={Styles.modalContainer2}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(!modalVisible);
                }}>
                <View style={Styles.modalCenter}>
                  <View style={Styles.modal2View}>
                    <View style={Styles.position}>
                      <TouchableOpacity
                        onPress={() => setModalVisible(!modalVisible)}>
                        <LinearGradient
                          style={Styles.closeModal}
                          colors={['#BFCDE0', '#5D5D81']}>
                          <AntDesign name="close" size={20} color="#fff" />
                        </LinearGradient>
                      </TouchableOpacity>
                    </View>

                    <Text style={Styles.parabens}>
                      Parabéns! Você gravou seu primeiro áudio!
                    </Text>

                    <View>
                      <Text style={Styles.avaliacao}>
                        Nos avalie com 5 estrelas se estiver gostando do
                        aplicativo!
                      </Text>

                      <RatingBar />

                      {/* Default é as estrelas selecionadas, se as estrelas for maior que 4
                         vai aparecer o console, se nao, ele fecha o modal*/}

                      <TouchableOpacity
                        onPress={() => {
                          if (defaultRating >= 4) {
                            InAppReview.RequestInAppReview();
                            console.log(defaultRating);
                            setModalVisible(!modalVisible);
                          } else {
                            setModalVisible(!modalVisible);
                            Alert.alert('Obrigada pela avaliação!');
                          }
                        }}>
                        <LinearGradient
                          style={Styles.avaliar}
                          colors={['#BFCDE0', '#5D5D81']}>
                          <Text style={Styles.textAvaliar}>Avaliar</Text>
                        </LinearGradient>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Modal>
            </View>

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
