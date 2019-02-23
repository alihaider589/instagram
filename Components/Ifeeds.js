
import React, {Component} from 'react';
import {TextInput,Image,ImageBackground,TouchableOpacity,ScrollView, StyleSheet, Text, View,Dimensions} from 'react-native';
import camera from './images/camera.png'
import ifeedheart from './images/ifeedheart.png'
import ifeedmessage from './images/ifeedmessage.png'
import igtv from './images/igtv.png';
import instagram from './images/instagram.png'
import comment from './images/comment.png';

















const 
 { width:WIDTH} = Dimensions.get('window')


export default class Ifeeds extends Component{

  
  render() {
    return (
        <View  style={{flex:1}}> 
        <ScrollView>
<View style={{flexDirection:'row'}}>
<TouchableOpacity>
<Image source={camera} style={{width:30,height:30,marginTop:10,marginLeft:5,borderRadius:1,borderColor:'rgb(0,0,0)'}}>
</Image>  
</TouchableOpacity>
<Image source={instagram} style={{width:100,height:30,marginTop:10,marginLeft:10}}>
</Image>
<TouchableOpacity>
<Image source={igtv} style={{width:30,height:30,marginTop:10,marginLeft:130}}>
</Image>
</TouchableOpacity>
<TouchableOpacity>
<Image source={ifeedmessage} style={{width:28,height:28,marginTop:10,marginLeft:10}}>
</Image>
</TouchableOpacity>
</View>





















<ScrollView horizontal={true}>
        <View style={{flexDirection:'row',marginLeft:5}}>

        <TouchableOpacity>
<Image source={{uri :'http://www.dasedesigns.com/wp-content/uploads/2017/04/DexxonPresentsShot.jpg'}}style={styles.story} ></Image>
<Text style={styles.Txt}>the_dud.</Text>

        </TouchableOpacity>
        <TouchableOpacity>
<Image source={{uri :'https://gametradersusa.com/wp-content/uploads/2017/03/OsOswHn6.jpg'}}style={styles.story} ></Image>
<Text style={styles.Txt}>  meet_yo.</Text>

        </TouchableOpacity>
<TouchableOpacity>
<Image source={{uri :'https://cdn.dribbble.com/users/132246/screenshots/1247342/wortex-gaming_hedesign.png'}}style={styles.story} ></Image>
<Text style={styles.Txt}>  daffyd.</Text>

</TouchableOpacity>
<TouchableOpacity>
  <Image source={{uri :'https://img.etimg.com/thumb/msid-67534333,width-300,imgsize-122480,resizemode-4/online-gaming.jpg'}}style={styles.story} ></Image>
<Text style={styles.Txt}>  stackd.</Text>

</TouchableOpacity>
<TouchableOpacity>
<Image source={{uri:'https://stuff.co.za/wp-content/uploads/2019/01/Video-Games-Sales-810x400.jpg'}}style={styles.story}></Image>
<Text style={styles.Txt}>  callmea.</Text>

</TouchableOpacity>

<TouchableOpacity>
<Image source={{uri :'http://orig08.deviantart.net/a8ae/f/2012/229/c/7/quote__92_by_alpner-d5bga92.jpg'}}style={styles.story} ></Image>
<Text style={styles.Txt}>  rohan1.</Text>

</TouchableOpacity>

<TouchableOpacity>
<Image source={{uri :'https://www.netent.com/en/wp-content/themes/netent_corp/assets/img/logotype/netent-logotype-300x300.jpg'}}style={styles.story} ></Image>
<Text style={styles.Txt}>   kami.</Text>

</TouchableOpacity>

<TouchableOpacity>
<Image source={{uri :'http://www.dasedesigns.com/wp-content/uploads/2017/04/DexxonPresentsShot.jpg'}}style={styles.story} ></Image>
<Text style={styles.Txt}>  50_sha.</Text>

</TouchableOpacity>

<TouchableOpacity>
<Image source={{uri :'https://pbs.twimg.com/profile_images/1030798057032560640/67WuMIU2_400x400.jpg'}}style={styles.story} ></Image>
<Text style={styles.Txt}>  whatay.</Text>

</TouchableOpacity>

<TouchableOpacity>
<Image source={{uri :'https://i.imgur.com/2shdwke.jpg'}}style={styles.story} ></Image>
<Text style={styles.Txt} >  coderb.</Text>

</TouchableOpacity>
</View>
</ScrollView>





















<View style={{alignItems:'center'}}>

  <View style={{flexDirection:'row'}}>
  <TouchableOpacity>
  <Image source={{uri :'http://www.dasedesigns.com/wp-content/uploads/2017/04/DexxonPresentsShot.jpg'}} style={{width:30,height:30,marginTop:10,borderRadius:20,marginLeft:5}}>
</Image>  

<Text style={{fontSize:15,marginLeft:40,marginTop:-20,fontWeight:'bold',color:'black'}}> the_dude_ali.h </Text>

<Image source={{uri:'data:image/jpeg;base64,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'}} style ={{height:200,width:330,marginTop:10}}></Image>
<Text style={{fontSize:15,fontWeight:'bold',color:'black'}}>the_dude_ali.h :Mustang Life</Text>


</TouchableOpacity>
</View>


<View style={{flexDirection:'row'}}>
<TouchableOpacity>
<Image source={ifeedheart} style={{width:30,height:30}}>
</Image>
</TouchableOpacity>
<TouchableOpacity>

<Image source={comment} style={{width:30,height:30}}>
</Image>
</TouchableOpacity>

<TouchableOpacity>

<Image source={ifeedmessage} style={{width:30,height:30,marginRight:240}}>
</Image>

</TouchableOpacity>
</View>
<Text style={{fontWeight:'bold',marginRight:270,color:'black'}}>160 likes</Text>



















<View style={{flexDirection:'row'}}>
  <TouchableOpacity>
  <Image source={{uri:'http://wallpapers99.com/Avatar--w800x600--0--0--images/wallpaper/800x600/Avatar_17849.jpg'}} style={{width:30,height:30,marginTop:10,borderRadius:20,marginLeft:5}}>
</Image>  

<Text style={{fontSize:15,marginLeft:40,marginTop:-20,fontWeight:'bold',color:'black'}}> daffy_duck </Text>

<Image source={{uri:'https://sunlightonwater.com/wp-content/uploads/2017/10/dolphin-paper04_800x600.jpg'}} style ={{height:200,width:330,marginTop:10}}></Image>
<Text style={{fontSize:15,fontWeight:'bold',color:'black'}}>daffy_duck:Deep Sea Lover</Text>


</TouchableOpacity>
</View>


<View style={{flexDirection:'row'}}>
<TouchableOpacity>
<Image source={ifeedheart} style={{width:30,height:30}}>
</Image>
</TouchableOpacity>
<TouchableOpacity>

<Image source={comment} style={{width:30,height:30}}>
</Image>
</TouchableOpacity>

<TouchableOpacity>

<Image source={ifeedmessage} style={{width:30,height:30,marginRight:240}}>
</Image>

</TouchableOpacity>
</View>
<Text style={{fontWeight:'bold',marginRight:270,color:'black'}}>2039 likes</Text>


















<View style={{flexDirection:'row'}}>
  <TouchableOpacity>
  <Image source={{uri :'http://bullsalumni.org/wallpaper/Bull-Glow_800x600.jpg'}} style={{width:30,height:30,marginTop:10,borderRadius:20,marginLeft:5}}>
</Image>  

<Text style={{fontSize:15,marginLeft:40,marginTop:-20,fontWeight:'bold',color:'black'}}> meet_your_developers </Text>

<Image source={{uri:'http://www.el-tony.com/wp-content/uploads/2013/11/Lamborghini-Veneno-Roadster-Plastic-Bull-Green-2013-HD-Wallpapers-by-Tony-Kokhan-www.el-tony.com_.jpg'}} style ={{height:200,width:330,marginTop:10}}></Image>
<Text style={{fontSize:15,fontWeight:'bold',color:'black'}}>meet_your_developers:New art by meet_your_developers </Text>


</TouchableOpacity>
</View>


<View style={{flexDirection:'row'}}>
<TouchableOpacity>
<Image source={ifeedheart} style={{width:30,height:30}}>
</Image>
</TouchableOpacity>
<TouchableOpacity>

<Image source={comment} style={{width:30,height:30}}>
</Image>
</TouchableOpacity>

<TouchableOpacity>

<Image source={ifeedmessage} style={{width:30,height:30,marginRight:240}}>
</Image>

</TouchableOpacity>
</View>
<Text style={{fontWeight:'bold',marginRight:270,color:'black'}}>900 likes</Text>




















<View style={{flexDirection:'row'}}>
  <TouchableOpacity>
  <Image source={{uri :'https://images.wallpaperscraft.com/image/pink_floyd_triangle_space_planet_colors_3723_800x600.jpg'}} style={{width:30,height:30,marginTop:10,borderRadius:20,marginLeft:5}}>
</Image>  

<Text style={{fontSize:15,marginLeft:40,marginTop:-20,fontWeight:'bold',color:'black'}}> rohan1 </Text>

<Image source={{uri :'http://www.losi.com/Content/Images/Downloads/wallpapers/LogoOnGrating_800x600.gif'}} style ={{height:200,width:330,marginTop:10}}></Image>
<Text style={{fontSize:15,fontWeight:'bold',color:'black'}}>rohan1:New logo</Text>


</TouchableOpacity>
</View>


<View style={{flexDirection:'row'}}>
<TouchableOpacity>
<Image source={ifeedheart} style={{width:30,height:30}}>
</Image>
</TouchableOpacity>
<TouchableOpacity>

<Image source={comment} style={{width:30,height:30}}>
</Image>
</TouchableOpacity>

<TouchableOpacity>

<Image source={ifeedmessage} style={{width:30,height:30,marginRight:240}}>
</Image>

</TouchableOpacity>
</View>
<Text style={{fontWeight:'bold',marginRight:270,color:'black'}}>60 likes</Text>




















<View style={{flexDirection:'row'}}>
  <TouchableOpacity>
  <Image source={{uri :'http://avante.biz/wp-content/uploads/Crazy-Picture-Wallpapers/Crazy-Picture-Wallpapers-054.jpg'}} style={{width:30,height:30,marginTop:10,borderRadius:20,marginLeft:5}}>
</Image>  

<Text style={{fontSize:15,marginLeft:40,marginTop:-20,fontWeight:'bold',color:'black'}}>CoderBoy</Text>

<Image source={{uri: 'http://s1.1zoom.me/b4459/634/Switzerland_Lake_Coast_Stones_Thun_Stairs_543146_800x600.jpg'}} style ={{height:200,width:330,marginTop:10}}></Image>
<Text style={{fontSize:15,fontWeight:'bold',color:'black'}}>CoderBoy:A click in switzerland </Text>


</TouchableOpacity>
</View>


<View style={{flexDirection:'row'}}>
<TouchableOpacity>
<Image source={ifeedheart} style={{width:30,height:30}}>
</Image>
</TouchableOpacity>
<TouchableOpacity>

<Image source={comment} style={{width:30,height:30}}>
</Image>
</TouchableOpacity>

<TouchableOpacity>

<Image source={ifeedmessage} style={{width:30,height:30,marginRight:240}}>
</Image>

</TouchableOpacity>
</View>
<Text style={{fontWeight:'bold',marginRight:270,color:'black'}}>9000 likes</Text>



















<View style={{flexDirection:'row'}}>
  <TouchableOpacity>
  <Image source={{uri :'https://images.wallpaperscraft.com/image/playstation_gamepad_crash_22102_300x225.jpg'}} style={{width:30,height:30,marginTop:10,borderRadius:20,marginLeft:5}}>
</Image>  

<Text style={{fontSize:15,marginLeft:40,marginTop:-20,fontWeight:'bold'}}> PookieChips </Text>

<Image source={{uri :'https://www.desktopbackground.org/download/800x600/2011/04/29/195203_xbox-wallpaper-backgrounds_1920x1080_h.jpg'}} style ={{height:200,width:330,marginTop:10}}></Image>
<Text style={{fontSize:15,fontWeight:'bold',color:'black'}}>PookieChips:New controller </Text>


</TouchableOpacity>
</View>


<View style={{flexDirection:'row'}}>
<TouchableOpacity>
<Image source={ifeedheart} style={{width:30,height:30}}>
</Image>
</TouchableOpacity>
<TouchableOpacity>

<Image source={comment} style={{width:30,height:30}}>
</Image>
</TouchableOpacity>

<TouchableOpacity>

<Image source={ifeedmessage} style={{width:30,height:30,marginRight:240}}>
</Image>

</TouchableOpacity>
</View>
<Text style={{fontWeight:'bold',marginRight:270,color:'black'}}>2.3M likes</Text>













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
        ,borderWidth:1}
      
    ,
    Txt:{
      color:'black'

    }
    
    
    })
    
     