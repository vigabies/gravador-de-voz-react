import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import Styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import {useNavigation} from '@react-navigation/native';
import sqlite from '../../classes/sqlite';
import {Slider} from '@miblanchard/react-native-slider';

const borderWidth = 4;
const trackMarkStyles = StyleSheet.create({
  activeMark: {
    borderColor: 'red',
    borderWidth,
    left: -borderWidth / 2,
  },
  inactiveMark: {
    borderColor: 'grey',
    borderWidth,
    left: -borderWidth / 2,
  },
});

const SliderContainer = ({
  caption,
  children,
  sliderValue,
  trackMarks,
  vertical,
}) => {
  const [value, setValue] = useState(sliderValue);
  let renderTrackMarkComponent;

  if (trackMarks?.length && (!Array.isArray(value) || value?.length === 1)) {
    renderTrackMarkComponent = index => {
      const currentMarkValue = trackMarks[index];
      const currentSliderValue =
        value || (Array.isArray(value) && value[0]) || 0;
      const style =
        currentMarkValue > Math.max(currentSliderValue)
          ? trackMarkStyles.activeMark
          : trackMarkStyles.inactiveMark;
      return <View style={style} />;
    };
  }

  const renderChildren = () => {
    return React.Children.map(children, child => {
      if (!!child && child.type === Slider) {
        return React.cloneElement(child, {
          onValueChange: setValue,
          renderTrackMarkComponent,
          trackMarks,
          value,
        });
      }

      return child;
    });
  };
  return (
    <View style={Styles.sliderContainer}>
      <View style={Styles.titleContainer}>
        <Text>{caption}</Text>
        <Text>{Array.isArray(value) ? value.join(' - ') : value}</Text>
      </View>
      {renderChildren()}
    </View>
  );
};

export function Navegar(navigation) {
  navigation.navigate('Principal');
}

//a gente puxou la do index o setAtualiza
export function Item({
  data,
  setAtualiza,
  cliqueLista,
  setCliqueLista,
  recording,
  onStartPlay,
  onPausePlay,
}) {
  const [modalVisibleIcon, setModalVisibleIcon] = useState(false);
  const [modalScissors, setModalScissors] = useState(false);
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
    setModalVisibleIcon(false);
    setModalScissors(false);
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

            <TouchableOpacity
              onPress={() => setModalScissors(true)}
              style={{backgroundColor: '#ddd', height: 50, width: 50}}>
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
          <TouchableWithoutFeedback
            onPress={() => setModalScissors(!modalScissors)}>
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

                <SliderContainer
                  caption="<Slider/> 2 thumbs, min, max,  and"
                  sliderValue={[4, 16]}>
                  <Slider
                    animateTransitions="slide"
                    maximumTrackTintColor="#d3d3d3"
                    minimumTrackTintColor="#3B3355"
                    thumbTintColor="#3B3355"
                    minimumValue={4}
                    maximumValue={18}
                    step={2}
                  />
                </SliderContainer>

                <View>
                  <View style={Styles.editor}>
                    <Text style={Styles.timer2}>0:00</Text>

                    <TouchableOpacity
                      onPress={recording ? onPausePlay : onStartPlay}>
                      {recording ? (
                        <Foundation name="pause" size={50} color={'#3B3355'} />
                      ) : (
                        <AntDesign name="play" size={50} color={'#3B3355'} />
                      )}
                    </TouchableOpacity>

                    <Text style={Styles.timer2}>0:00</Text>
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
