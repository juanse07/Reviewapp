import React, { Component, useState } from 'react';
import { Button, StyleSheet,Text,View } from 'react-native';
import{GlobalStyles} from '../styles/globalstyles';
import {Formik} from 'formik';
import { TextInput } from 'react-native-gesture-handler';
import * as yup from 'yup';
import FlatButton from '../shared/buttonform';
const Revieschema=yup.object({
    title:yup.string()
    .required()
    .min(5),
    body:yup.string()
    .min(10),
    rating:yup.string()
    .required()
    .test('is-num1-1-5','Rating must be a number 1-5',(val)=>{
        return parseInt(val)<6 && parseInt(val)>0;
    })
})
export default function Form1({addreview}){
    return(
        <View style={GlobalStyles.container}>
            <Formik
            initialValues={{title:'',body:'',rating:''}}
            validationSchema={Revieschema}
            onSubmit={(values,actions)=>{
                actions.resetForm();
                addreview(values);
                console.log(values);

            }}
            >
                {(props)=>(
                    <View >
                        <TextInput 
                        style={GlobalStyles.input}
                        placeholder='Nombre'
                        onChangeText={props.handleChange('title')}
                        value={props.values.title}
                        onBlur={props.handleBlur('title')}/>
                        <Text style={GlobalStyles.errortitle}>{props.touched.title && props.errors.title}</Text>
                         <TextInput 
                        style={GlobalStyles.input}
                        placeholder='Descripción app'
                        onChangeText={props.handleChange('body')}
                        value={props.values.body}
                        onBlur={props.handleBlur('body')}/>
                         <Text style={GlobalStyles.errortitle}>{props.touched.body && props.errors.body}</Text>
                         <TextInput 
                        style={GlobalStyles.input}
                        placeholder='califica (1-5)'
                        onChangeText={props.handleChange('rating')}
                        value={props.values.rating}
                        onBlur={props.handleBlur('rating')}
                        keyboardType='numeric'
                       />
                         <Text style={GlobalStyles.errortitle}>{props.touched.rating && props.errors.rating}</Text>
                        <FlatButton text='Guardar' onPress={props.handleSubmit}/>
                    </View> 
                )}
                
            </Formik>
        </View>
    )
}