import React from 'react';
import { StyleSheet,Text,View } from 'react-native';
export default function Card(props){
    return(
        <View style={styles.card}>
            <View style={styles.cardcontent}>
                {props.children}

            </View>
        </View>
    )
    
}

const styles= StyleSheet.create({
    card:{
        borderRadius:20,
        elevation:5,
        backgroundColor:'#ffffff',
        shadowOffset:{width:1,height:1},
        shadowColor:"gray",
        shadowOpacity:0.3,
        shadowRadius:2,
        marginHorizontal:4,
        marginVertical:6,



    },
    cardcontent:{
        marginHorizontal:50,
        marginVertical:10,


    },
})