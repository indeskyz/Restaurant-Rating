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
  TouchableOpacity
} from 'react-native';


import { createDrawerNavigator } from '@react-navigation/drawer'


const AboutScreen = ({navigation}) =>{
    

    return(
    <>  
        
        <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={()=>{navigation.toggleDrawer();}}>
          <Image source={require("../img/menu.png")} style={styles.menu}/>
        </TouchableOpacity>
      </View>
      
      <View>
      <Text style={styles.info}>@tannerr.io</Text>
        <Text style={styles.title}>About</Text>
        <Text style={styles.name}>Tanner Rizopoulos</Text>
        <Image source={require('../img/me.jpg')} style={styles.me} />
        <Text style={styles.stuNumber}>ID: 101072045</Text>
      </View>
      

      

    </>
)
}

const styles = StyleSheet.create({
  container: {
    
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
    shadowOpacity: 0.35
  },
  menu: {
    width: 60,
    height: 60,
  },
  title:{
    fontSize:70,
    top: -130,
    left: 120,
    
    
  },
  name:{
    fontSize: 65,
    top: 149,
    transform: [{ rotate: '-90deg' }],
    right: 65
    
  },
  stuNumber:{
    fontSize: 30,
    bottom: 398,
    left: 218,
    
    
  },
  me:{
    width: 201,
    height: 326,
    left: 225,
    bottom: 38,
    

  },
  info:{
    transform: [{ rotate: '315deg' }],
    fontSize: 35,
    top: 19,
    left: -6,
    color: '#FE938C'
    
  }
})




export { AboutScreen }
