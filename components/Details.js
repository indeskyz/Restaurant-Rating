import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {TextInput} from 'react-native-gesture-handler';
import {AirbnbRating} from 'react-native-ratings';
import MapView, {Marker} from 'react-native-maps';

const Details = ({navigation}) => {
  const [region, setRegion] = useState({
    latitude: 51.5079145,
    longitude: -0.0899163,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.TextInput}
          placeholder="Add Address "
          placeholderTextColor={'#b9aaa2'}
          autoCorrect={false}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Phone Number, eg 647-999-0000 "
          keyboardType="number-pad"
          placeholderTextColor={'#b9aaa2'}
          autoCorrect={false}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Description"
          placeholderTextColor={'#b9aaa2'}
          autoCorrect={false}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Tags"
          placeholderTextColor={'#b9aaa2'}
          autoCorrect={false}
        />

        <AirbnbRating ratingCount={5} size={45} reviewColor="black" />
      </View>
      <MapView
        style={{flex: 2}}
        initalRegion={region}
        onRegionChangeComplete={(region) => setRegion(region)}>
        <Marker coordinate={{latitude: 51.5078788, longitude: -0.0877321}} />
      </MapView>
      <Button
        title="Return"
        color="#c2847a"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#454b66',
  },
  TextInput:{
    fontSize: 25
  }
});

export {Details};
