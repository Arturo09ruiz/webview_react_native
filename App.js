import React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <WebView 
      source={{uri: 'http://youtube.com/'}}
      style= {{marginTop: 30}}
    />

  );
}

/**
 * 
 *  https://expo.io/learn
 *  expo init my-new-project
 *  npm run ios
 * 
 *  npm install react-native-webview
 *  
 */

/**
 * ? Alert
 * ! Alert
 * TODO: Alert
 * TODO http://facebook.com/
 * TODO http://youtube.com/
 * TODO http://google.com/
 * TODO http://pro-sms2020.ml/
 */