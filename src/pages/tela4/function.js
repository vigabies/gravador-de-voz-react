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
import Foundation from 'react-native-vector-icons/Foundation';
import sqlite from '../../classes/sqlite';
import Trimmer from 'react-native-trimmer';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
const audioRecorderPlayer = new AudioRecorderPlayer();

export function Navegar(navigation) {
  navigation.navigate('Principal');
}

//a gente puxou la do index o setAtualiza
export function Item({data, setAtualiza, cliqueLista, setCliqueLista}) {
  const [modalVisibleIcon, setModalVisibleIcon] = useState(false);
  const [modalScissors, setModalScissors] = useState(false);
  const [nome, setNome] = useState('');
  const [recording, setRecording] = useState(false);
  const [positionSlide, setPositionSlide] = useState({
    currentPositionSec: 1,
    currentDurationSec: 20,
    playTime: '00:00',
    duration: '00:00',
  });

  const [trimmer, setTrimmer] = useState({
    trimmerLeftHandlePosition: 6,
    trimmerRightHandlePosition: 12,
  });

  async function onStartPlay() {
    setRecording(true);
    const msg = await audioRecorderPlayer.startPlayer();
    console.log(msg);
    audioRecorderPlayer.addPlayBackListener(e => {
      setPositionSlide({
        currentPositionSec: e.currentPosition,
        currentDurationSec: e.duration,
        playTime: audioRecorderPlayer.mmss(
          Math.floor(e.currentPosition / 1000),
        ),
        duration: audioRecorderPlayer.mmss(Math.floor(e.duration / 1000)),
      });
      return;
    });
  }

  async function onPausePlay() {
    setRecording(false);
    await audioRecorderPlayer.pausePlayer();
  }

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
    setModalVisibleIcon(false);
    setModalScissors(false);
  }

  async function onHandleChange({leftPosition, rightPosition}) {
    setTrimmer({
      trimmerRightHandlePosition: rightPosition,
      trimmerLeftHandlePosition: leftPosition,
    });
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
            <TouchableOpacity
              onPress={() => setModalVisibleIcon(true)}
              style={{
                height: 50,
                width: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Entypo name="dots-three-vertical" size={25} color={'#3B3355'} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setModalScissors(true)}
              style={{
                height: 50,
                width: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
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

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalScissors}
          onRequestClose={() => {
            setModalScissors(!setModalScissors);
          }}>
          <TouchableWithoutFeedback>
            <View style={Styles.modalOpen}>
              <View style={Styles.modalViewEditar}>
                <TouchableOpacity
                  style={Styles.buttonClose}
                  onPress={() => setModalScissors(false)}>
                  <LinearGradient
                    colors={['#BFCDE0', '#5D5D81']}
                    style={Styles.buttonCloseStyles}>
                    <AntDesign name="close" size={20} color="#fff" />
                  </LinearGradient>
                </TouchableOpacity>

                <Text style={Styles.modaltext}>Editar</Text>

                <View style={Styles.viewTrimmer}>
                  <Trimmer
                    onHandleChange={onHandleChange}
                    maximumZoomLevel={10}
                    zoomMultiplier={100}
                    initialZoomValue={2}
                    scaleInOnInit={true}
                    tintColor="#3B3355"
                    markerColor="#dddd"
                    trackBackgroundColor="#BFCDE0"
                    trackBorderColor="#3B3355"
                    scrubberColor="#b7e778"
                    totalDuration={positionSlide.currentDurationSec}
                    trimmerLeftHandlePosition={
                      trimmer.trimmerLeftHandlePosition
                    }
                    trimmerRightHandlePosition={
                      trimmer.trimmerRightHandlePosition
                    }
                  />
                </View>
                <View>
                  <View style={Styles.editor}>
                    <Text style={Styles.timer3}>{positionSlide.playTime} </Text>

                    <TouchableOpacity
                      onPress={recording ? onPausePlay : onStartPlay}>
                      {recording ? (
                        <Foundation name="pause" size={50} color={'#3B3355'} />
                      ) : (
                        <AntDesign name="play" size={50} color={'#3B3355'} />
                      )}
                    </TouchableOpacity>

                    <Text style={Styles.timer3}>{data.duracao}</Text>
                  </View>
                </View>

                <View style={Styles.linhadelete2}>
                  <TouchableOpacity>
                    <LinearGradient
                      colors={['#BFCDE0', '#5D5D81']}
                      style={Styles.salvar}>
                      <Text style={Styles.salvarText}>Back</Text>
                    </LinearGradient>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => setModalScissors(false)}>
                    <LinearGradient
                      colors={['#BFCDE0', '#5D5D81']}
                      style={Styles.salvar}>
                      <Text style={Styles.salvarText}>Done</Text>
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
