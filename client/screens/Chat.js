import React from 'react';
import { StyleSheet, Image, Text, View, Button, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import { useFonts, Quicksand_700Bold, Quicksand_600SemiBold, Quicksand_400Regular } from '@expo-google-fonts/quicksand';
import { Ionicons } from '@expo/vector-icons';
import { StackActions } from '@react-navigation/native';
const popAction = StackActions.pop(1);
import { GiftedChat } from 'react-native-gifted-chat';
//import { Platform } from 'os';

const Chat = props => {
  let [fontsLoaded] = useFonts({
    Quicksand_700Bold,
    Quicksand_600SemiBold,
    Quicksand_400Regular
  });

  if (!fontsLoaded) {
    return <View>
      <Text>Loading...</Text>
    </View>
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.top}>
        <Image style={{ width: 45, height: 45, borderRadius: 45 / 2 }}
          source={{
            uri: 'https://i.kym-cdn.com/entries/icons/mobile/000/022/134/elmo.jpg'
          }}
        />
        <Text style={{ fontSize: 20, fontFamily: 'Quicksand_600SemiBold' }}>Elmo</Text>
      </View>
      <GiftedChat
      />
      {
        Platform.OS === 'android' && <KeyboardAvoidingView behavior="padding" />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: '#e64951'
  },
  top: {
    height: 110,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

});

export default Chat;