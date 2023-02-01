import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import Styles from './styles';
import {Navegar} from './functions';
import Tela4 from '../tela4';
import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import SelectDropdown from 'react-native-select-dropdown';
import InAppReview from 'react-native-in-app-review';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import RNFS from 'react-native-fs';
import Share from 'react-native-share';
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {
    name: 'MainDB',
    location: 'default',
  },
  () => {},
  error => {
    console.log(error);
  },
);

const audioRecorderPlayer = new AudioRecorderPlayer();

export default function Principal() {
  const [opcao, setOpcao] = useState([
    'Sem Tag',
    'Estudo',
    'Faculdade',
    'Minhas Músicas',
  ]);
  const [nome, setNome] = useState('');
  const [defaultRating, setDefaultRating] = useState(0);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleTwo, setModalVisibleTwo] = useState(false);
  const [gravar, setGravar] = useState(true);
  const [frase, setFrase] = useState({
    inicio: 'Pronto para começar',
    grav: 'Gravando...',
  });

  const [tempo, setTempo] = useState({
    recordSecs: 0,
    recordTime: '00:00:00',
  });
  const [gravando, setGravando] = useState(false);

  async function onStartRecord() {
    setGravando(true);

    // o if é a permissão para gravar audio.

    if (Platform.OS === 'android') {
      try {
        const grants = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        ]);

        console.log('write external stroage', grants);

        if (
          grants['android.permission.WRITE_EXTERNAL_STORAGE'] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          grants['android.permission.READ_EXTERNAL_STORAGE'] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          grants['android.permission.RECORD_AUDIO'] ===
            PermissionsAndroid.RESULTS.GRANTED
        ) {
          console.log('Permissions granted');
        } else {
          console.log('All required permissions not granted');
          return;
        }
      } catch (err) {
        console.warn(err);
        return;
      }
    }

    //o e puxa as informações e retorna para a devida função

    const result = await audioRecorderPlayer.startRecorder();
    audioRecorderPlayer.addRecordBackListener(e => {
      setTempo({
        recordSecs: e.currentPosition,
        recordTime: audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
      });
      return;
    });
    console.log(result);
  }

  async function SalvarBanco() {
    await db.transaction(async tx => {
      await tx.executeSql(
        'INSERT INTO audios (title, datahora, tamanho, tags, duracao, caminho) VALUES (?,?,?,?,?,?) ',
        [],
      );
      console.log('será que deu certo');
    });
  }

  // o async significa que nossa função vai retornar um de cada vez, colocamos
  // ele na frente para o await funcionar

  async function onStopRecord() {
    setGravando(false);
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    setTempo({
      recordSecs: 0,
      recordTime: tempo.recordTime,
    });

    await RNFS.copyFile(result, RNFS.DocumentDirectoryPath + '/test.mp4')
      .then(success => {
        console.log('file moved!', success);
      })
      .catch(err => {
        console.log('Error: ' + err.message);
      });

    console.log('teste', result);

    //setModalVisible serve para mostrar o modal
    setModalVisible(true);
  }

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
            <Text style={Styles.timer}>{tempo.recordTime}</Text>
            <Text style={Styles.text}>
              {gravando ? frase.grav : frase.inicio}
            </Text>
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
                      onSelect={setNome}
                      style={Styles.input}
                      maxLength={50}
                      placeholder="Nome"
                    />

                    <SelectDropdown
                      data={opcao}
                      onSelect={(selectedItem, index) => {
                        // setOpcao(selectedItem, index);
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
                      <TouchableOpacity onPress={() => SalvarBanco}>
                        <LinearGradient
                          style={Styles.salvar}
                          colors={['#BFCDE0', '#5D5D81']}>
                          <Text style={Styles.textsalvar}>Salvar</Text>
                        </LinearGradient>
                      </TouchableOpacity>

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
                visible={modalVisibleTwo}
                onRequestClose={() => {
                  setModalVisible(!modalVisibleTwo);
                }}>
                <View style={Styles.modalCenter}>
                  <View style={Styles.modal2View}>
                    <View style={Styles.position}>
                      <TouchableOpacity
                        onPress={() => setModalVisibleTwo(!modalVisibleTwo)}>
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
                            setModalVisible(!modalVisibleTwo);
                          } else {
                            setModalVisible(!modalVisibleTwo);
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
              onPress={gravando ? onStopRecord : onStartRecord}>
              <LinearGradient
                style={Styles.botao}
                colors={['#BFCDE0', '#5D5D81']}>
                {gravando ? (
                  <Entypo name="controller-record" size={40} color={'#fff'} />
                ) : (
                  <Icon name="microphone" size={50} color="#fff" />
                )}
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}
