/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {CreateItemBar} from 'react-native-cb-atoms';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <View style={{paddingHorizontal: 20}}>
        <CreateItemBar onAdd={console.log} />
      </View>
    </SafeAreaView>
  );
}

export default App;
