
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
} from 'react-native';


import { createDrawerNavigator } from '@react-navigation/drawer'

const DetailScreen = ({navigation}) =>{
    

    return(
    <>
       <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={()=>{navigation.toggleDrawer();}}>
          <Image source={require("../img/menu.png")} style={styles.menu}/>
        </TouchableOpacity>
        
      </View>
        



    </>
)
}


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
  }
})




export { DetailScreen }
