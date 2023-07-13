/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {SearchBar} from 'react-native-cb-atoms';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{padding: 16}}>
        <SearchBar />
      </View>
    </SafeAreaView>
  );
}

export default App;
