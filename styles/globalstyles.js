import {StyleSheet} from 'react-native';

export const GlobalStyles= StyleSheet.create({
    container:{
        flex:1,
        padding:40,
        paddingTop:30,
        backgroundColor:'#f2f2f2'

    },
    tittletext:{
        
        fontFamily:'nunito-bold',
        fontSize:18,
        color:"#444",
        paddingTop:10

    },
  paragrapgh:{
      marginVertical:8,
      lineHeight:20,
  } ,
  rating:{
      flexDirection:'row',
      justifyContent:'center',
      paddingTop:16,
      marginTop:16,
      borderTopWidth:1,
      borderTopColor:'#eee',

      
  } ,
  image:{
  //flex: 0.1,
  width: 150,
  height: 60,
  resizeMode: 'contain'
},
  headericon:{
      width:100,
      height:40,
      marginTop:35,
      marginHorizontal:10,

  },
  headerhelp:{
      flexDirection:'row',
  },
  modalstyle:{
      flex:1,
      padding:20,

  },
  modaltoggle:{
      marginBottom:10,
      borderWidth:1,
      
    
      borderColor:'#e1e1e1',
      padding:10,
      borderRadius:10,
      alignSelf:'center',

  },
  input:{
      
      borderWidth:0.5,
      borderColor:'darkgrey',
      padding:10,
      fontSize:18,
      borderRadius:6,
      

  },
  errortitle:{
      fontSize:10,
      color:'crimson',
      marginBottom:10,
      marginTop:6,
      textAlign:'center'
  },
  buttonform:{
      borderRadius:20,
      elevation:2,
      paddingVertical:14,
      paddingHorizontal:10,
      backgroundColor:'#f01d71',

  },
  buttontext:{
      color:'white',
      fontWeight:'bold',
      textTransform:'uppercase',
      fontSize:16,
      textAlign:'center',

  }
  

})


export const  images={
    ratings:{
        '1': require('../assets/hole_after_print-512.png'),
        '2': require('../assets/2_A.png'),
        '3': require('../assets/3_A.png'),
        '4': require('../assets/4_A.png'),
        '5': require('../assets/5_A.png'),
    }
};