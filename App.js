import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Provider as PaperProvider } from 'react-native-paper'
import {Test,Header,Nav,Youtube } from './Components'

export default class App extends Component {
  render() {
    return (

      <PaperProvider>

    
{/* <Youtube></Youtube> */}
<Nav></Nav>

      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
