import { Left } from 'native-base';
import React, {useState} from 'react';
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
  FlatList,
  TextInput,
  
} from 'react-native';

import MyPlaceInsert from './InsertMyPlace'
import MyPlaceList from './MyPlaceList'


const MyPlaces = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={()=>{navigation.toggleDrawer();}}>
          <Image source={require("../img/menu.png")} style={styles.menu}/>
        </TouchableOpacity>
        <Text style={styles.title}>My Places</Text>
      </View>
      
      <SafeAreaView style={styles.container}>
      
      <View style={styles.card}>
        <MyPlaceList />
        <MyPlaceInsert />
      </View>
    </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: "flex-start",
    top: 10,
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
  title: {
    color: 'black',
    fontSize: 36,
    marginTop: -65,
    marginLeft: 125,
    marginBottom: 30,
    fontWeight: '300',
    textAlign: 'center',
    
  },
  card: {
    
    flex: 1,
    borderTopLeftRadius: 10, // to provide rounded corners
    borderTopRightRadius: 10, // to provide rounded corners
    marginLeft: 10,
    marginRight: 10,
    width: 300
    
  },
  input: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 10,
    top: -30
  },
 
});

export {MyPlaces};
