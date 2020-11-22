import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image,
  TouchableOpacity,
  Header,
} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {color} from 'react-native-reanimated';
import {NavigationContainer, StackActions} from '@react-navigation/native';

const HomeScreen = ({navigation}) => {
  return (
    <>
      
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.toggleDrawer();
          }}>
          <Image source={require('../img/menu.png')} style={styles.menu} />
        </TouchableOpacity>
        <View>
        <Text style={styles.header}>Dining Diary</Text>
      </View>
      </View>
      <View>
        <Image source={require('../img/logo.png')} style={styles.logo} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    top:10
  },
  button: {
    backgroundColor: '#8AF3FF',
    borderRadius: 20,
    padding: 10,
    shadowColor: '#303838',
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
  menu: {
    width: 60,
    height: 60,
  },
  header: {
    marginLeft: 110,
    fontSize: 45,
    top:-80
  },
  logo:{
    bottom: 10,
    right:20,
    width: 450,
    height: 450
  }
});

export {HomeScreen};
