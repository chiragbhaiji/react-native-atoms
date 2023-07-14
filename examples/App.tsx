/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {SearchBarHeader} from 'react-native-cb-atoms';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{padding: 16}}>
        <SearchBarHeader
          onPressCart={() => console.log('Cart pressed!')}
          onSearchEnter={searchTerm => console.log(searchTerm)}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;
