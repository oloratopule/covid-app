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

function Stats({ navigation }) {
  const [data, setData] = useState('');
  function locally() {
    const API =
      'https://coronavirus-19-api.herokuapp.com/countries/south%20africa';
    fetch(API)
      .then((inde) => inde.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }
  useEffect(() => {
    locally();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.icons}>
        <AntDesign
          name="left"
          size={24}
          color="black"
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
      </View>
      <Text style={styles.heading}>My Country</Text>
      <View style={{ width: '90%' }}>
        <View style={{ flexDirection: 'row' }}>
          <Card style={styles.Card}>
            <Text style={styles.text}>Affected</Text>
            <Text style={styles.text1}>{data.cases}</Text>
          </Card>
          <Card style={styles.Card1}>
            <Text style={styles.text}>Deaths</Text>
            <Text style={styles.text1}>{data.deaths}</Text>
          </Card>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Card style={styles.Card2}>
            <Text style={styles.text}>Recoveries</Text>
            <Text style={styles.text1}>{data.recovered}</Text>
          </Card>
          <Card style={styles.Card3}>
            <Text style={styles.text}>Active</Text>
            <Text style={styles.text1}>{data.active}</Text>
          </Card>
          <Card style={styles.Card4}>
            <Text style={styles.text}>Critical</Text>
            <Text style={styles.text1}>{data.critical}</Text>
          </Card>
        </View>
      </View>
      <View style={{ flexDirection: 'row',marginTop:20 }}>
        <Text style={styles.heading1}>Global</Text>
        <AntDesign
          name="right"
          size={24}
          color="black"
          onPress={() => {
            navigation.navigate('world');
          }}
        />
      </View>
    </View>
  );
}

export default Stats;

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

  Card: {
    width: '57.5%',
    height: 100,
    textAlign: 'center',
    backgroundColor: '#f6973d',
    marginTop: 5,
    marginStart: 2,
    marginEnd: 2,
    color: 'white',
  },
  Card1: {
    width: '57.5%',
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
  heading: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  
  },
  heading1: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginStart:110,
    
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
