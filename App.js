/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Platform,
  TouchableHighlight,
  requireNativeComponent,
  findNodeHandle,
  NativeModules,
  Text,
} from 'react-native';
import Form from './src/components/FormInput';


var styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackground: {
    width: '100%', height: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#00001a',
  },
});

class App extends Component {
  render() {
    return (
      <View style={styles.view}>
        <View style={styles.imageBackground}>
          <Form />
        </View>
      </View>
    );
  }
}
export default App;
