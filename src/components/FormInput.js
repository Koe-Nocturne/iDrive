import React, {useState, Fragment} from 'react';
// import LinearGradient from 'react-native-linear-gradient';
import {Text, StyleSheet, View, TextInput, Button} from 'react-native';

// import { FormLabel, FormInput, FormValidationMessage }
import useForm from 'react-hook-form';
// import {Formik, useField, Form, ErrorMessage} from 'formik';
// import * as Yup from 'yup';
import Formula from '../env.js';

// 20 22 24 === 18

var styles = StyleSheet.create({
  formBox: {
    flex: 1,
    marginTop: '30%',
    marginLeft: '7%',
    marginRight: '7%',
    marginBottom: '30%',
    borderRadius: 5,
    backgroundColor: 'rgba(44, 58, 52, 0.25)',
  },
  text: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 5,
    color: '#d6f5e6',
    backgroundColor: 'transparent',
  },
  textInput: {
    margin: 5,
    marginBottom: 15,
    height: 50,
    width: '95%',
    borderWidth: 2,
    borderRadius: 3,
    borderColor: '#a8bdb4',
    textAlign: 'center',
    color: '#d6f5e6',
  },
  buttonText: {
    color: 'white',
  },
  button: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 13,
    marginRight: 5,
    width: '90%',
  },
  horizontalRule: {
    borderBottomColor: '#a8bdb4',
    borderBottomWidth: 3,
    margin: 10,
  },
  buttonSpacing: {
    borderWidth: 5,
    borderColor: '#d6f5e6',
  },
  titleText: {
    color: '#a8bdb4',
    fontSize: 30,
    fontFamily: 'Cochin',
    textAlign: 'center',
    margin: 10,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  resultText: {
    fontSize: 25,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#d6f5e6',
    backgroundColor: 'transparent',
  },
});

const Form = () => {
  const [scanDelay, setScanDelay] = useState('');
  const {register, setValue, handleSubmit} = useForm();

  const onSubmit = data => {
    let {peakTime, scanTime, injectionVol} = data;
    let sD = Formula(peakTime, scanTime, injectionVol);
    setScanDelay(sD);
  };

  return (
    <View style={styles.formBox}>
      <Text style={styles.titleText}>IDrive</Text>
      <Text style={styles.text}>Peak Time</Text>
      <TextInput
        style={styles.textInput}
        ref={register({name: 'peakTime', required: true, minLength: 1})}
        onChangeText={text => setValue('peakTime', text)}
      />


      <Text style={styles.text}>Scan Time</Text>
      <TextInput
        style={styles.textInput}
        ref={register({name: 'scanTime', required: true, minLength: 1})}
        onChangeText={text => setValue('scanTime', text)}
      />


      <Text style={styles.text}>Injection Volume</Text>
      <TextInput
        style={styles.textInput}
        name="injectionVol"
        ref={register({name: 'injectionVol', required: true, minLength: 1})}
        onChangeText={text => setValue('injectionVol', text)}
      />

      <Button
        title="Calculate"
        titleStyle={styles.buttonText}
        onPress={handleSubmit(onSubmit)}
        raised={true}
        backgroundColor="#2c7d5e"
        containerStyle={styles.button}
        style={styles.buttonSpacing}
      />

      <View style={styles.horizontalRule} />
      {scanDelay ? (
        <Fragment>
          <Text style={styles.resultText}>Scan Delay</Text>
          <Text style={styles.resultText}>{scanDelay}</Text>
        </Fragment>
      ) : null}
    </View>
  );
};

export default Form;
