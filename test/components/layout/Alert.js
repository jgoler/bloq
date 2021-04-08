import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alerts }) => alerts !== null && alerts.length > 0 && alerts.map(alert => (
  <View key={alert.id} style={styles.alertContainer}>
    <Text style={styles.text}>{alert.msg}</Text>
  </View>
));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  alerts: state.alert
});

const styles = StyleSheet.create({
  alert: {
    width: '80%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white'
  },
  alertContainer: {
    backgroundColor: 'red',
    width: '85%',
    //flex: 1
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 10
  }
});

export default connect(mapStateToProps)(Alert);