import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Principal from '../pages/principal';
import LinearGradient from 'react-native-linear-gradient';
import Styles from './styles';
import Tela2 from '../pages/tela2';
import Tela3 from '../pages/tela3';
import Tela4 from '../pages/tela4';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Drawer = createDrawerNavigator();

export default function drawer() {
  const navigation = useNavigation();
  const navegar = tela => {
    navigation.navigate(tela, {});
  };

  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="EasyRecorder"
        component={Principal}
        options={{
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: '#3B3355',
          title: () => (
            <Text style={Styles.easy}>
              Easy<Text style={Styles.recorder}>Recorder</Text>
            </Text>
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

      <Drawer.Screen
        name="Tela2"
        component={Tela2}
        options={{
          headerShown: false,
          title: () => (
            <Text style={Styles.atualize}>Atualize para o Pro</Text>
    
          ),
        }}
      />

      <Drawer.Screen
        name="Configurações"
        component={Tela3}
        options={{
          headerStyle: {
            backgroundColor: '#fff',
          },
          title: () => <Text style={Styles.config}>Configurações</Text>,

          drawerIcon: () => (
            <FontAwesome name="gear" color="#3B3355" size={20}></FontAwesome>
          ),
        }}
      />
      <Drawer.Screen
        name="Tela4"
        component={Tela4}
        options={{drawerItemStyle: {height: 0}}}
      />
    </Drawer.Navigator>
  );
}
