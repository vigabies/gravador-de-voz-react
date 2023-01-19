import {View, Text, TouchableOpacity} from 'react-native';
import Styles from './styles';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Icon} from 'react-native-vector-icons/Icon';

export default function Tela3() {
  return (
    <View style={Styles.container}>
      <View>
        <Text style={Styles.title}>Geral</Text>
        <Text style={Styles.text}>Linguagem</Text>
        <Text style={Styles.sub}>Português(Brasil)</Text>
        <Text style={Styles.text}>Fonte de áudio</Text>
        <Text style={Styles.sub}>Padrão</Text>
        <Text style={Styles.text}>Qualidade da gravação</Text>
        <Text style={Styles.sub}>Padrão</Text>
        <Text style={Styles.text}>Taxa de amostragem</Text>
        <Text style={Styles.sub}>48 KHz</Text>
      </View>

      <View style={Styles.avancado}>
        <Text style={Styles.title}>Avançado</Text>
        <Text style={Styles.text}>Linguagem</Text>
        <Text style={Styles.sub}>Português(Brasil)</Text>
        <Text style={Styles.text}>Fonte de áudio</Text>
        <Text style={Styles.sub}>Padrão</Text>
        <Text style={Styles.text}>Qualidade da gravação</Text>
        <Text style={Styles.sub}>Padrão</Text>

        <Text style={Styles.text}>Taxa de amostragem</Text>
      </View>
    </View>
  );
}
