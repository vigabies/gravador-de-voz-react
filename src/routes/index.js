import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Principal from '../pages/principal';
import Tela2 from '../pages/tela2';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {TouchableOpacity, Text} from 'react-native';
import Styles from './styles';
import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function StackNavegation() {
  //para funcionar o botao la embaixo temos que fazer a const
  const navigation = useNavigation();
  const navegar = () => {
    navigation.navigate('Tela2');
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
            <TouchableOpacity>
              <EvilIcons name="navicon" color="#3B3355" size={35} />
            </TouchableOpacity>
          ),
          //adicionar um botao na direita
          headerRight: () => (
            <TouchableOpacity onPress={() => navegar()} style={Styles.botao}>
              <Text style={Styles.text}>Seja Pro</Text>
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen name="Tela2" component={Tela2} />
    </Stack.Navigator>
  );
}
