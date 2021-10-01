import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';

function Mask({ navigation }) {
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

      <View style={styles.header}>
        <Text style={styles.covid}>Covid-19</Text>
        <View style={styles.sy}>
          <Text style={styles.symptom}>Preventation</Text>
          <AntDesign
            name="play"
            size={34}
            color="black"
            onPress={() => {
              navigation.navigate('SocialDistancing');
            }}
          />
        </View>
      </View>
      <View style={styles.hands}>
        <MaterialIcons name="masks" size={190} color="black" />
        <Text style={styles.heading}> Wear a mask</Text>
        <Text style={styles.text}>
          A cloth face covering may not protect the wearer, but it may keep the
          wearer from spreading the virus to others.
        </Text>
      </View>

      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          marginTop: 80,
        }}
      />
  
    </View>
  );
}

export default Mask;

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
  sy: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hands: {
    textAlign: 'center',
    marginTop: 25,
    backgroundColor: '#ffc76b',
    width: 280,
    height: 350,
    borderRadius: 15,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  text: {
    marginTop: 10,
    fontSize: 15,
  },
});
