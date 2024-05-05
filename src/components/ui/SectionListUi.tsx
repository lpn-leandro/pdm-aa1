import { View, Text, SectionList, StyleSheet } from 'react-native';
import React from 'react';

import data from '../../services/data';
import convertData from '../helpers/convertData';

export default function SectionListUi() {
  return (
    <View style={styles.container}>
      <SectionList
        style={styles.sectionList}
        sections={convertData(data)}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionTitle}>{section.brand}</Text>
        )}
        renderItem={({ item }) => (
          <View style={styles.cars}>
            <Text style={styles.text}>Modelo: {item.model}</Text>
            <Text style={styles.text}>Ano: {item.year}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
  },
  sectionList: {
    alignSelf: 'center',
    marginTop: 10,
    
  },
  sectionTitle: {
    marginTop: 16,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: 'black',
    color: 'white',
    
  },
  cars: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: 'black',
    
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
  }
});
