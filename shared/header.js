import React from 'react';
import { Image, ImageBackground, StyleSheet,Text,View } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'
import{GlobalStyles} from '../styles/globalstyles';

export default function Header({navigation, title}){
    const openmenu =()=>{
        navigation.openDrawer();
    }
    return(
        <ImageBackground source={require('../assets/woodbkg.jpg')} style={styles.header}> 
        <MaterialIcons name='menu' size={28} onPress={openmenu} style={styles.icon} color={'darkgrey'}></MaterialIcons>

         <View style={GlobalStyles.headerhelp}>
            <Image source={require('../assets/logopolysin.png') }style={GlobalStyles.headericon}></Image>
            <Text style={styles.headertext}>{title}</Text>
         </View>

         </ImageBackground>

    );

};

const styles= StyleSheet.create({
    header:{
        width:400,
        height:80,
        position:'relative',
        flexDirection:'row',
        //alignItems:'center',
        justifyContent:'center',
        
        


    },
    headertext:{
        
        fontWeight:'bold',
        fontSize:20,
        color:"#000",
        letterSpacing:1,
        marginRight:20,
        marginTop:35,

    },
    icon:{
        position:'absolute',
        top:35,
        left:16,
    }


});