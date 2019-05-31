import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './Albumdetail';

class AlbumsList extends Component {
    state = { albums: [] };
    componentWillMount() {
        //pour recuperer les data via l'api
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ albums: response.data }));
    }
    renderAlbums() {
        return this.state.albums.map(album => 
               <AlbumDetail key={album.title} album={album} />      
            );      
    }
    render() {
        console.log(this.state);
        return (
            <ScrollView>
                 {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumsList;
