/*
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Button, Modal, TouchableWithoutFeedback, Alert } from 'react-native';
import { useFonts, Quicksand_700Bold, Quicksand_600SemiBold, Quicksand_400Regular } from '@expo-google-fonts/quicksand';
import ImgPicker from '../components/ImagePicker';
import ProfilePicPicker from '../components/RegularProfilePicker';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import { addImages } from '../actions/profile';
import PropTypes from 'prop-types';
//import Alert from '../components/layout/Alert';


const FinishProfile = props => {
  const [pickedImage, setPickedImage] = useState();
  const [secondPickedImage, setSecondPickedImage] = useState();
  const [thirdPickedImage, setThirdPickedImage] = useState();
  const [fourthPickedImage, setFourthPickedImage] = useState();
  const [fifthPickedImage, setFifthPickedImage] = useState();
  const [isVisible, setIsVisible] = useState(false);
  const [secondIsVisible, setSecondIsVisible] = useState(false);
  const [thirdIsVisible, setThirdIsVisible] = useState(false);
  const [fourthIsVisible, setFourthIsVisible] = useState(false);
  const [fifthIsVisible, setFifthIsVisible] = useState(false);

  const onSubmit = async e => {
    e.preventDefault();
    //console.log("school :" + school);
    //console.log(school !== "menlo" && school !== "sacred-heart" && school !== "castilleja" && school !== "paly" && school !== "menlo-atherton")

    props.addImages([pickedImage, secondPickedImage, thirdPickedImage, fourthPickedImage, fifthPickedImage]);

  };

  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL
    );
    if (result.status !== 'granted') {
      Alert.alert("Insufficient permissions!", "You need to grant camera and photo permissions to use this app.",
        [{ text: 'Okay' }]
      );
      return false;
    }
    return true;
  };

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 0.5
    });
    setPickedImage(image.uri);
  };

  const secondTakeImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 0.5
    });
    setSecondPickedImage(image.uri);
  };

  const thirdTakeImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 0.5
    });
    setThirdPickedImage(image.uri);
  };

  const fourthTakeImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 0.5
    });
    setFourthPickedImage(image.uri);
  };

  const fifthTakeImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 0.5
    });
    setFifthPickedImage(image.uri);
  };

  const chooseImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.5
    });
    setPickedImage(image.uri);
  }

  const secondChooseImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.5
    });
    setSecondPickedImage(image.uri);
  }

  const thirdChooseImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.5
    });
    setThirdPickedImage(image.uri);
  }

  const fourthChooseImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.5
    });
    setFourthPickedImage(image.uri);
  }

  const fifthChooseImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.5
    });
    setFifthPickedImage(image.uri);
  }



  const displayModal = show => {
    setIsVisible(show);
  }

  const displaySecondModal = show => {
    setSecondIsVisible(show);
  }

  const displayThirdModal = show => {
    setThirdIsVisible(show);
  }

  const displayFourthModal = show => {
    setFourthIsVisible(show);
  }

  const displayFifthModal = show => {
    setFifthIsVisible(show);
  }


  let [fontsLoaded] = useFonts({
    Quicksand_700Bold,
    Quicksand_600SemiBold,
    Quicksand_400Regular
  });

  return (
    <View style={styles.container}>
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={isVisible}
        onRequestClose={() => {
          Alert.alert("Modal has now been closed");
        }}>
        <View style={styles.modalCloseButtonStyles}>
          <Button color="#e64951" title="save" onPress={() => {
            displayModal(!isVisible);
          }} />
        </View>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalHeaderTitle}>Choose your profile picture</Text>
          </View>

          <View style={styles.imagePreviewContainer}>
            <View style={styles.imagePreview}>
              {!pickedImage ? (
                <Image style={styles.image} source={{ uri: "https://uwosh.edu/deanofstudents/wp-content/uploads/sites/156/2019/02/profile-default.jpg" }} />
              ) : (
                  <Image source={{ uri: pickedImage }} style={styles.image} />
                )}
            </View>
          </View>
          <View style={styles.modalBody}>
            <View style={styles.buttonContainer}>
              <View style={styles.modalButton}>
                <Button title="Take Photo" color='#e64951' onPress={takeImageHandler} />
              </View>
              <View style={styles.modalButton}>
                <Button title="Choose Existing Photo" color='#e64951' onPress={chooseImageHandler} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={secondIsVisible}
        onRequestClose={() => {
          Alert.alert("Modal has now been closed");
        }}>
        <View style={styles.modalCloseButtonStyles}>
          <Button color="#e64951" title="save" onPress={() => {
            displaySecondModal(!secondIsVisible);
          }} />
        </View>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalHeaderTitle}>Choose one of your profile picture</Text>
          </View>

          <View style={styles.regularImagePicker}>
            <View style={styles.regularImagePreviewContainer}>
              <View style={styles.regularImagePreview}>
                {!secondPickedImage ? (
                  <Text style={styles.description}>Choose image</Text>
                ) : (
                    <Image source={{ uri: secondPickedImage }} style={styles.regularImage} />
                  )}
              </View>
            </View>
          </View>
          <View style={styles.modalBody}>
            <View style={styles.buttonContainer}>
              <View style={styles.modalButton}>
                <Button title="Take Photo" color='#e64951' onPress={secondTakeImageHandler} />
              </View>
              <View style={styles.modalButton}>
                <Button title="Choose Existing Photo" color='#e64951' onPress={secondChooseImageHandler} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={thirdIsVisible}
        onRequestClose={() => {
          Alert.alert("Modal has now been closed");
        }}>
        <View style={styles.modalCloseButtonStyles}>
          <Button color="#e64951" title="save" onPress={() => {
            displayThirdModal(!thirdIsVisible);
          }} />
        </View>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalHeaderTitle}>Choose one of your profile picture</Text>
          </View>

          <View style={styles.regularImagePicker}>
            <View style={styles.regularImagePreviewContainer}>
              <View style={styles.regularImagePreview}>
                {!thirdPickedImage ? (
                  <Text style={styles.description}>Choose image</Text>
                ) : (
                    <Image source={{ uri: thirdPickedImage }} style={styles.regularImage} />
                  )}
              </View>
            </View>
          </View>
          <View style={styles.modalBody}>
            <View style={styles.buttonContainer}>
              <View style={styles.modalButton}>
                <Button title="Take Photo" color='#e64951' onPress={thirdTakeImageHandler} />
              </View>
              <View style={styles.modalButton}>
                <Button title="Choose Existing Photo" color='#e64951' onPress={thirdChooseImageHandler} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={fourthIsVisible}
        onRequestClose={() => {
          Alert.alert("Modal has now been closed");
        }}>
        <View style={styles.modalCloseButtonStyles}>
          <Button color="#e64951" title="save" onPress={() => {
            displayFourthModal(!fourthIsVisible);
          }} />
        </View>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalHeaderTitle}>Choose one of your profile picture</Text>
          </View>

          <View style={styles.regularImagePicker}>
            <View style={styles.regularImagePreviewContainer}>
              <View style={styles.regularImagePreview}>
                {!fourthPickedImage ? (
                  <Text style={styles.description}>Choose image</Text>
                ) : (
                    <Image source={{ uri: fourthPickedImage }} style={styles.regularImage} />
                  )}
              </View>
            </View>
          </View>
          <View style={styles.modalBody}>
            <View style={styles.buttonContainer}>
              <View style={styles.modalButton}>
                <Button title="Take Photo" color='#e64951' onPress={fourthTakeImageHandler} />
              </View>
              <View style={styles.modalButton}>
                <Button title="Choose Existing Photo" color='#e64951' onPress={fourthChooseImageHandler} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={fifthIsVisible}
        onRequestClose={() => {
          Alert.alert("Modal has now been closed");
        }}>
        <View style={styles.modalCloseButtonStyles}>
          <Button color="#e64951" title="save" onPress={() => {
            displayFifthModal(!fifthIsVisible);
          }} />
        </View>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalHeaderTitle}>Choose one of your profile picture</Text>
          </View>

          <View style={styles.regularImagePicker}>
            <View style={styles.regularImagePreviewContainer}>
              <View style={styles.regularImagePreview}>
                {!fifthPickedImage ? (
                  <Text style={styles.description}>Choose image</Text>
                ) : (
                    <Image source={{ uri: fifthPickedImage }} style={styles.regularImage} />
                  )}
              </View>
            </View>
          </View>
          <View style={styles.modalBody}>
            <View style={styles.buttonContainer}>
              <View style={styles.modalButton}>
                <Button title="Take Photo" color='#e64951' onPress={fifthTakeImageHandler} />
              </View>
              <View style={styles.modalButton}>
                <Button title="Choose Existing Photo" color='#e64951' onPress={fifthChooseImageHandler} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.headerContainer}>
        <Text style={styles.titleStyles}>Finish Profile</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>Fill out the following to finish your profile</Text>
      </View>
      <View style={{ flex: 5, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.body}>

          <TouchableWithoutFeedback onPress={() => {
            displayModal(true);
          }}>
            <View>
              <View style={styles.imagePicker}>
                <View style={styles.imagePreviewContainer}>
                  <View style={styles.imagePreview}>
                    {!pickedImage ? (
                      <Image style={styles.image} source={{ uri: "https://uwosh.edu/deanofstudents/wp-content/uploads/sites/156/2019/02/profile-default.jpg" }} />
                    ) : (
                        <Image source={{ uri: pickedImage }} style={styles.image} />
                      )}
                  </View>
                </View>
              </View>
            </View>

          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => {
            displaySecondModal(true);
          }}>
            <View>
              <View style={styles.regularImagePicker}>
                <View style={styles.regularImagePreviewContainer}>
                  <View style={styles.regularImagePreview}>
                    {!secondPickedImage ? (
                      <Text style={styles.description}>Click to choose image</Text>
                    ) : (
                        <Image source={{ uri: secondPickedImage }} style={styles.regularImage} />
                      )}
                  </View>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => {
            displayThirdModal(true);
          }}>
            <View>
              <View style={styles.regularImagePicker}>
                <View style={styles.regularImagePreviewContainer}>
                  <View style={styles.regularImagePreview}>
                    {!thirdPickedImage ? (
                      <Text style={styles.description}>Click to choose image</Text>
                    ) : (
                        <Image source={{ uri: thirdPickedImage }} style={styles.regularImage} />
                      )}
                  </View>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => {
            displayFourthModal(true);
          }}>
            <View>
              <View style={styles.regularImagePicker}>
                <View style={styles.regularImagePreviewContainer}>
                  <View style={styles.regularImagePreview}>
                    {!fourthPickedImage ? (
                      <Text style={styles.description}>Click to choose image</Text>
                    ) : (
                        <Image source={{ uri: fourthPickedImage }} style={styles.regularImage} />
                      )}
                  </View>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => {
            displayFifthModal(true);
          }}>
            <View>
              <View style={styles.regularImagePicker}>
                <View style={styles.regularImagePreviewContainer}>
                  <View style={styles.regularImagePreview}>
                    {!fifthPickedImage ? (
                      <Text style={styles.description}>Click to choose image</Text>
                    ) : (
                        <Image source={{ uri: fifthPickedImage }} style={styles.regularImage} />
                      )}
                  </View>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.doneButtonContainer}>
            <Button color="white" title="Done" onPress={e => onSubmit(e)} />
          </View>
          <View style={{ height: 30 }}>

          </View>
        </ScrollView>
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyles: {
    fontFamily: 'Quicksand_700Bold',
    fontSize: 35
  },
  descriptionContainer: {
    flex: 0.3,
    alignItems: 'center',
    //justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  description: {
    fontFamily: 'Quicksand_700Bold',
    opacity: 0.7,
    fontSize: 15,
  },
  body: {
    flex: 5,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  imagePreviewContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.8,

  },
  imagePreview: {
    width: 94,
    height: 94,
    borderRadius: 47,
    marginBottom: 10,
    borderColor: '#e64951',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalHeader: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalHeaderTitle: {
    fontFamily: 'Quicksand_700Bold',
    opacity: 0.7,
    fontSize: 20,
  },
  modalBody: {
    flex: 4,
    borderWidth: 2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderColor: '#e64951',
    backgroundColor: '#e64951',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40
  },
  modalButton: {
    width: '75%',
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '70%'
  },
  modalCloseButtonStyles: {
    flex: 0.1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '80%',
  },
  regularImagePicker: {
    alignItems: 'center',
    flex: 8,
  },
  regularImagePreviewContainer: {
    flex: 3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  regularImagePreview: {
    width: 250,
    height: 350,
    //borderRadius: 47,
    marginBottom: 10,
    borderColor: '#e64951',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
  regularImage: {
    width: 246,
    height: 346,
    //borderRadius: 45
  },
  doneButtonContainer: {
    width: '100%',
    borderColor: '#e64951',
    backgroundColor: '#e64951',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    marginBottom: 50
  }
});

FinishProfile.propTypes = {
  setAlert: PropTypes.func.isRequired,
  addImages: PropTypes.func.isRequired
  //isAuthenticated: PropTypes.bool
};


const mapStateToProps = state => ({
  loading: state.profile.loading,
});

export default connect(mapStateToProps, { setAlert, addImages })(FinishProfile);
*/
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Button, Modal, TouchableWithoutFeedback, Alert } from 'react-native';
import { useFonts, Quicksand_700Bold, Quicksand_600SemiBold, Quicksand_400Regular } from '@expo-google-fonts/quicksand';
import ImgPicker from '../components/ImagePicker';
import ProfilePicPicker from '../components/RegularProfilePicker';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import { addImages } from '../actions/profile';
import PropTypes from 'prop-types';
//import Alert from '../components/layout/Alert';


const FinishProfile = props => {
  const [pickedImage, setPickedImage] = useState();
  const [secondPickedImage, setSecondPickedImage] = useState();
  const [thirdPickedImage, setThirdPickedImage] = useState();
  const [fourthPickedImage, setFourthPickedImage] = useState();
  const [fifthPickedImage, setFifthPickedImage] = useState();
  const [isVisible, setIsVisible] = useState(false);
  const [secondIsVisible, setSecondIsVisible] = useState(false);
  const [thirdIsVisible, setThirdIsVisible] = useState(false);
  const [fourthIsVisible, setFourthIsVisible] = useState(false);
  const [fifthIsVisible, setFifthIsVisible] = useState(false);

  const onSubmit = async e => {
    e.preventDefault();
    //console.log("school :" + school);
    //console.log(school !== "menlo" && school !== "sacred-heart" && school !== "castilleja" && school !== "paly" && school !== "menlo-atherton")

    props.addImages([pickedImage, secondPickedImage, thirdPickedImage, fourthPickedImage, fifthPickedImage]);

  };

  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL
    );
    if (result.status !== 'granted') {
      Alert.alert("Insufficient permissions!", "You need to grant camera and photo permissions to use this app.",
        [{ text: 'Okay' }]
      );
      return false;
    }
    return true;
  };

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 0.5
    });
    setPickedImage(image);
  };

  const secondTakeImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 0.5
    });
    setSecondPickedImage(image);
  };

  const thirdTakeImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 0.5
    });
    setThirdPickedImage(image);
  };

  const fourthTakeImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 0.5
    });
    setFourthPickedImage(image);
  };

  const fifthTakeImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 0.5
    });
    setFifthPickedImage(image);
  };

  const chooseImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.5
    });
    setPickedImage(image);
  }

  const secondChooseImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.5
    });
    setSecondPickedImage(image);
  }

  const thirdChooseImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.5
    });
    setThirdPickedImage(image);
  }

  const fourthChooseImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.5
    });
    setFourthPickedImage(image);
  }

  const fifthChooseImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.5
    });
    setFifthPickedImage(image);
  }



  const displayModal = show => {
    setIsVisible(show);
  }

  const displaySecondModal = show => {
    setSecondIsVisible(show);
  }

  const displayThirdModal = show => {
    setThirdIsVisible(show);
  }

  const displayFourthModal = show => {
    setFourthIsVisible(show);
  }

  const displayFifthModal = show => {
    setFifthIsVisible(show);
  }


  let [fontsLoaded] = useFonts({
    Quicksand_700Bold,
    Quicksand_600SemiBold,
    Quicksand_400Regular
  });

  return (
    <View style={styles.container}>
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={isVisible}
        onRequestClose={() => {
          Alert.alert("Modal has now been closed");
        }}>
        <View style={styles.modalCloseButtonStyles}>
          <Button color="#e64951" title="save" onPress={() => {
            displayModal(!isVisible);
          }} />
        </View>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalHeaderTitle}>Choose your profile picture</Text>
          </View>

          <View style={styles.imagePreviewContainer}>
            <View style={styles.imagePreview}>
              {!pickedImage ? (
                <Image style={styles.image} source={{ uri: "https://uwosh.edu/deanofstudents/wp-content/uploads/sites/156/2019/02/profile-default.jpg" }} />
              ) : (
                  <Image source={{ uri: pickedImage.uri }} style={styles.image} />
                )}
            </View>
          </View>
          <View style={styles.modalBody}>
            <View style={styles.buttonContainer}>
              <View style={styles.modalButton}>
                <Button title="Take Photo" color='#e64951' onPress={takeImageHandler} />
              </View>
              <View style={styles.modalButton}>
                <Button title="Choose Existing Photo" color='#e64951' onPress={chooseImageHandler} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={secondIsVisible}
        onRequestClose={() => {
          Alert.alert("Modal has now been closed");
        }}>
        <View style={styles.modalCloseButtonStyles}>
          <Button color="#e64951" title="save" onPress={() => {
            displaySecondModal(!secondIsVisible);
          }} />
        </View>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalHeaderTitle}>Choose one of your profile picture</Text>
          </View>

          <View style={styles.regularImagePicker}>
            <View style={styles.regularImagePreviewContainer}>
              <View style={styles.regularImagePreview}>
                {!secondPickedImage ? (
                  <Text style={styles.description}>Choose image</Text>
                ) : (
                    <Image source={{ uri: secondPickedImage.uri }} style={styles.regularImage} />
                  )}
              </View>
            </View>
          </View>
          <View style={styles.modalBody}>
            <View style={styles.buttonContainer}>
              <View style={styles.modalButton}>
                <Button title="Take Photo" color='#e64951' onPress={secondTakeImageHandler} />
              </View>
              <View style={styles.modalButton}>
                <Button title="Choose Existing Photo" color='#e64951' onPress={secondChooseImageHandler} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={thirdIsVisible}
        onRequestClose={() => {
          Alert.alert("Modal has now been closed");
        }}>
        <View style={styles.modalCloseButtonStyles}>
          <Button color="#e64951" title="save" onPress={() => {
            displayThirdModal(!thirdIsVisible);
          }} />
        </View>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalHeaderTitle}>Choose one of your profile picture</Text>
          </View>

          <View style={styles.regularImagePicker}>
            <View style={styles.regularImagePreviewContainer}>
              <View style={styles.regularImagePreview}>
                {!thirdPickedImage ? (
                  <Text style={styles.description}>Choose image</Text>
                ) : (
                    <Image source={{ uri: thirdPickedImage.uri }} style={styles.regularImage} />
                  )}
              </View>
            </View>
          </View>
          <View style={styles.modalBody}>
            <View style={styles.buttonContainer}>
              <View style={styles.modalButton}>
                <Button title="Take Photo" color='#e64951' onPress={thirdTakeImageHandler} />
              </View>
              <View style={styles.modalButton}>
                <Button title="Choose Existing Photo" color='#e64951' onPress={thirdChooseImageHandler} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={fourthIsVisible}
        onRequestClose={() => {
          Alert.alert("Modal has now been closed");
        }}>
        <View style={styles.modalCloseButtonStyles}>
          <Button color="#e64951" title="save" onPress={() => {
            displayFourthModal(!fourthIsVisible);
          }} />
        </View>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalHeaderTitle}>Choose one of your profile picture</Text>
          </View>

          <View style={styles.regularImagePicker}>
            <View style={styles.regularImagePreviewContainer}>
              <View style={styles.regularImagePreview}>
                {!fourthPickedImage ? (
                  <Text style={styles.description}>Choose image</Text>
                ) : (
                    <Image source={{ uri: fourthPickedImage.uri }} style={styles.regularImage} />
                  )}
              </View>
            </View>
          </View>
          <View style={styles.modalBody}>
            <View style={styles.buttonContainer}>
              <View style={styles.modalButton}>
                <Button title="Take Photo" color='#e64951' onPress={fourthTakeImageHandler} />
              </View>
              <View style={styles.modalButton}>
                <Button title="Choose Existing Photo" color='#e64951' onPress={fourthChooseImageHandler} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={fifthIsVisible}
        onRequestClose={() => {
          Alert.alert("Modal has now been closed");
        }}>
        <View style={styles.modalCloseButtonStyles}>
          <Button color="#e64951" title="save" onPress={() => {
            displayFifthModal(!fifthIsVisible);
          }} />
        </View>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalHeaderTitle}>Choose one of your profile picture</Text>
          </View>

          <View style={styles.regularImagePicker}>
            <View style={styles.regularImagePreviewContainer}>
              <View style={styles.regularImagePreview}>
                {!fifthPickedImage ? (
                  <Text style={styles.description}>Choose image</Text>
                ) : (
                    <Image source={{ uri: fifthPickedImage.uri }} style={styles.regularImage} />
                  )}
              </View>
            </View>
          </View>
          <View style={styles.modalBody}>
            <View style={styles.buttonContainer}>
              <View style={styles.modalButton}>
                <Button title="Take Photo" color='#e64951' onPress={fifthTakeImageHandler} />
              </View>
              <View style={styles.modalButton}>
                <Button title="Choose Existing Photo" color='#e64951' onPress={fifthChooseImageHandler} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.headerContainer}>
        <Text style={styles.titleStyles}>Finish Profile</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>Fill out the following to finish your profile</Text>
      </View>
      <View style={{ flex: 5, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.body}>

          <TouchableWithoutFeedback onPress={() => {
            displayModal(true);
          }}>
            <View>
              <View style={styles.imagePicker}>
                <View style={styles.imagePreviewContainer}>
                  <View style={styles.imagePreview}>
                    {!pickedImage ? (
                      <Image style={styles.image} source={{ uri: "https://uwosh.edu/deanofstudents/wp-content/uploads/sites/156/2019/02/profile-default.jpg" }} />
                    ) : (
                        <Image source={{ uri: pickedImage.uri }} style={styles.image} />
                      )}
                  </View>
                </View>
              </View>
            </View>

          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => {
            displaySecondModal(true);
          }}>
            <View>
              <View style={styles.regularImagePicker}>
                <View style={styles.regularImagePreviewContainer}>
                  <View style={styles.regularImagePreview}>
                    {!secondPickedImage ? (
                      <Text style={styles.description}>Click to choose image</Text>
                    ) : (
                        <Image source={{ uri: secondPickedImage.uri }} style={styles.regularImage} />
                      )}
                  </View>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => {
            displayThirdModal(true);
          }}>
            <View>
              <View style={styles.regularImagePicker}>
                <View style={styles.regularImagePreviewContainer}>
                  <View style={styles.regularImagePreview}>
                    {!thirdPickedImage ? (
                      <Text style={styles.description}>Click to choose image</Text>
                    ) : (
                        <Image source={{ uri: thirdPickedImage.uri }} style={styles.regularImage} />
                      )}
                  </View>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => {
            displayFourthModal(true);
          }}>
            <View>
              <View style={styles.regularImagePicker}>
                <View style={styles.regularImagePreviewContainer}>
                  <View style={styles.regularImagePreview}>
                    {!fourthPickedImage ? (
                      <Text style={styles.description}>Click to choose image</Text>
                    ) : (
                        <Image source={{ uri: fourthPickedImage.uri }} style={styles.regularImage} />
                      )}
                  </View>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => {
            displayFifthModal(true);
          }}>
            <View>
              <View style={styles.regularImagePicker}>
                <View style={styles.regularImagePreviewContainer}>
                  <View style={styles.regularImagePreview}>
                    {!fifthPickedImage ? (
                      <Text style={styles.description}>Click to choose image</Text>
                    ) : (
                        <Image source={{ uri: fifthPickedImage.uri }} style={styles.regularImage} />
                      )}
                  </View>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.doneButtonContainer}>
            <Button color="white" title="Done" onPress={e => onSubmit(e)} />
          </View>
          <View style={{ height: 30 }}>

          </View>
        </ScrollView>
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyles: {
    fontFamily: 'Quicksand_700Bold',
    fontSize: 35
  },
  descriptionContainer: {
    flex: 0.3,
    alignItems: 'center',
    //justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  description: {
    fontFamily: 'Quicksand_700Bold',
    opacity: 0.7,
    fontSize: 15,
  },
  body: {
    flex: 5,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  imagePreviewContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.8,

  },
  imagePreview: {
    width: 94,
    height: 94,
    borderRadius: 47,
    marginBottom: 10,
    borderColor: '#e64951',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalHeader: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalHeaderTitle: {
    fontFamily: 'Quicksand_700Bold',
    opacity: 0.7,
    fontSize: 20,
  },
  modalBody: {
    flex: 4,
    borderWidth: 2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderColor: '#e64951',
    backgroundColor: '#e64951',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40
  },
  modalButton: {
    width: '75%',
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '70%'
  },
  modalCloseButtonStyles: {
    flex: 0.1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '80%',
  },
  regularImagePicker: {
    alignItems: 'center',
    flex: 8,
  },
  regularImagePreviewContainer: {
    flex: 3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  regularImagePreview: {
    width: 250,
    height: 350,
    //borderRadius: 47,
    marginBottom: 10,
    borderColor: '#e64951',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
  regularImage: {
    width: 246,
    height: 346,
    //borderRadius: 45
  },
  doneButtonContainer: {
    width: '100%',
    borderColor: '#e64951',
    backgroundColor: '#e64951',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    marginBottom: 50
  }
});

FinishProfile.propTypes = {
  setAlert: PropTypes.func.isRequired,
  addImages: PropTypes.func.isRequired
  //isAuthenticated: PropTypes.bool
};


const mapStateToProps = state => ({
  loading: state.profile.loading,
});

export default connect(mapStateToProps, { setAlert, addImages })(FinishProfile);
