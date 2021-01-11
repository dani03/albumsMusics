import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    // on effectue la destructuration de la album passer en parametre
    //  c-a-d on passe de {props.album.title} a {title}
     const { title, thumbnail_image, artist, image, url } = album;
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

            <CardSection>
            {/* linking openURL ici est une fonction react 
            native qui permet d'ouvrir un lien exterieure a l'application */}
                <Button onPress={() => Linking.openURL(url)}>
                    acheter sur amazon
                </Button>
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
