

import React, {Component} from 'react';
import {Platform, StyleSheet,ScrollView, Text, View,Dimensions,Image,TouchableOpacity} from 'react-native'
import camera from './images/camera.png'
import menu from './images/menu.png'
import search from './images/search.png'





export default class Header extends Component{
render(){
    return(
<View style={{
    height:90,
    backgroundColor:'rgb(7, 94, 85)',
    color:'rgb(255,255,255)',
            }}>
           
            <Text style={styles.whatsapptext}>WhatsApp </Text>
    <View style={{marginTop:15,flexDirection:'row'}}>
            <TouchableOpacity>
            <Image source={camera} style={{height:40,width:40}}></Image>
            </TouchableOpacity>
            
            <TouchableOpacity>
                <Text style={{marginTop:17,fontSize:15,color:'rgb(255,255,255)',fontWeight:'300',marginLeft:30}}>
                    CHATS
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{marginTop:17,fontSize:15,color:'rgb(255,255,255)',fontWeight:'300',marginLeft:50}}>
                    STATUS
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{marginTop:17,fontSize:15,color:'rgb(255,255,255)',fontWeight:'300',marginLeft:60}}>
                    CALLS
                </Text>
            </TouchableOpacity>
            </View>
            </View>
       );
        }
       }

       const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F5FCFF',
        },
        welcome: {
          fontSize: 20,
          textAlign: 'center',
          margin: 10,
        },
        instructions: {
          textAlign: 'center',
          color: '#333333',
          marginBottom: 5,
        },
        whatsapptext:{
          fontFamily:'Roboto',
          fontSize:20,
          color:'rgb(255,255,255)',
          marginTop:10,
          marginLeft:15
        }
      });
      