import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {
  Foundation,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
  Ionicons,
  AntDesign,
} from '@expo/vector-icons';

function Home({ navigation }) {
  const Home = () => {
    navigation.navigate('Details');
  };
  return (
    <View style={styles.container}>
      <View style={styles.icons}>
        <AntDesign
          name="right"
          size={24}
          color="black"
          onPress={() => {
            navigation.navigate('Details');
          }}
        />
        <Ionicons
          name="stats-chart"
          size={24}
          color="black"
          onPress={() => {
            navigation.navigate('Stats');
          }}
        />
      </View>
      <View style={styles.header}>
        <Text style={styles.covid}>Covid-19</Text>
        <View style={styles.sy}>
          <Text style={styles.symptom}>Symptoms</Text>
          <FontAwesome5 name="virus" size={50} color="black" />
        </View>
        <Text style={styles.days}>
          {' '}
          These symptoms may appear 2-14 days after exposere
        </Text>
      </View>

      <View style={styles.container1}>
        <View style={styles.card1}>
          <Text style={styles.heading}>Cold</Text>
          <Text style={styles.text}>
            The severity of COVID-19 symptoms can range from very mild to
            severe.
          </Text>
        </View>

        <View style={styles.card2}>
          <Text style={styles.heading}>Dry Cough</Text>
          <Text style={styles.text}>
            It appears to spread from person to person among those in close
            contact.
          </Text>
          <FontAwesome5
            style={styles.cough}
            name="head-side-cough"
            size={30}
            color="black"
          />
        </View>
      </View>

      <View style={styles.container1}>
        <View style={styles.card1}>
          <Text style={styles.heading}>Fever</Text>
          <Text style={styles.text}>
            People who are older or have existing chronic medical conditions
            such as heart or lung disease.
          </Text>
        </View>

        <View style={styles.card2}>
          <Text style={styles.heading}>Breathlessness</Text>
          <Text style={styles.text}>
            Excited or tense, often to the point <br /> of the breath.
          </Text>
        </View>
      </View>
    </View>
  );
}
export default Home;

const styles = StyleSheet.create({
  container: {
    marginLeft: 25,
    marginTop: 25,
    marginRight: 25,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    marginTop: 40,
  },
  covid: {
    fontSize: 20,
  },
  symptom: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  days: {
    fontSize: 11,
  },
  sy: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container1: {
    marginTop: 35,
    display: 'flex',
    flexDirection: 'row',
  },
  card1: {
    height: 180,
    width: 140,
    backgroundColor: '#ffc76b',
    borderRadius: 15,
    marginLeft: 0,
  },
  heading: {
    marginTop: '10%',
    marginLeft: '10%',
    fontWeight: 'bold',
  },
  text: {
    marginTop: 15,
    marginLeft: '10%',
  },
  card2: {
    height: 180,
    width: 140,
    backgroundColor: '#ffc76b',
    marginTop: 15,
    borderRadius: 15,
    marginLeft: 5,
    marginRight: 10,
  },
  cough: {
    marginLeft: 50,
    marginTop: 5,
  },
});
