import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Principal from '../pages/principal';
import LinearGradient from 'react-native-linear-gradient';
import Styles from './styles';
import Tela2 from '../pages/tela2';
import Tela3 from '../pages/tela3';
import Tela4 from '../pages/tela4';
import TelaAsk from '../pages/telask';
import TelaApp from '../pages/telapp';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
          headerTitle: () => (
            <Text style={Styles.easy}>
              Easy<Text style={Styles.recorder}>Recorder</Text>
            </Text>
          ),

          title: () => (
            <Text style={Styles.easy2}>
              Easy<Text style={Styles.recorder2}>Recorder</Text>
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
          drawerActiveBackgroundColor: 'transparent',
        }}
      />

      <Drawer.Screen
        name="Tela2"
        component={Tela2}
        options={{
          headerShown: false,
          title: () => <Text style={Styles.cor}>Atualize para o Pro</Text>,
          drawerIcon: () => (
            <LinearGradient style={Styles.at} colors={['#BFCDE0', '#5D5D81']}>
              <TouchableOpacity>
                <Text style={Styles.pro}>Pro</Text>
              </TouchableOpacity>
            </LinearGradient>
          ),
          drawerActiveBackgroundColor: 'transparent',
        }}
      />

      <Drawer.Screen
        name="Configurações"
        component={Tela3}
        options={{
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTitle: () => <Text style={Styles.padrao}>Configurações</Text>,

          title: () => <Text style={Styles.letra}>Configurações</Text>,

          drawerIcon: () => (
            <FontAwesome name="gear" color="#3B3355" size={20}></FontAwesome>
          ),

          drawerActiveBackgroundColor: 'transparent',
        }}
      />

      <Drawer.Screen
        name="Tela4"
        component={Tela4}
        options={{drawerItemStyle: {height: 0}}}
      />

      <Drawer.Screen
        name="TelaAsk"
        component={TelaAsk}
        options={{
          headerStyle: {
            backgroundColor: '#fff',
          },

          headerTitle: () => (
            <Text style={Styles.padrao}>Perguntas frequentes</Text>
          ),

          title: () => <Text style={Styles.letra}>Perguntas Frequentes</Text>,

          drawerIcon: () => (
            <MaterialCommunityIcons
              name="comment-question"
              color="#3B3355"
              size={20}
            />
          ),
          drawerActiveBackgroundColor: 'transparent',
        }}
      />

      <Drawer.Screen
        name="TelaApp"
        component={TelaApp}
        options={{
          headerStyle: {
            backgroundColor: '#fff',
          },

          headerTitle: () => <Text style={Styles.padrao}>Mais Apps</Text>,

          title: () => <Text style={Styles.letra}>Mais Apps</Text>,

          drawerIcon: () => <Entypo name="grid" color="#3B3355" size={25} />,

          drawerActiveBackgroundColor: 'transparent',
        }}
      />
    </Drawer.Navigator>
  );
}
