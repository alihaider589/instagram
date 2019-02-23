
import React, {Component} from 'react';
import {TextInput,Image,ImageBackground,TouchableOpacity,ScrollView, StyleSheet, Text, View,Dimensions} from 'react-native';
import jimmy from './images/jimmy.jpg'
import profile from './images/profile.jpg';
import back1 from './images/back1.jpg';
import back2 from './images/back2.jpg';
import back4 from './images/back4.jpg';
import first from './images/first.jpg';
import second from './images/second.jpg';
import third from './images/third.jpg';
import sixth from './images/sixth.jpg'
import nn from './images/nn.jpg';
import ww from './images/ww.jpg';
import camera from './images/camera.png'
import ifeedheart from './images/ifeedheart.png'
import ifeedmessage from './images/ifeedmessage.png'
import igtv from './images/igtv.png';
import youtube from './images/youtube.png'

import search from './images/search.png'
import videocamera from './images/videocamera.png'
















const 
 { width:WIDTH} = Dimensions.get('window')


export default class Yhome extends Component{

  
  render() {
    return (
        <View  style={{flex:1,backgroundColor:'rgb(54, 54, 54)'}}> 
        <ScrollView>
<View style={{flexDirection:'row'}}>

<Image source={youtube} style={{width:150,height:40,marginTop:10,}}>
</Image>
<TouchableOpacity>
<Image source={videocamera} style={{width:30,height:30,marginTop:15,marginLeft:130}}>
</Image>
</TouchableOpacity>
<TouchableOpacity>
<Image source={search} style={{width:28,height:28,marginTop:15,marginLeft:10}}>
</Image>
</TouchableOpacity>
</View>



</ScrollView>
</View>
    );
      }
}
const styles = StyleSheet.create({
    text:{
      color:'rgb(0, 0, 0)',
    fontWeight:'bold',
    fontFamily:'Roboto',
    fontSize:20
    
    },
    
    TextInput:{
        marginLeft:5,
        marginTop:10,
        height:30,
        width:'70%',
    borderRadius:1,
    borderWidth:1,
    borderColor:'rgb(0,0,0)'
    
    
    }
    
    ,
    btn:{
      backgroundColor:'rgba(0,0,0,0.2)',
      marginTop:280,
      borderWidth:1,
    
      color:'pink',
      borderColor:'pink',
      alignItems:'center',
      borderRadius:5,
      width:200
    }
      ,
    
    pos:{
    marginTop:40,
    alignItems:'center',
    
    }
     , logo:{
    
    width:100,
    height:100,
    
    
    }, 
    container: {
        flex: 1,
        
        justifyContent: 'center',
        alignItems: 'stretch',
        width:400,
        height:600,
        marginTop:-10
    
      },
      story:
      {
        height:50
        ,width:50
        ,marginTop:10
        ,marginLeft:10
        ,borderRadius:30
        ,borderColor:'rgb(230, 26, 95)'
        ,borderWidth:2}
      
    
    
    
    })
    
     