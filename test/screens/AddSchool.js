import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, Button } from 'react-native';
import { useFonts, Quicksand_700Bold, Quicksand_600SemiBold, Quicksand_400Regular } from '@expo-google-fonts/quicksand';
import DropDownPicker from 'react-native-dropdown-picker';
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import { addSchool } from '../actions/profile';
import PropTypes from 'prop-types';
import Alert from '../components/layout/Alert';


const AddSchool = props => {
  const [school, setSchool] = useState('');

  /*
    const onSubmit = async e => {
      e.preventDefault();
      clearAsyncStorage();
    }
    */

  const onSubmit = async e => {
    e.preventDefault();
    //console.log("school :" + school);
    //console.log(school !== "menlo" && school !== "sacred-heart" && school !== "castilleja" && school !== "paly" && school !== "menlo-atherton")
    if (school !== "menlo" && school !== "sacred-heart" && school !== "castilleja" && school !== "paly" && school !== "menlo-atherton") {
      props.setAlert('Please choose a registered school from below', 'danger');
    } else {
      props.addSchool(school);
    }
  };


  useEffect(() => {
    // Update the document title using the browser API
    if (!props.loading && props.school !== null) {
      props.navigation.push('CreateProfile');
    }
  }, [props.loading]);

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
          <Text style={styles.titleStyles}>Add School</Text>
        </View>
        <Alert />
        <View style={styles.description}>
          <Text style={styles.descriptionText}>Please find your school to start</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.inputContainer}>
            <View style={styles.dropDownPicker}>
              <DropDownPicker
                items={[
                  { label: 'Menlo', value: 'menlo', },
                  { label: 'Sacred Heart', value: 'sacred-heart', },
                  { label: 'Castilleja', value: 'castilleja', },
                  { label: 'PALY', value: 'paly', }
                ]}
                placeholder="Select your school"
                placeholderStyle={{
                  color: "white"
                }}
                containerStyle={{ height: 40, width: '80%' }}
                style={{ backgroundColor: '#e64951', color: 'white' }}
                itemStyle={{
                  justifyContent: 'flex-start'
                }}
                selectedLabelStyle={{
                  color: 'white',
                  fontWeight: 'bold'
                }}
                dropDownStyle={{ backgroundColor: "#fafafa" }}
                onChangeItem={item => setSchool(item.value)}
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button color="white" title="Add School" onPress={e => onSubmit(e)} />
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
    backgroundColor: '#e64951',
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
    //borderWidth: 10,
    width: '100%',
    //borderColor: '#e64951',
    //backgroundColor: '#e64951',
    //borderTopLeftRadius: 40,
    //borderTopRightRadius: 40
  },
  inputContainer: {
    width: '100%',
    height: '60%',
    alignItems: 'center',
    justifyContent: 'space-around',
    minHeight: "auto",
    //borderWidth: 10,
    //borderColor: 'red'
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
    height: 40,
    backgroundColor: 'white',
    marginTop: 20,
    width: '70%',
    padding: 10,
    marginBottom: 30,
    borderRadius: 10
  },
  dropDownPicker: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1
  }
});


AddSchool.propTypes = {
  setAlert: PropTypes.func.isRequired,
  addSchool: PropTypes.func.isRequired
  //isAuthenticated: PropTypes.bool
};


const mapStateToProps = state => ({
  loading: state.profile.loading,
  school: state.profile.school
});

export default connect(mapStateToProps, { setAlert, addSchool })(AddSchool);