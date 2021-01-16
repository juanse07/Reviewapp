import React from 'react';
import { StyleSheet,Text,View,TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../styles/globalstyles';

export default function FlatButton({text,onPress}){
    return(
        <TouchableOpacity onPress={onPress}>
        <View style={GlobalStyles.buttonform}>
            <Text style={GlobalStyles.buttontext}>{text}</Text>

        </View>
        </TouchableOpacity>

    )
}