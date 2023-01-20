import React from 'react';
import {View, Text} from 'react-native';
import Styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

export function Navegar(navigation) {
  navigation.navigate('Principal');
}

export function Item({data}) {
  return (
    <View style={Styles.linha3}>
      <Text style={Styles.title}>{data.nome}</Text>

      <View style={Styles.linha4}>
        <Text style={Styles.subtext}>{data.data}</Text>
        <Text style={Styles.subtext}>{data.hora}</Text>
        <Text style={Styles.subtext}>{data.kb}</Text>
      </View>

      <View style={Styles.linha6}>
        <Feather name="scissors" size={25} color={'red'} />
      </View>

      <View style={Styles.linha5}>
        <Text style={Styles.tag}>{data.tag}</Text>
        <Text style={Styles.time}>{data.tempo}</Text>
      </View>
    </View>
  );
}
