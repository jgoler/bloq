import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Quicksand_400Regular } from '@expo-google-fonts/quicksand';
import { Fontisto } from '@expo/vector-icons';



const Welcome = props => {
  let [fontsLoaded] = useFonts({
    Quicksand_400Regular,
  });

  if (!fontsLoaded) {
    return <View>
      <Text>Loading...</Text>
    </View>
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={
          ['rgba(137, 6, 244, 1)', 'transparent'],
          ['rgba(0,0,0, 0.8)', 'transparent']
        }
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: 300,
        }}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>bl{<Fontisto name="earth" size={47} color="white" />}q</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Log In" color="white" onPress={() => {
            props.navigation.push('Login');
          }} />
        </View>
        <View style={styles.button}>
          <Button title="Sign Up" color="white" onPress={() => {
            props.navigation.push('Signup');
          }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e64951'
  },
  title: {
    color: 'white',
    fontSize: 75,
    fontFamily: 'Quicksand_400Regular'
  },
  titleContainer: {
    flex: 1,
    justifyContent: "flex-end"
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    width: '100%',
    alignItems: 'center'
  },
  button: {
    borderWidth: 2,
    width: '80%',
    borderColor: 'white',
    borderRadius: 10,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    margin: '2.5%'
  }
});


export default Welcome;