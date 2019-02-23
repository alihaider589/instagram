
import React, {Component} from 'react';
import {TextInput,Image,ImageBackground,ScrollView,TouchableOpacity, StyleSheet, Text, View,Dimensions} from 'react-native';
import profile from './images/profile.jpg';
import back1 from './images/back1.jpg';
import back2 from './images/back2.jpg';
import back33 from './images/back33.jpg';
import back4 from './images/back4.jpg';
import first from './images/first.jpg';
import second from './images/second.jpg';
import third from './images/third.jpg';
import fifth from './images/fifth.jpg';
import sixth from './images/sixth.jpg'

import ww from './images/ww.jpg'












const 
 { width:WIDTH} = Dimensions.get('window')


export default class Ihome extends Component{

  
  render() {
    return (
      <ScrollView style={{backgroundColor:'white'}}>

<View style={styles.menubar}>
<Text style={{color:'black'}}>the_dude_ali.h                                                                         |||</Text>




<View style={styles.profilecontainer}>
  <Image source={{uri :'http://www.dasedesigns.com/wp-content/uploads/2017/04/DexxonPresentsShot.jpg'}} style={styles.profile} ></Image>
  <Text style={{color:'black'}}>  Ali Haider</Text>


<Text style={{marginTop:-70,alignContent:'space-around',alignItems:'flex-end',color:'black'}}>                                                  60           248             88</Text>

<Text style={{marginTop:4,alignContent:'space-around',alignItems:'flex-end',color:'black'}}>                                                  posts    followers   following </Text>

<View style={{flexDirection:'row', justifyContent:"space-around", alignItems:"center"}}>
<TouchableOpacity><Text style={{ width: WIDTH - 280, padding:5,marginTop:30,
    marginLeft:180, borderRadius:5,borderWidth:1,fontSize:12, color:'black', backgroundColor:'rgb(255, 255, 255)'}}>Promotions </Text></TouchableOpacity>
<TouchableOpacity>
  <Text style={{ width: WIDTH - 280, padding:5
    ,marginLeft:10, marginTop:30, fontSize:12,
    borderWidth:1,  borderRadius:5,color:'black',

      backgroundColor:'rgb(255, 255, 255)'}}>
      Edit Profile  </Text>
      </TouchableOpacity>
</View>
</View>
<View style={{marginLeft:5,color:'black'}}><Text>Profile Status</Text></View>
<View style={{marginTop:20,marginLeft:5,color:'black'}}><Text>Stories</Text></View>
<View style={{flexDirection:'row',marginLeft:5}}>
<Image source={{uri :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc3FDyAr2BFqnb5cGvfjRnowURslds_-mCw0sXgjWXLC2O4EbPYg'}}style={{height:50,width:50,marginTop:10,borderRadius:30,}} ></Image>
<Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUS4E53VG5RfkdvkdRxTxBP2PzbdQawM26s9L0lXzJQn2VIgAgFQ'}}style={{height:50,paddingRight:10,width:50,marginLeft:10,marginTop:10,borderRadius:30}} ></Image>
<Image source={{uri :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-tCU4nlt-EXFw-Zquk86CBQOZLRQmxPg6b0iX1fB9jS15zisUwQ'}}style={{height:50,width:50,marginTop:10,marginLeft:10,borderRadius:30}} ></Image>
<Image source={{uri :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYu5rCKyLrDjkUEszgpvELQDxIugWpanvxqVNKaI5wBzAyRVr_'}}style={{height:50,width:50,marginTop:10,marginLeft:10,borderRadius:30}} ></Image>
<Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrI26N_eVLWKhPVtgB_pa5tZFNYnPjK5K55nYClTNx9pTOafxu'}}style={{height:50,width:50,marginTop:10,marginLeft:10,borderRadius:30}} ></Image>
</View>

<View><Text style={{fontSize:20,marginTop:20,color:'black'}}> Posts</Text></View>
<View style={{alignItems:'center'}}>
<View style={{flexDirection:'row',marginLeft:5,color:'black'}}>

<Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTai4ppLL83BZmCDnmOYM1YlHbSbWRk2-buBH28bx_nLN9O16JsMg'}} style={{height:110,width:110,marginTop:5,marginRight:5}}></Image>
<Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToS7C0kOs7atQUZu2nk-s3nW1eu4X331Bz-6FIOeIOrsNs44leEw'}} style={{height:110,width:120,marginTop:5,marginRight:5}}></Image>
<Image source={{uri :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Edq0DynBTUC3ntuEbdMSLkNdE8sCXZysNVR7UfQmIUNBHFH6'}} style={{height:110,width:110,marginTop:5,marginRight:5}}></Image>



</View>

<View style={{flexDirection:'row',marginLeft:5}}>
<Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR64eUcnVJpyDr34hKeJ0K2h6MS6clXse1uwqp7KKvelwIOpUs1'}} style={{height:110,width:110,marginTop:5,marginRight:5}}></Image>
<Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqck-fMU4Yi1VtSSmhkmj_WHk20NMB5W9qrQDeDBc1WX---Hxe'}} style={{height:110,width:120,marginTop:5,marginRight:5}}></Image>
<Image source={{uri :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_i91LTu0JemDoBqbuWcSdzaMXrY-IROHTIFY4Mvz7kCgELAoAeg'}} style={{height:110,width:110,marginTop:5,marginRight:5}}></Image>



</View>


<View style={{flexDirection:'row',marginLeft:5}}>
<Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUeG49d5XmYvY0Q_Ca21yxTiKv_96GfgvJVjDJhheoA3mea20fsQ'}} style={{height:110,width:110,marginTop:5,marginRight:5}}></Image>
<Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzChxMGem72p-7OziQ1SjBkUkVQ6cOSJ8-hkLdQZdYrovk8eag0w'}} style={{height:110,width:120,marginTop:5,marginRight:5}}></Image>
<Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREijsWabMttEFhgGNhc62KU49pn_gO5JIJSYJknz4Dnsl8UYn2ag'}} style={{height:110,width:110,marginTop:5,marginRight:5}}></Image>



</View>
</View>
</View>

</ScrollView>
    );
      }
}





const styles = StyleSheet.create({
  profilecontainer:{
    alignItems:'flex-start',
    marginTop:20,
    marginLeft:5,
  
   
  
      },
      profile:{
        borderRadius:40,
        marginTop:5,
        alignItems:'flex-start',
        width:70,
        height:70,
        marginLeft:5
        
        
    
}});