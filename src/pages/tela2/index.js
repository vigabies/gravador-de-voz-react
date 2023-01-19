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
      <ImageBackground
        style={Styles.img}
        source={require('../assets/images/woman.png')}>
        <LinearGradient
          colors={['transparent', '#fff']}
          start={{x: 1, y: 0}}
          end={{x: 1, y: 1}}
          style={Styles.linearGradient}>
          <TouchableOpacity onPress={() => navegar()} style={Styles.icon}>
            <EvilIcons name="close-o" color={'#fff'} size={45} />
          </TouchableOpacity>

          <LinearGradient style={Styles.mic} colors={['#BFCDE0', '#5D5D81']}>
            <TouchableOpacity>
              <FontAwesome name="microphone" size={27} color="white" />
            </TouchableOpacity>
          </LinearGradient>

          <Text style={Styles.easy}>
            Easy<Text style={Styles.recorder}>Recorder</Text>
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              height: 75,
              top: 120,
            }}>
            <View
              style={{
                backgroundColor: '#D9D9D9',
                flex: 0.2,
                borderRadius: 5,
                height: '150%',
                left: -62,
              }}
            />
            <View
              style={{
                backgroundColor: '#D9D9D9',
                flex: 0.3,
                height: '150%',
                borderRadius: 5,
                left: -45,
              }}
            />
            <View
              style={{
                backgroundColor: '#D9D9D9',
                flex: 0.3,
                height: '150%',
                borderRadius: 5,
                left: -23,
              }}
            />
            <View
              style={{
                backgroundColor: '#D9D9D9',
                flex: 0.6,
                height: '150%',
                borderRadius: 5,
              }}
            />
          </View>
        </LinearGradient>
      </ImageBackground>

      <View style={Styles.linha2}>
        <Text style={Styles.text3}>4,99</Text>
        <Text style={Styles.text4}>Mensal</Text>
      </View>

      <View style={Styles.linha3}>
        <Text style={Styles.text3}>15,99</Text>
        <Text style={Styles.text4}>Anual</Text>
      </View>

      <View style={Styles.linha4}>
        <Text style={Styles.text6}>39,99</Text>
        <Text style={Styles.text5}>29,99</Text>
        <Text style={Styles.vitalicio}>Vitalício</Text>
      </View>

      <View style={Styles.linhav} />

      <View style={Styles.linha}>
        <TouchableOpacity>
          <Entypo name="circle" size={15} color={'#5D5D81'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="circle" size={15} color={'#5D5D81'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="circle" size={15} color={'#5D5D81'} />
        </TouchableOpacity>
      </View>

      <LinearGradient style={Styles.touch} colors={['#BFCDE0', '#5D5D81']}>
        <TouchableOpacity>
          <Text style={Styles.text2} onPress={() => navegar()}>
            Continuar
          </Text>
        </TouchableOpacity>
      </LinearGradient>

      <Text style={Styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
    </View>
  );
}
