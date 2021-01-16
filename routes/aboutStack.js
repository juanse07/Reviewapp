import {createStackNavigator, HeaderBackground} from 'react-navigation-stack';
import React, {Component} from 'react';
import Header from '../shared/header';




import About from '../screens/about';


const AboutStack= createStackNavigator({
    
    Aboutscreen:{
        screen:About,
        
        navigationOptions:({navigation})=>{
            return{
                headerTitle:()=><Header navigation={navigation} title='Nosotros' style={{flex:1}}/>,
            }
        },
        
    },
   
   
    
    
});





export default  AboutStack;
