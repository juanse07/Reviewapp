import React,{ Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import{GlobalStyles} from '../styles/globalstyles';

export default function About(){
    return(
        <View style={GlobalStyles.container}>
            <Text style={GlobalStyles.tittletext}>About screen</Text>
        </View>
    );
}

