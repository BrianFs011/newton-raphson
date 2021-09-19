import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Table = ({results}) => {
  return (
    <View style={{alignItems: 'flex-start',justifyContent:'center', width:"90%", marginTop: 20, borderWidth:1}}>
     
      <Text style={[styles.font, {borderBottomWidth:0, borderTopWidth:0}]}>n: {results.i}</Text>
      <Text style={[styles.font, {borderBottomWidth:0, borderTopWidth:0}]}>x: {results.x}</Text>
      <Text style={[styles.font, {borderBottomWidth:0, borderTopWidth:0}]}>f(x): {results.resultFX}</Text>
      <Text style={[styles.font, {borderBottomWidth:0, borderTopWidth:0}]}>f'(x): {results.resultFXL}</Text>
      <Text style={[styles.font, {borderBottomWidth:0, borderTopWidth:0}]}>xn+1: {results.xn}</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    width:'auto',
    backgroundColor: '#ddd',
    borderRadius: 10,
  },
  font:{
    fontSize: 25,
    marginLeft: 15
  }
});

export default Table;