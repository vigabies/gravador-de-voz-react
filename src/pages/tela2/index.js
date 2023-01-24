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
        <View style={Styles.quadro}>
          <View style={Styles.quadro1} />
          <View style={Styles.quadros} />
          <View style={Styles.quadros} />
          <View style={Styles.quadrofinal} />
        </View>
      </View>

      <View style={Styles.valores}>
        <View style={Styles.mensal}>
          <Text style={Styles.valor}>4,99</Text>
          <Text style={Styles.tempo}>Mensal</Text>
        </View>
        <View style={Styles.mensal}>
          <Text style={Styles.valor}>15,99</Text>
          <Text style={Styles.tempo}>Anual</Text>
        </View>
        <View style={Styles.vital}>
          <View style={Styles.linhav} />
          <Text style={Styles.trinta}>39,99</Text>
          <Text style={Styles.vinte}>29,99</Text>
          <Text style={Styles.vitalicio}>Vitalício</Text>
        </View>
      </View>

      <View style={Styles.linhaicon}>
        <TouchableOpacity>
          <Entypo name="circle" size={14} color={'#5D5D81'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="circle" size={14} color={'#5D5D81'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo
            style={Styles.icon2}
            name="circle"
            size={14}
            color={'#5D5D81'}
          />
        </TouchableOpacity>
      </View>

      <View style={Styles.botao}>
        <LinearGradient style={Styles.touch} colors={['#BFCDE0', '#5D5D81']}>
          <TouchableOpacity>
            <Text style={Styles.continuar} onPress={() => navegar()}>
              Continuar
            </Text>
          </TouchableOpacity>
        </LinearGradient>

        <View style={Styles.textn}>
          <Text style={Styles.mintext}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>
      </View>
    </View>
  );
}
