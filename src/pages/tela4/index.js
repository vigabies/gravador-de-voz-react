import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Item} from './function';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import Styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {Slider} from '@miblanchard/react-native-slider';
import sqlite from '../../classes/sqlite';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';

export default function Tela4() {
  //o estado vai ser falso pq o que ja tava funcionando o verdadeiro
  //quando clicar vai para o outro
  const [play, setPlay] = useState(false);
  const [list, setList] = useState([]);
  const [atualiza, setAtualiza] = useState(false);
  const [cliqueLista, setCliqueLista] = useState(false); //chama player

  useEffect(() => {
    async function getData() {
      // set os valores do database
      const data = await sqlite.query('SELECT * FROM audios');
      setList(data);
    }
    getData();
  }, [atualiza]);

  function TouchPlay() {
    setPlay(!play);
  }

  function TouchClique() {
    setCliqueLista(!cliqueLista);
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
      />
    );
  }

  

  return (
    <View style={Styles.container}>
      <View style={Styles.body}>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>

      {cliqueLista ? (
        <LinearGradient style={Styles.bottom} colors={['#BFCDE0', '#5D5D81']}>
          <View style={Styles.linha2}>
            <Text style={Styles.text}>00:00</Text>
            <Slider
              containerStyle={{flex: 1, marginRight: '6%', marginLeft: '6%'}}
              thumbTintColor="#FFFFFF"
              value={2}
              minimumValue={1}
              maximumValue={5}
              step={2}
              trackClickable={true}
              maximumTrackTintColor="#e9f0ef"
              minimumTrackTintColor="#fff"
            />
            <Text style={Styles.texto}>00:45</Text>
          </View>

          <View style={Styles.linha}>
            <TouchableOpacity>
              <Ionicons name="ios-repeat-outline" size={35} color={'#fff'} />
            </TouchableOpacity>

            <TouchableOpacity>
              <AntDesign name="banckward" size={30} color={'#fff'} />
            </TouchableOpacity>

            <TouchableOpacity onPress={TouchPlay}>
              {play ? (
                <Foundation name="pause" size={69} color={'#fff'} />
              ) : (
                <AntDesign name="play" size={69} color={'#fff'} />
              )}
            </TouchableOpacity>

            <TouchableOpacity>
              <AntDesign name="forward" size={30} color={'#fff'} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={Styles.once}>1x</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      ) : null}
    </View>
  );
}
