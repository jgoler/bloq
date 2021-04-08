import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, Button } from 'react-native';
import { useFonts, Quicksand_700Bold, Quicksand_600SemiBold, Quicksand_400Regular } from '@expo-google-fonts/quicksand';
import DropDownPicker from 'react-native-dropdown-picker';
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import { createProfile } from '../actions/profile';
import PropTypes from 'prop-types';
import Alert from '../components/layout/Alert';


const CreateProfile = props => {
  const [formData, setFormData] = useState({
    bio: '',
    grade: '',
    gender: ''
  });

  const { bio, grade, gender } = formData;

  const onSubmit = async e => {
    e.preventDefault();
    //console.log("school :" + school);
    //console.log(school !== "menlo" && school !== "sacred-heart" && school !== "castilleja" && school !== "paly" && school !== "menlo-atherton")
    if (bio.length === 0) {
      props.setAlert('Please fill out a description of yourself', 'danger');
    } else if (grade !== "9" && grade !== "10" && grade !== "11" && grade !== "12") {
      props.setAlert('Please select your grade', 'danger');
    } else if (gender !== "male" && gender !== "female" && gender !== "other") {
      props.setAlert("Please select your gender", 'danger');
    }
    else {
      props.createProfile({ bio, grade, gender });
    }
  };

  useEffect(() => {
    // Update the document title using the browser API
    //console.log(!props.loading && props.description !== null && props.gradeLevel !== null && props.selectedGender !== null);
    //console.log(props.description);
    console.log("test in use Effect: " + !props.loading && props.bio !== null && props.bio !== undefined && props.grade !== null && props.grade !== undefined && props.gender !== null && props.gender !== undefined)
    if (!props.loading && props.bio !== null && props.bio !== undefined && props.grade !== null && props.grade !== undefined && props.gender !== null && props.gender !== undefined) {
      props.navigation.push('FinishProfile');
    }
  }, [props.loading, props.bio, props.gender, props.grade]);


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
        <View style={styles.headerContainer}>
          <Text style={styles.titleStyles}>Create Profile</Text>
        </View>
        <Alert />
        <View style={styles.description}>
          <Text style={styles.descriptionText}>Fill out the following form to start connecting</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.inputContainer}>
            <TextInput
              multiline={true}
              placeholder='Enter a description of yourself...'
              style={styles.textInput}
              name='bio'
              value={bio}
              onChangeText={(text) => setFormData({ ...formData, bio: text })}
            />
            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginBottom: 145 }}>
              <DropDownPicker
                items={[
                  { label: '9', value: '9', },
                  { label: '10', value: '10', },
                  { label: '11', value: '11', },
                  { label: '12', value: '12', },
                ]}
                placeholder="Select your grade"
                containerStyle={{ height: 40, width: '75%' }}
                style={{ backgroundColor: '#fafafa', }}
                itemStyle={{
                  justifyContent: 'flex-start'
                }}
                dropDownStyle={{ backgroundColor: '#fafafa', }}
                onChangeItem={item => setFormData({ ...formData, grade: item.value })}
              />
            </View>
            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginBottom: 120 }}>
              <DropDownPicker
                items={[
                  { label: 'Male', value: 'male', },
                  { label: 'Female', value: 'female', },
                  { label: 'Other', value: 'other', },
                ]}
                placeholder="Select Your Gender"
                containerStyle={{ height: 40, width: '75%' }}
                style={{ backgroundColor: '#fafafa', }}
                itemStyle={{
                  justifyContent: 'flex-start',
                }}
                dropDownStyle={{ backgroundColor: '#fafafa', }}
                onChangeItem={item => setFormData({ ...formData, gender: item.value })}
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button color="#e64951" title="Create" onPress={e => onSubmit(e)} />
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
    justifyContent: 'center',
    //backgroundColor: '#e64951'
  },
  buttonContainer: {
    width: '75%',
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
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
  body: {
    //display: 'flex',
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    width: '100%',
    borderColor: '#e64951',
    backgroundColor: '#e64951',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40
  },
  inputContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    minHeight: "auto",
  },
  description: {
    flex: 0.3,
    alignItems: 'center',
    //justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  descriptionText: {
    fontFamily: 'Quicksand_700Bold',
    opacity: 0.7,
    fontSize: 15,
  },
  input: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // height: '25%'
  },
  textInput: {
    height: 90,
    backgroundColor: 'white',
    marginTop: 20,
    width: '70%',
    padding: 10,
    marginBottom: 30,
    borderRadius: 10
  }
});

CreateProfile.propTypes = {
  setAlert: PropTypes.func.isRequired,
  createProfile: PropTypes.func.isRequired
  //isAuthenticated: PropTypes.bool
};


const mapStateToProps = state => ({
  loading: state.profile.loading,
  bio: state.profile.profile.bio,
  grade: state.profile.profile.grade,
  gender: state.profile.profile.gender
});

export default connect(mapStateToProps, { setAlert, createProfile })(CreateProfile);