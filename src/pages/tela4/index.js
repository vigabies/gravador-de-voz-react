import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Item} from './function';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import Styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {Slider} from '@miblanchard/react-native-slider';
import sqlite from '../../classes/sqlite';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import _ from 'lodash';

const audioRecorderPlayer = new AudioRecorderPlayer();

export default function Tela4() {
  //o estado vai ser falso pq o que ja tava funcionando o verdadeiro
  //quando clicar vai para o outro
  const [list, setList] = useState([]);
  const [atualiza, setAtualiza] = useState(false);
  const [cliqueLista, setCliqueLista] = useState(false); //chama player
  const [recording, setRecording] = useState(false);
  const [positionSlide, setPositionSlide] = useState({
    currentPositionSec: 1,
    currentDurationSec: 20,
    playTime: '00:00',
    duration: '00:00',
  });

  useEffect(() => {
    async function getData() {
      // set os valores do database
      const data = await sqlite.query('SELECT * FROM audios');
      setList(data);
    }
    getData();
  }, [atualiza]);

  function TouchClique() {
    setCliqueLista(!cliqueLista);
  }

  //o underline é o lodash
  async function idNext() {
    try {
      console.log(cliqueLista);
      let index;
      _.findIndex(list, (valor, i) => {
        if (valor.id_audio === cliqueLista) {
          index = i;
        }
      });
      setCliqueLista(list[index + 1].id_audio);
      console.log(index);
    } catch (error) {
      console.log(error);
    }
  }

  async function idBack() {
    try {
      console.log(cliqueLista);
      let index;
      _.findIndex(list, (valor, i) => {
        if (valor.id_audio === cliqueLista) {
          index = i;
        }
      });
      setCliqueLista(list[index - 1].id_audio);
      console.log(index);
    } catch (error) {
      console.log(error);
    }
  }

  // ponhamos o setAtualiza pq temos que mandar pra function e usar ele la, por isso criamos uma const
  function renderItem({item}) {
    return (
      <Item
        data={item}
        setList={setList}
        setAtualiza={setAtualiza}
        TouchClique={TouchClique}
        cliqueLista={cliqueLista}
        setCliqueLista={setCliqueLista}
        recording={recording}
        onPausePlay={onPausePlay}
        onStartPlay={onStartPlay}
      />
    );
  }

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

  return (
    <View style={Styles.container}>
      <View style={Styles.body}>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={item => item.id_audio}
        />
      </View>

      {cliqueLista ? (
        <LinearGradient style={Styles.bottom} colors={['#BFCDE0', '#5D5D81']}>
          <View style={Styles.linha2}>
            <Text style={Styles.text}>{positionSlide.playTime}</Text>
            <Slider
              containerStyle={{flex: 1, marginRight: '6%', marginLeft: '6%'}}
              thumbTintColor="#FFFFFF"
              value={positionSlide.currentPositionSec}
              minimumValue={1}
              maximumValue={positionSlide.currentDurationSec}
              step={1}
              trackClickable={true}
              maximumTrackTintColor="#e9f0ef"
              minimumTrackTintColor="#fff"
            />
            <Text style={Styles.texto}>{positionSlide.playTime}</Text>
          </View>

          <View style={Styles.linha}>
            <TouchableOpacity onPress={idBack}>
              <AntDesign name="banckward" size={30} color={'#fff'} />
            </TouchableOpacity>

            <TouchableOpacity onPress={recording ? onPausePlay : onStartPlay}>
              {recording ? (
                <Foundation name="pause" size={69} color={'#fff'} />
              ) : (
                <AntDesign name="play" size={69} color={'#fff'} />
              )}
            </TouchableOpacity>

            <TouchableOpacity onPress={idNext}>
              <AntDesign name="forward" size={30} color={'#fff'} />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      ) : null}
    </View>
  );
}
