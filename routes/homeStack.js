import {createStackNavigator, HeaderBackground} from 'react-navigation-stack';
import React, { Component} from 'react';
import Header from '../shared/header';


import Home from '../screens/home';
import Reviewdtl from '../screens/reviewdtl';


const HomeStack= createStackNavigator({
    Homescreen:{
        screen:Home,
        navigationOptions:({navigation})=>{
            return{
                headerStyle:{
                    
                },
                headerTitle:()=><Header navigation={navigation} title='Inicio'/>,
            }
        },
            
            
        
        
    },
   
   
    Reviewscreen:{
        screen:Reviewdtl,
        navigationOptions:{
            title:'Detalle de la Review',
            headerStyle:{
                backgroundColor:'coral'
            }
        }
    },
    
});




export default  HomeStack;

