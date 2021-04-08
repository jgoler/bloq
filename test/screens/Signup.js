import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useFonts, Quicksand_700Bold, Quicksand_600SemiBold } from '@expo-google-fonts/quicksand';
import { Ionicons } from '@expo/vector-icons';
import { StackActions } from '@react-navigation/native';
const popAction = StackActions.pop(1);
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import { register } from '../actions/auth';
import PropTypes from 'prop-types';
import Alert from '../components/layout/Alert';

const Signup = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  //const [isAuthed, setIsAuthed] = (null);


  useEffect(() => {
    // Update the document title using the browser API
    if (props.isAuthenticated) {
      props.navigation.push('AddSchool');
    }
  }, [props.isAuthenticated]);



  const { name, email, password } = formData;

  //const onChangeName = e => setFormData({ ...formData, name: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password.length < 6) {
      props.setAlert('Password must be at least 6 characters', 'danger');
    } else {
      props.register({ name, email, password });
    }
  };

  let [fontsLoaded] = useFonts({
    Quicksand_700Bold,
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
        <View style={styles.header}>
          <View style={styles.backButtonContainer}>
            <Ionicons name="ios-arrow-back" size={40} color="black" onPress={() => {
              props.navigation.dispatch(popAction);
            }} />
          </View>
        </View>
        <View style={styles.titleContainer}>
          <View>
            <Text style={styles.title}>Sign Up</Text>
          </View>
        </View>
        <Alert />
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Full Name</Text>
          <TextInput
            style={{ height: 30, borderColor: '#e64951', borderBottomWidth: 2, marginBottom: 30 }}
            keyboardType="default"
            autoCorrect={false}
            name='name'
            value={name}
            onChangeText={(text) => setFormData({ ...formData, name: text })}
          />
          <Text style={styles.inputText}>Email Address</Text>
          <TextInput
            style={{ height: 30, borderColor: '#e64951', borderBottomWidth: 2, marginBottom: 30 }}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            name='email'
            value={email}
            onChangeText={(text) => setFormData({ ...formData, email: text })}
          />
          <Text style={styles.inputText}>Password</Text>
          <TextInput
            style={{ height: 30, borderColor: '#e64951', borderBottomWidth: 2 }}
            keyboardType="default"
            autoCapitalize="none"
            secureTextEntry={true}
            name='password'
            value={password}
            onChangeText={(text) => setFormData({ ...formData, password: text })}
          />
        </View>
        <View style={styles.loginButtonContainer}>
          <Button color="white" title="Sign Up" onPress={e => onSubmit(e)} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: '#e64951'
  },
  loginButtonContainer: {
    //flex: 4,
    width: '75%',
    borderColor: '#e64951',
    backgroundColor: '#e64951',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    marginBottom: 100
  },
  forgotPassword: {
    fontFamily: 'Quicksand_700Bold',
    color: '#e64951',
    marginTop: 5
  },
  buttonContainer: {
    borderWidth: 2,
    borderColor: 'black'
  },
  inputContainer: {
    flex: 7,
    marginTop: '5%',
    width: '75%'
  },
  inputText: {
    fontFamily: 'Quicksand_700Bold',
    color: 'grey',
    fontSize: 18,
    fontWeight: 'bold'
  },
  title: {
    fontFamily: 'Quicksand_700Bold',
    fontSize: 35
  },
  titleContainer: {
    flex: 1,
    alignItems: 'flex-start'
  },
  backButtonContainer: {
    marginTop: 50,
    width: '15%',
    alignItems: 'center'

  },
  header: {
    width: '80%'
  },
  /*
  warnText: {
    color: 'white',
  },
  warnTextContainer: {
    backgroundColor: 'red',
    width: '85%',
    //flex: 1
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 10
  }
  */
});

Signup.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired
  //isAuthenticated: PropTypes.bool
};


const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});


export default connect(mapStateToProps, { setAlert, register })(Signup);

/*
<View style={styles.warnTextContainer}>
          <Text style={styles.warnText}>Please make the password at least 6 characters</Text>
        </View>
        <View style={styles.warnTextContainer}>
          <Text style={styles.warnText}>Please use a real email</Text>
        </View>
        */