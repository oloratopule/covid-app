import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import {
  AntDesign,
  Feather,
  MaterialIcons,
  FontAwesome5,
} from '@expo/vector-icons';

function World({ navigation }) {
const [data, setData]=useState('')
  function globally() {
    const API = ' https://coronavirus-19-api.herokuapp.com/all';
    fetch(API)
      .then((inde) => inde.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }
  useEffect(() => {
    globally();
  }, []);
  return (
    <View style={styles.container}>
      <AntDesign
        name="left"
        size={24}
        color="black"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
      <Text style={styles.heading}>Global</Text>
      <View style={{ width: '90%', marginTop: 20 }}>
        <View style={{ flexDirection: 'row' }}>
          <Card style={styles.Card2}>
            <Text style={styles.text}>Recoveries</Text>
            <Text style={styles.text1}>{data.recovered}</Text>
          </Card>
          <Card style={styles.Card3}>
            <Text style={styles.text}>Active</Text>
            <Text style={styles.text1}>{data.cases}</Text>
          </Card>
          <Card style={styles.Card1}>
            <Text style={styles.text}>Deaths</Text>
            <Text style={styles.text1}>{data.deaths}</Text>
          </Card>
        </View>
      </View>
    </View>
  );
}

export default World;

const styles = StyleSheet.create({
  container: {
    marginLeft: 25,
    marginTop: 25,
    marginRight: 25,
  },

  text: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  text1: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'b',
  },
  heading: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },

  Card1: {
    width: '40%',
    height: 100,
    textAlign: 'center',
    backgroundColor: '#f43c3d',
    marginTop: 5,
    marginStart: 2,
    marginEnd: 2,
    color: 'white',
  },
  Card2: {
    width: '40%',
    height: 100,
    textAlign: 'center',
    backgroundColor: '#42c95c',
    marginTop: 5,
    marginStart: 2,
    marginEnd: 1,
    color: 'white',
  },
  Card3: {
    width: '35%',
    height: 100,
    textAlign: 'center',
    backgroundColor: '#399afe',
    marginTop: 5,
    marginStart: 2,
    marginEnd: 1,
    color: 'white',
  },
  Card4: {
    width: '40%',
    height: 100,
    textAlign: 'center',
    backgroundColor: '#703cff',
    marginTop: 5,
    marginStart: 2,
    marginEnd: 1,
    color: 'Red',
  },
});
