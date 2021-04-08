import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, Picker, Button, Modal, Alert, Dimensions } from 'react-native';
import { useFonts, Quicksand_700Bold, Quicksand_600SemiBold, Quicksand_400Regular } from '@expo-google-fonts/quicksand';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import { Entypo } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';


const { width } = Dimensions.get("window");
const height = width * 100 / 60;

const images = [
  'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1398%26cropX2%3D3908%26cropY1%3D594%26cropY2%3D3102',
  'https://cdn.vox-cdn.com/thumbor/4QtOwnOxCdwESvt1-CpQSTZvHHA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19932738/1206292068.jpg.jpg',
  'https://s.abcnews.com/images/Business/elon-musk-tesla-cybertruck-broken-windows-02-ap-jc-191122_hpMain_4x3_992.jpg',
  'https://cdn.geekwire.com/wp-content/uploads/2018/11/181112-elon-fh21.jpg',
  'https://pyxis.nymag.com/v1/imgs/e0e/11b/93a73ed12f25f2fdcc4f5473fc9460a2ff-elon-musk.rsquare.w1200.jpg'
]

const AddFriends = props => {
  const [isVisible, setIsVisible] = useState(false);


  const displayModal = show => {
    setIsVisible(show);
  }

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
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={isVisible}
          onRequestClose={() => {
            Alert.alert("Modal has now been closed");
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalButtonStyles}>
              <Button color="#e64951" title="close" onPress={() => {
                displayModal(!isVisible);
              }} />
            </View>
            <View style={styles.cardContainer}>
              <View //style={{ width: '100%', flex: 3, borderWidth: 2, borderColor: 'black' }}
                style={{
                  width: '100%', flex: 3, alignItems: 'center', justifyContent: 'center',
                }}
              >
                <View style={{ width, flex: 3 }}>
                  <ScrollView
                    pagingEnabled
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ width, height }}>

                    {
                      images.map((image, index) => (
                        <Image
                          key={index}
                          source={{ uri: image }}
                          style={styles.image} />
                      ))
                    }
                  </ScrollView>
                </View>
              </View>
              <View style={{ flex: 1.5 }}>
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  style={styles.userInfo}>
                  <View style={styles.nameContainer}>
                    <Text style={styles.name}>Elon Musk</Text>
                  </View>
                  <View>
                    <Text style={styles.gradeNumber}>Grade: 12</Text>
                  </View>
                  <View style={styles.userDescription}>
                    <Text style={styles.userDescriptionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit tincidunt nunc, iaculis imperdiet nisl feugiat ac. Vivamus vel ante nec justo consectetur fringilla ac at lectus. Nunc consequat orci nunc</Text>
                  </View>
                </ScrollView>
                <View style={{ flex: .7, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                  <View style={styles.firstIconContainer}>
                    <Foundation name="x" size={50} color="black" />
                  </View>
                  <View style={styles.secondIconContainer}>
                    <Entypo name="check" size={50} color="black" />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Modal>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Add Friends</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.instructionsText}>Fill out the form to connect (note, the questions are optional)</Text>
          <View style={styles.card}>
            <View style={{ marginTop: 30, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={styles.inputLabel}>Grade</Text>
              <TextInput style={styles.inputTextStyles} textAlign={'center'} keyboardType="numeric" placeholder="grade #" />
            </View>
            <View style={{ marginBottom: 150, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={styles.inputLabel}>Gender</Text>
              <DropDownPicker
                items={[
                  { label: 'Male', value: 'male', },
                  { label: 'Female', value: 'female', },
                  { label: 'Other', value: 'other', },
                ]}
                placeholder="Select a gender"
                containerStyle={{ height: 40, width: '80%' }}
                style={{ backgroundColor: '#fafafa' }}
                itemStyle={{
                  justifyContent: 'flex-start'
                }}
                dropDownStyle={{ backgroundColor: '#fafafa' }}
                onChangeItem={item => this.setState({
                  country: item.value
                })}
              />
            </View>
            <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
              <View style={styles.buttonContainer}>
                <Button color="black" title="Go" onPress={() => {
                  displayModal(true);
                }} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    //backgroundColor: '#e64951'
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontFamily: 'Quicksand_600SemiBold',
    fontSize: 35,
    color: 'black'
  },
  body: {
    alignItems: 'center',
    flex: 4,
    width: '90%'
  },
  inputText: {
    fontFamily: 'Quicksand_700Bold',
    color: 'gray',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  instructionsText: {
    fontFamily: 'Quicksand_700Bold',
    fontSize: 15,
    marginBottom: 30,
    //color: 'gray',
    fontWeight: 'bold'
  },
  inputTextStyles: {
    width: '17%',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    height: 20,
    marginBottom: 25,
    width: 50
  },
  card: {
    width: '95%',
    borderWidth: 2,
    borderColor: '#e64951',
    height: '85%',
    borderRadius: 40,
    backgroundColor: 'rgba(230, 73, 81, 0.75)',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  inputLabel: {
    fontFamily: 'Quicksand_700Bold',
    fontSize: 18,
    marginBottom: 20,
    //color: 'gray',
    fontWeight: 'bold'
  },
  buttonContainer: {
    width: '80%',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10
  },
  modalButtonStyles: {
    flex: 0.5,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '80%',
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    flex: 5,
    width: '100%',
    alignItems: 'center',
    //justifyContent: 'center'
  },
  image: {
    width,
    height,
    resizeMode: 'cover'
  },
  userInfo: {
    flex: 2,
    width: '90%'
  },
  name: {
    fontFamily: 'Quicksand_700Bold',
    fontSize: 35
  },
  gradeNumber: {
    fontFamily: 'Quicksand_600SemiBold',
    fontSize: 20,
    color: 'gray'
  },
  userDescriptionText: {
    fontFamily: 'Quicksand_600SemiBold',
    fontSize: 15
  },
  userDescription: {
    marginTop: 10
  },
  firstIconContainer: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderColor: '#ff1a1a',
    backgroundColor: '#ff1a1a',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  secondIconContainer: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderColor: '#1ce8a9',
    backgroundColor: '#1ce8a9',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default AddFriends;