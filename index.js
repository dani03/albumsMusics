import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumsList from './src/components/AlbumsList';

// create a component

const App = () => (
        <View style={{ flex: 1 }}>
            <Header texteHeader={'albums'} />
            <AlbumsList />
        </View>
        );

AppRegistry.registerComponent('albums', () => App);
