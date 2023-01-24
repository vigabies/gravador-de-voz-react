import {View, Text, TouchableOpacity} from 'react-native';
import Styles from './styles';
import {Navegar} from './functions';
import Tela4 from '../tela4';
import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

export default function Principal() {
  const [gravar, setGravar] = useState(true);
  const navegation = useNavigation();
  const navegar = tela => {
    navegation.navigate(tela, {});
  };

  function toggleTela(teste) {
    setGravar(teste);
  }

  return (
    <View style={Styles.container}>
      <View style={Styles.top}>
        <View style={Styles.row}>
          <TouchableOpacity onPress={() => toggleTela(true)}>
            <Text style={gravar ? Styles.text2 : Styles.text3}>Gravar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => toggleTela(false)}>
            <Text style={gravar ? Styles.text3 : Styles.text2}>Ouvir</Text>
          </TouchableOpacity>
        </View>
      </View>

      {!gravar ? (
        <Tela4 />
      ) : (
        <>
          <View style={Styles.body}>
            <Text style={Styles.timer}>00:00</Text>
            <Text style={Styles.text}>Pronto para começar</Text>
          </View>

          <View style={Styles.bottom}>
            <LinearGradient
              style={Styles.botao}
              colors={['#BFCDE0', '#5D5D81']}>
              <TouchableOpacity>
                <Icon name="microphone" size={50} color="#fff" />
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </>
      )}
    </View>
  );
}
