import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Principal from '../pages/principal';
import Tela2 from '../pages/tela2';
import Tela3 from '../pages/tela3';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {TouchableOpacity, Text} from 'react-native';
import Styles from './styles';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const Stack = createNativeStackNavigator();

export default function StackNavegation() {
  //para funcionar o botao la embaixo temos que fazer a const
  const navigation = useNavigation();
  const navegar = tela => {
    navigation.navigate(tela, {});
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EasyRecorder"
        component={Principal}
        options={{
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: '#3B3355',
          //adicionar um icone na esquerda
          headerLeft: () => (
            <TouchableOpacity onPress={() => navegar('Configurações')}>
              <EvilIcons name="navicon" color="#3B3355" size={35} />
            </TouchableOpacity>
          ),
          //adicionar um botao na direita
          headerRight: () => (
            <LinearGradient
              style={Styles.botao}
              colors={['#BFCDE0', '#5D5D81']}>
              <TouchableOpacity
                onPress={() => navegar('Tela2')}
                style={Styles.botao}>
                <Text style={Styles.text}>Seja Pro</Text>
              </TouchableOpacity>
            </LinearGradient>
          ),
        }}
      />

      <Stack.Screen
        name="Tela2"
        component={Tela2}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Configurações"
        component={Tela3}
        options={{
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#3B3355',
        }}
      />
    </Stack.Navigator>
  );
}
