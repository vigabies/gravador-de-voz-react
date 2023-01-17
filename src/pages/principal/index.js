import {View, Text, TouchableOpacity} from 'react-native';
import Styles from './styles';
import {Navegar} from './functions';
import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Principal() {
  const navegation = useNavigation();

  return (
    <View style={Styles.container}>
      <View style={Styles.row}>
        <TouchableOpacity>
          <Text style={Styles.text2}>Gravar</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={Styles.text3}>Ouvir</Text>
        </TouchableOpacity>
      </View>

      <Text style={Styles.timer}>00:00</Text>
      <Text style={Styles.text}>Pronto para começar</Text>

      <TouchableOpacity style={Styles.botao}>
        <Icon name="microphone" size={50} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
