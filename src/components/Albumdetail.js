import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
    // on effectue la destructuration de la album passer en parametre
    //  c-a-d on passe de {props.album.title} a {title}
     const { title, thumbnail_image, artist, image } = album;
     const { headerContentStyle,
             thumbnailStyle,
             headerTextStyle,
             thumbnailContainerStyle,
             imageStyle    
        } = styles;
    return (
        <Card>
            <CardSection>
            <View style={thumbnailContainerStyle}>
                <Image 
                 style={thumbnailStyle}
                 source={{ uri: thumbnail_image }} 
                />
            </View>

            <View style={headerContentStyle}>
                <Text style={headerTextStyle}>{ title }</Text>
                <Text>{ artist }</Text>
            </View>
            </CardSection>
            <CardSection>
                 <Image style={imageStyle} source={{ uri: image }} />
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    headerTextStyle: {
        fontSize: 20
    },
    thumbnailStyle: {
        width: 50,
        height: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;
