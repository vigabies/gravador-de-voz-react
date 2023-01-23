//pagina feita com erros, o CORRETO é utilizar o flex!!!

import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Tela2() {
  const navigation = useNavigation();
  const navegar = () => {
    navigation.goBack();
    //goback serve para voltar a tela inicial
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.img}>
        <ImageBackground
          style={Styles.img}
          source={require('../assets/images/woman.png')}>
          <TouchableOpacity onPress={() => navegar()} style={Styles.icon}>
            <EvilIcons name="close-o" color={'#fff'} size={45} />
          </TouchableOpacity>
          <LinearGradient
            colors={['transparent', '#fff']}
            start={{x: 1, y: 0}}
            end={{x: 1, y: 1}}
            style={Styles.linearGradient}></LinearGradient>
        </ImageBackground>

        <View style={Styles.linha}>
          <LinearGradient style={Styles.mic} colors={['#BFCDE0', '#5D5D81']}>
            <TouchableOpacity>
              <FontAwesome name="microphone" size={27} color="white" />
            </TouchableOpacity>
          </LinearGradient>

          <Text style={Styles.easy}>
            Easy<Text style={Styles.recorder}>Recorder</Text>
          </Text>
        </View>
      </View>

      <View style={Styles.quadrados}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            height: 80,
            top: '3%',
          }}>
          <View
            style={{
              backgroundColor: '#D9D9D9',
              flex: 0.3,
              borderRadius: 5,
              height: 125,
              marginRight: '3%',
            }}
          />

          <View
            style={{
              backgroundColor: '#D9D9D9',
              flex: 0.4,
              borderRadius: 5,
              height: 125,
              marginRight: '3%',
            }}
          />

          <View
            style={{
              backgroundColor: '#D9D9D9',
              flex: 0.4,
              borderRadius: 5,
              height: 125,
              marginRight: '3%',
            }}
          />

          <View
            style={{
              backgroundColor: '#D9D9D9',
              flex: 0.3,
              borderRadius: 5,
              height: 125,
            }}
          />
        </View>
      </View>

      <View style={Styles.valores}>
        <Text></Text>
      </View>

      <View style={Styles.botao}>
        <Text></Text>
      </View>
    </View>
  );
}
