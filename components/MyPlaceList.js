import React from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';

import ListMyPlaces from './ListMyPlaces'

const MyPlaceList = () => {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      <ListMyPlaces />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',
    
  },
});

export default MyPlaceList;