//import les librairies 
import React from 'react';
import { Text, View } from 'react-native';

//faire le component

// rendre le componnent apparent dans d'autres ecrans
const Header = (props) => {
        const { textStyle, viewStyle } = styles;
            return (
                    <View style={viewStyle}>
                        <Text style={textStyle}>{props.texteHeader}</Text>
                    </View>
                );       
};


const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        paddingTop: 30,
        shadowColor: 'dark',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.7,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};
export default Header; 
