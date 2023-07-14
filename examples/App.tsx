/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {
  ListHeader,
  RatingWithReviewsCount,
  SearchBarHeader,
} from 'react-native-cb-atoms';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{padding: 16}}>
        <SearchBarHeader
          onPressCart={() => console.log('Cart pressed!')}
          onSearchEnter={searchTerm => console.log(searchTerm)}
        />
        <ListHeader label="Best Sale Product" actionLabel="See more" />
        <RatingWithReviewsCount ratingValue={4.7} reviewsCount={2355} />
      </View>
    </SafeAreaView>
  );
}

export default App;
