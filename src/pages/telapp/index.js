import {View, Text} from 'react-native';
import React,{useState} from 'react';
import Styles from './styles';
import {useNavigation} from '@react-navigation/native';

export default function TelaApp() {
  return (
    <View style={Styles.container}>
      <Text>index</Text>
    </View>
  );
}
