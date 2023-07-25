/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {ListHeader, ProductItem, SearchBarHeader} from 'react-native-cb-atoms';
import {LoginScreen} from './app/screens/LoginScreen';
import {LoggerContextProvider} from './app/contexts/loggerContext';
import services from './app/services';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{padding: 16}}>
        <LoggerContextProvider logger={services}>
          <LoginScreen />
          <SearchBarHeader
            onPressCart={() => console.log('Cart pressed!')}
            onSearchEnter={searchTerm => console.log(searchTerm)}
          />
          <ListHeader label="Best Sale Product" actionLabel="See more" />
          <ProductItem
            title="Essentials Men Short-Sleeve Crew-Neck T-Shirt"
            category="shirt"
            price="$30.00"
            imgSrc={{
              uri: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
            }}
            reviewInfo={{
              ratingValue: 4.3,
              reviewsCount: 2342,
            }}
            favoriteProps={{
              isFavorite: false,
              onToggle: isFavorite => console.log('isFavorite', isFavorite),
            }}
          />
        </LoggerContextProvider>
      </View>
    </SafeAreaView>
  );
}

export default App;
