
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Button } from 'react-native';
import { useFonts, Quicksand_700Bold, Quicksand_600SemiBold, Quicksand_400Regular } from '@expo-google-fonts/quicksand';
import { FontAwesome } from '@expo/vector-icons';
//import { Fontisto } from '@expo/vector-icons';


const Home = props => {
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
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTitle}>
          <Text style={styles.title}>Friends</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.friendScrollView} style={styles.friendsContainer}>
        <View style={{ width: '85%' }}>
          <View style={styles.blankSpace}>

          </View>
          <TouchableOpacity style={styles.friend} onPress={() => {
            props.navigation.push('Chat');
          }}>
            <View style={styles.profileImageContainer}>
              <Image style={{ width: 70, height: 70, borderRadius: 70 / 2 }}
                source={{
                  uri: 'https://i.kym-cdn.com/entries/icons/mobile/000/022/134/elmo.jpg'
                }}
              />
            </View>
            <View style={styles.friendTextContainer}>
              <Text style={styles.name}>Elmo</Text>
              <Text style={styles.friendText}>Hello, I am elmo!</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.friend} onPress={() => {
            props.navigation.push('Chat');
          }}>
            <View style={styles.profileImageContainer}>
              <Image style={{ width: 70, height: 70, borderRadius: 70 / 2 }}
                source={{
                  uri: 'data:image/jpeg;base64,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'
                }}
              />
            </View>
            <View style={styles.friendTextContainer}>
              <Text style={styles.name}>Cookie Monster</Text>
              <Text style={styles.friendText}>This is a robbery, give cookies now</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.friend} onPress={() => {
            props.navigation.push('Chat');
          }}>
            <View style={styles.profileImageContainer}>
              <Image style={{ width: 70, height: 70, borderRadius: 70 / 2 }}
                source={{
                  uri: 'https://lumiere-a.akamaihd.net/v1/images/character_themuppets_kermit_b77a431b.jpeg?region=0%2C0%2C450%2C450'
                }}
              />
            </View>
            <View style={styles.friendTextContainer}>
              <Text style={styles.name}>Kermit</Text>
              <Text style={styles.friendText}>Hey, I'm Kermit, how are you?</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.friend} onPress={() => {
            props.navigation.push('Chat');
          }}>
            <View style={styles.profileImageContainer}>
              <Image style={{ width: 70, height: 70, borderRadius: 70 / 2 }}
                source={{
                  uri: 'https://preview.redd.it/tj32a9jwmuv51.jpg?auto=webp&s=cae04251d415ef0c77fa795dcc1db28fc0017869'
                }}
              />
            </View>
            <View style={styles.friendTextContainer}>
              <Text style={styles.name}>Sheldon</Text>
              <Text style={styles.friendText}>I ruthlessly murdered 37 people</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.friend} onPress={() => {
            props.navigation.push('Chat');
          }}>
            <View style={styles.profileImageContainer}>
              <Image style={{ width: 70, height: 70, borderRadius: 70 / 2 }}
                source={{
                  uri: 'https://www.abc.net.au/cm/rimage/12551616-16x9-large.jpg?v=2'
                }}
              />
            </View>
            <View style={styles.friendTextContainer} >
              <Text style={styles.name}>Shrek</Text>
              <Text style={styles.friendText}>Hey there baby I'm Shrek</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.friend} onPress={() => {
            props.navigation.push('Chat');
          }}>
            <View style={styles.profileImageContainer}>
              <Image style={{ width: 70, height: 70, borderRadius: 70 / 2 }}
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Bugs_Bunny.svg/1200px-Bugs_Bunny.svg.png'
                }}
              />
            </View>
            <View style={styles.friendTextContainer} >
              <Text style={styles.name}>Bugs Bunny</Text>
              <Text style={styles.friendText}>What's up Doc</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.friend} onPress={() => {
            props.navigation.push('Chat');
          }}>
            <View style={styles.profileImageContainer}>
              <Image style={{ width: 70, height: 70, borderRadius: 70 / 2 }}
                source={{
                  uri: 'data:image/jpeg;base64,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'
                }}
              />
            </View>
            <View style={styles.friendTextContainer} >
              <Text style={styles.name}>Mickey Mouse</Text>
              <Text style={styles.friendText}>Oh boy!</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.friend} onPress={() => {
            props.navigation.push('Chat');
          }}>
            <View style={styles.profileImageContainer}>
              <Image style={{ width: 70, height: 70, borderRadius: 70 / 2 }}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgUt236eUgOiF5ARG3xut2xGejtBrLRdCHTQ&usqp=CAU'
                }}
              />
            </View>
            <View style={styles.friendTextContainer} >
              <Text style={styles.name}>Charlie Brown</Text>
              <Text style={styles.friendText}>Good grief</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.friend} onPress={() => {
            props.navigation.push('Chat');
          }}>
            <View style={styles.profileImageContainer}>
              <Image style={{ width: 70, height: 70, borderRadius: 70 / 2 }}
                source={{
                  uri: 'https://variety.com/wp-content/uploads/2014/02/prn5-netflix-inc-scholastic-inc-clifford-big-red-dog-1yhigh.jpg?w=1024'
                }}
              />
            </View>
            <View style={styles.friendTextContainer} >
              <Text style={styles.name}>Clifford the Big Red Dog</Text>
              <Text style={styles.friendText}>Dog noises</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.friend} onPress={() => {
            props.navigation.push('Chat');
          }}>
            <View style={styles.profileImageContainer}>
              <Image style={{ width: 70, height: 70, borderRadius: 70 / 2 }}
                source={{
                  uri: 'https://img-cdn.tid.al/o/533f0a478768940b012e685249d015dca20f4820.jpg'
                }}
              />
            </View>
            <View style={styles.friendTextContainer} >
              <Text style={styles.name}>Curious George</Text>
              <Text style={styles.friendText}>Ooh Ooh Ahh Ahh</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.friend} onPress={() => {
            props.navigation.push('Chat');
          }}>
            <View style={styles.profileImageContainer}>
              <Image style={{ width: 70, height: 70, borderRadius: 70 / 2 }}
                source={{
                  uri: 'https://whythebeatlesarestillrelevant.files.wordpress.com/2018/11/pink-panther-1024x768.jpg?w=640'
                }}
              />
            </View>
            <View style={styles.friendTextContainer} >
              <Text style={styles.name}>Pink Panther</Text>
              <Text style={styles.friendText}>Pink panther noises</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    //backgroundColor: '#e64951'
  },
  header: {
    flexDirection: 'row',
    height: 100,
    width: '100%',
    justifyContent: 'flex-start',
    borderBottomWidth: 2,
    borderBottomColor: 'black'
  },
  tabNavigator: {
    justifyContent: 'center',
    //marginLeft: '8%',
    marginTop: 40,
    flex: 1,
    alignItems: 'flex-start'
  },
  headerTitle: {
    justifyContent: 'center',
    //marginLeft: '18%',
    marginTop: 40,
    //marginRight: 30,
    flex: 1,
    alignItems: 'center'
  },
  title: {
    color: 'black',
    fontSize: 35,
    fontFamily: 'Quicksand_600SemiBold'
  },
  empty: {
    flex: 1
  },

  friendsContainer: {
    width: '100%',
    //justifyContent: 'center'
    //marginLeft: 80
  },
  blankSpace: {
    marginTop: 20,
  },
  friendScrollView: {
    alignItems: 'center',
    justifyContent: 'center',
    //marginTop: 30,
    //width: '80%',
  },
  friend: {
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25
  },
  name: {
    color: 'black',
    fontSize: 21,
    fontFamily: 'Quicksand_700Bold'
  },
  profileImageContainer: {
    flex: 3
  },
  friendTextContainer: {
    flex: 9
  },
  friendText: {
    fontFamily: 'Quicksand_600SemiBold',
    //color: 'grey',
    opacity: 0.5,
    fontSize: 15
  }
});

export default Home;