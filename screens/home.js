
import React, { Component, useState } from 'react';
import { Text, View,FlatList,TouchableOpacity, Modal,TouchableWithoutFeedback, Keyboard } from 'react-native';
import{GlobalStyles} from '../styles/globalstyles';
import Card from '../shared/card'; 
import {MaterialIcons} from '@expo/vector-icons'
import Form1 from '../screens/form1';






export default function Home({navigation}) {
   
    const [reviews,setreviews]=useState([
        {title:'Instagram',rating:2,body:'App enfocada en imagenes',key:'1'},
        {title:'Facebook',rating:4,body:'red social variada',key:'2'},
        {title:'PyMESoft',rating:5,body:'App de faccturas rápida y fácil de usar',key:'3'},
        {title:'Whatsapp',rating:3,body:'Mensajes privados',key:'4'},

    ]);
    const addreview=(review)=>{
        review.key=Math.random().toString();
        setreviews((currentReviews)=>{
            return[review,...currentReviews];
        });
        setopenModal(false);
    };
    const [openModal,setopenModal]=useState(false);
    
   
    
    return(
        <View style={GlobalStyles.container}>
           
           <FlatList
           data={reviews}
           renderItem={({item})=>(
               <TouchableOpacity onPress={()=>navigation.navigate('Reviewscreen',item)}>
                   <Card>
                    <Text style={GlobalStyles.tittletext}>{item.title}</Text>
                   </Card>

               </TouchableOpacity>
           )}
           
           />  
            <Modal visible={openModal} animationType={'slide'}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                <View style={GlobalStyles.modalstyle}> 
                <MaterialIcons

            name='close'
            style={GlobalStyles.modaltoggle}
            size={24}
            onPress={()=>setopenModal(false)}
            />
                    <Form1 addreview={addreview}/>
                   
                </View>
                </TouchableWithoutFeedback>
            </Modal>   
            <MaterialIcons
            name='add'
            style={GlobalStyles.modaltoggle}
            size={24}
            onPress={()=>setopenModal(true)}
            />
             
           
        </View>
       
    )
}


