//pagina feita com erros, o CORRETO é utilizar o flex!!!

import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import React from 'react';
import Styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

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
        source={require('../assets/images/woman.png')}
      />

      <TouchableOpacity onPress={() => navegar()} style={Styles.icone}>
        <EvilIcons name="close-o" color="#fff" size={45} />
      </TouchableOpacity>

      {/* fazer a transparencia da imagem */}
      <LinearGradient
        colors={['transparent', 'white']}
        start={{x: 1, y: 0}}
        end={{x: 1, y: 1}}
        style={Styles.linearGradient}></LinearGradient>

      <LinearGradient style={Styles.botao2} colors={['#BFCDE0', '#5D5D81']}>
        <TouchableOpacity>
          <Icon name="microphone" size={25} color="#fff" />
        </TouchableOpacity>
      </LinearGradient>

      <Text style={Styles.easy}>
        Easy<Text style={Styles.rec}>Recorder</Text>
      </Text>

      <View style={Styles.quadrado} />
      <View style={Styles.quadrado2} />
      <View style={Styles.quadrado3} />
      <View style={Styles.quadrado4} />

      <View style={Styles.mensal}>
        <Text style={Styles.valor}>4,99</Text>
        <Text style={Styles.tempo}>Mensal</Text>
      </View>

      <View style={Styles.anual}>
        <Text style={Styles.valor}>15,99</Text>
        <Text style={Styles.tempo}>Anual</Text>
      </View>

      <View style={Styles.vital}>
        <Text style={Styles.trinta}>39,99</Text>
        <Text style={Styles.vinte}>29,99</Text>
        <Text style={Styles.vitalicio}>Vitalício</Text>
      </View>

      <LinearGradient style={Styles.botao} colors={['#BFCDE0', '#5D5D81']}>
        <TouchableOpacity>
          <Text style={Styles.text}>Continuar</Text>
        </TouchableOpacity>
      </LinearGradient>


    </View>
  );
}
