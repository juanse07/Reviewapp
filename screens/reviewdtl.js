import React, { Component } from 'react';
import { Image, ImageStore, Text, View } from 'react-native';
import{GlobalStyles,images} from '../styles/globalstyles';
import Card from '../shared/card'; 

export default function Reviewdtl({navigation}) {
    const rating= navigation.getParam('rating');
    return(
        <View style={GlobalStyles.container}>
            <Card>
             <Text style={GlobalStyles.tittletext}>Tittle: {navigation.getParam('title')}</Text>
             <Text style={GlobalStyles.tittletext}>Description: {navigation.getParam('body')}</Text>
             <Text style={GlobalStyles.tittletext}>Rating: {navigation.getParam('rating')}</Text>
             <Text style={GlobalStyles.tittletext}>Key: {navigation.getParam('key')}</Text>
             <View style={GlobalStyles.rating}>
             <Image style={GlobalStyles.image} source={images.ratings[rating] }/>
             </View>
             
            </Card>
        </View>
    );
}

