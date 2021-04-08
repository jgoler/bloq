import React, { useState } from 'react';
import { View, Button, Text, Image, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const ProfilePicPicker = props => {
  const [pickedImage, setPickedImage] = useState();

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

  return (
    <View style={styles.regularImagePicker}>
      <View style={styles.regularImagePreviewContainer}>
        <View style={styles.imagePreview}>
          {!pickedImage ? (
            <Text style={styles.description}>Click to choose image</Text>
          ) : (
              <Image source={{ uri: pickedImage }} style={styles.image} />
            )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  regularImagePicker: {
    alignItems: 'center',
    flex: 1,
  },
  regularImagePreviewContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center'
  },
  regularImagePreview: {
    width: 250,
    height: 350,
    //borderRadius: 47,
    marginBottom: 10,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
  regularImage: {
    width: 246,
    height: 346,
    //borderRadius: 45
  },
  buttonContainer: {
    width: '75%',
    borderColor: '#e64951',
    backgroundColor: '#e64951',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    marginBottom: 30
  },
});

export default ProfilePicPicker;