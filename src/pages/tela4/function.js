import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import Styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import sqlite from '../../classes/sqlite';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';

export function Navegar(navigation) {
  navigation.navigate('Principal');
}

//a gente puxou la do index o setAtualiza

export function Item({
  data,
  setAtualiza,
  TouchClique,
  cliqueLista,
  setCliqueLista,
}) {
  const [modalVisibleIcon, setModalVisibleIcon] = useState(false);
  const [nome, setNome] = useState('');

  //SEMPRE FAZER COM SQLITE, LEMBRA DE PUXAR COMO $
  async function deleteId(id_audio) {
    await sqlite.query(`DELETE FROM audios WHERE id_audio = ${id_audio}`);
    // um jeito de fazer o atualiza página é desse jeito
    // setList(await sqlite.query('SELECT * FROM audios'));
    setAtualiza(new Date());
  }

  // lembrar de deixar sempre maiusculo e puxar  do id_audio pois é daquela tabela
  async function update(id_audio) {
    await sqlite.query(
      `UPDATE audios SET title="${nome}" WHERE id_audio = ${id_audio}`,
    );
    setAtualiza(await sqlite.query('SELECT * FROM audios'));
  }

  async function idTeste(index) {
    index = _.findIndex(function (data) {
      return data.id_audio === setExibirPLayer;
    });

    index = _.indexOf(_.pluck('id_audio'), data);

    console.log(index);
  }

  return (
    <View style={Styles.linha3}>
      <TouchableOpacity
        onPress={() => setCliqueLista(data.id_audio)}
        style={[
          Styles.backg2,
          cliqueLista === data.id_audio ? Styles.backg : false,
          // puxando o exibir player(PAI) para mudar a cor de cada item selecionado pelo ID(filhos) e aparecer o player
          // OBS: quando for chamar algo(do BD ou outro lugar), não colocar entre aspas pq ñ estará funcionando, será considerado uma palavra
        ]}>
        <Text style={Styles.title}>{data.title}</Text>
        <View style={Styles.linha4}>
          <Text style={Styles.subtext}>{data.data}</Text>
          <Text style={Styles.subtext}>{data.hora}</Text>
          <Text style={Styles.subtext}>{data.tamanho} kB</Text>

          <View style={Styles.linha5}>
            <TouchableOpacity onPress={() => setModalVisibleIcon(true)}>
              <Entypo name="dots-three-vertical" size={25} color={'#3B3355'} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Feather name="scissors" size={25} color={'#3B3355'} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={Styles.linha4}>
          <Text style={Styles.tag}>{data.tags}</Text>
          <Text style={Styles.time}>{data.duracao}</Text>
        </View>
        <View style={Styles.linhav} />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisibleIcon}
          enum="overFullScreen"
          onRequestClose={() => {
            setModalVisibleIcon(!setModalVisibleIcon);
          }}>
          <TouchableWithoutFeedback
            onPress={() => setModalVisibleIcon(!modalVisibleIcon)}>
            <View style={Styles.modalOpen}>
              <View style={Styles.modalView}>
                <TouchableOpacity
                  style={Styles.buttonClose}
                  onPress={() => setModalVisibleIcon(false)}>
                  <LinearGradient
                    colors={['#BFCDE0', '#5D5D81']}
                    style={Styles.buttonCloseStyles}>
                    <AntDesign name="close" size={20} color="#fff" />
                  </LinearGradient>
                </TouchableOpacity>

                <Text style={Styles.modalText}>Propriedades</Text>

                <TextInput
                  onChangeText={tex => {
                    setNome(tex);
                  }}
                  style={Styles.input}
                  placeholder="Nome"
                />

                <View style={Styles.linhadelete}>
                  {/* <TouchableOpacity onPress={() => setModalVisibleIcon(false)}>
                    <LinearGradient
                      colors={['#BFCDE0', '#5D5D81']}
                      style={Styles.salvar}>
                      <Text style={Styles.salvarText}>Salvar</Text>
                    </LinearGradient>
                  </TouchableOpacity> */}

                  <TouchableOpacity onPress={() => update(data.id_audio)}>
                    <LinearGradient
                      colors={['#BFCDE0', '#5D5D81']}
                      style={Styles.salvar}>
                      <Text style={Styles.salvarText}>Editar</Text>
                    </LinearGradient>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => deleteId(data.id_audio)}>
                    <LinearGradient
                      colors={['#BFCDE0', '#5D5D81']}
                      style={Styles.cancelar}>
                      <MaterialIcons name="delete" size={25} color="#fff" />
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </TouchableOpacity>
    </View>
  );
}
