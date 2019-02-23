
import React, {Component} from 'react';
import {TextInput,Image,ImageBackground,TouchableOpacity,ScrollView, StyleSheet, Text, View,Dimensions} from 'react-native';
import first from './images/first.jpg';
import second from './images/second.jpg';
import third from './images/third.jpg';
import ww from './images/ww.jpg';












const 
 { width:WIDTH} = Dimensions.get('window')


export default class Search extends Component{

  
  render() {
    return (
        <ScrollView>

        <View  style={{flex:1}}> 
        <ScrollView>



<ScrollView horizontal={true}>
        <View style={{flexDirection:'row',marginLeft:5}}>

        <TouchableOpacity>
<Image source={require('./images/mysto.jpg')}style={styles.story} ></Image>
        </TouchableOpacity>
        <TouchableOpacity>
<Image source={require('./images/sto1.jpg')}style={styles.story} ></Image>

        </TouchableOpacity>
<TouchableOpacity>
<Image source={require('./images/sto2.jpg')}style={styles.story} ></Image>

</TouchableOpacity>
<TouchableOpacity><Image source={require('./images/sto3.jpg')}style={styles.story} ></Image>

</TouchableOpacity>
<TouchableOpacity>
<Image source={require('./images/sto4.jpg')}style={styles.story}></Image>

</TouchableOpacity>

<TouchableOpacity>
<Image source={require('./images/sto5.jpg')}style={styles.story} ></Image>

</TouchableOpacity>

<TouchableOpacity>
<Image source={require('./images/sto6.jpg')}style={styles.story} ></Image>

</TouchableOpacity>

<TouchableOpacity>
<Image source={require('./images/sto7.jpg')}style={styles.story} ></Image>

</TouchableOpacity>

<TouchableOpacity>
<Image source={require('./images/sto8.jpg')}style={styles.story} ></Image>

</TouchableOpacity>

<TouchableOpacity>
<Image source={require('./images/sto9.jpg')}style={styles.story} ></Image>

</TouchableOpacity>
</View>
</ScrollView>





<View style={{alignItems:'center'}}>
<View style={{flexDirection:'row',marginLeft:5}}>
<TouchableOpacity>

<Image source={{uri :'https://www.desktopbackground.org/download/800x600/2011/04/29/195203_xbox-wallpaper-backgrounds_1920x1080_h.jpg'}} style={{height:110,width:110,marginTop:5,marginRight:5}}></Image>
</TouchableOpacity>
<TouchableOpacity>

<Image source={{uri :'http://rjwattenhofer.com/products/gaming-desktop-wallpapers-backgrounds/downloads/half-life-2-800x600-03.jpg'}} style={{height:110,width:120,marginTop:5,marginRight:5}}></Image>

</TouchableOpacity>

<TouchableOpacity>
<Image source={{uri:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTExMVFhUWFxcYGBgYFxgYGhgYFhgYFxcYGhgYHSggGBolHRcWIjEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0mICUtLS01LS8vLS0vLTAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAgMFBgcAAQj/xABDEAACAQIEAwYEBAMHAgUFAAABAhEAAwQSITEFQVEGEyJhcZEygaGxUsHR8CNC4QcUM2JykvEVgmNzorLCFiQlQ5P/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMABAUG/8QAMhEAAgIBAwIDBgUEAwAAAAAAAAECEQMEITESQRNRYSIykaGx8AUUcdHhQlKBwTNi8f/aAAwDAQACEQMRAD8AyJVpOKO2nL7UUVpnFpoD51UgmA11LivCKUaxNeiurhWMONfJ3M0g1wFcaxh21fI03FLeyG1TfpQpNe27sGRoaSUe6LQnSqW6ElSN68Iolnz76HrQzCDRT8wSjW64LBirxxmGe6xBxGHM3GgBrli4Qodo+JkuEAnci6J2qvg05hsS9skoxUlWQxzV1Ksp8iCRTYFZKgN2OJt5bfOiAQBozajUbDfbnI/UUwh01E784M9ZjX086fBJHX16KDGp5Ry9KIrG2EGY57H12Ndfu53Z9szM0dMxJj60SmGzW7tyf8IK3rmcJ+YruKYA2bjWiQWQwSJgyAwifWsmrNTSsEFe5acW3XNRAIs25IGupG3rypd9Ydh0Yj2MUVhHKGRvBG22ZSunnBNCldaItiRXoryKWVrGYlkivAtLFLyzRAMRXZaeZaSRWNY2AOk/SunyFKIrstA1iK6lEV6lEwiupZrqxiSW3XuJtfw28tfajRapxrEqR1BFEWysxSCKVXlKOJNeGlGkMKAUdNca9C1I8F4PdxTslpZKIbjTsFBVST82FAIGqIB4sxbkBoB6k7/KmiwHKPrUjd4WVaC2o3gAfeaDxItroCSev/FE1ofyaKMiHNrIGo9Yipa5wUd2DctvbdoKOCTbfOSLakOPBJVobOd9oE1B4W8wjxbHSR+dS6G+Ldy5DmyQFZwjNbVhcW4hZxIBzjLrrBgdKZ9LiZdSkQT2+Y1FeBaKxt/NeuMIhndhG0MxI29a8t2s23tUrrkrXVwO8Ow63b1u2zd2ruqZiJChmCgnaQJ1p3EYBrTFHEEEiNyCNCpjmDpQws6Ec/y5/lU/i8Yt22XuqDfe611mVcso4Fsgnme8QMIkS77HQm6YlDXFT/Dw4SFW7hEV4AGY279xST5zaQz5V7Zw7Y25ibrEIbdi5iGAEg92EUIJOkllE+dOtYVLFxTl7xb1oqebW8l8Pl/y5u7PzFdxDDNh7ty0jHYK5GmdWFu5lI6AgH5Cgl2Rr7sjFwbFZAk0evBwFzMeunSB/Q0Slxbayeeg9etDY+0zksrnLEEeW8faqkrIrKSC4+GYpToqk6z50q5a5ch96Vew5Kho02+Y5fb3rGAn8qVyr24PKPKlok60AiUSngoiut2JJllEKTqY25Dqx/ekmnFSPD7/ALFE1DL7TTaqalMLYVyQNgP36U5/c+cacuh/WsKyI7kmkKrMwRFLuTAAEzUndEHzpN7FjTurYtQIJUksx5sWO3yiKxk0RzCuC05lpQWsYayV1Pi1XVgWWFcOadWwambGDolMB5URLMwx1rLcdejH2mR9KYNWTtbw8piDp8aq30y//GoJ7VKVTBSa8illa8AoDHAVpn9lWMw2FwmOv371u21zJZthm8RyAu4AGp+NOXKs2Va8ubRy+k9axqvYkeLY1bhc2jInVojcmAB71FPh8uUnY1b+y/wYhcOB/FtfxFvBSYTxtkgGBmGhjptyr/EbS5iM4YDpPLlrypX6jqq2C7nDbXdhp1GuUEHMeWh/elP9qbDpZw1zL3ff2yrAaF+6ZFzMAdiURoI+LMfSFsYvZTtPXWKme2niuYZVZWjC2wCsRq9xuR0Osn8hFZjX2ILC2Gc5UUsxBIVQSTlBYwBvABPyojChdZn4TlI5NupPUcj6zygtYK81tw6MVdSCrKYIZTIIIokkuzOYliWMAASxkwBoBPIaVhboftQ2jb8jUvwbDhDdzH4sPdC6gBjlzCdOWXMOrKo51G4WxP5VZLWJXu7ad0CFktO5JgEKenhDa7F25AUrTXA6mpe98SETxfEfT5GYojE2mbUTmIGvXlvUxc4ISViTIQkQRlzzvP8A2nprvTWItvaXVQcrFCfMcgKeEkyWSEokRkjRtdPrzpVu07AQNDNC4vEGdRH08/fzqz4vCvbRe+XJdbXJEEKQCGidJk6GnsStiqYgcgNhyG0b+vrXuGUvI6DQDy31661IvZIMZcwnWTE9IPIUdwfhXiAmCAdTz6j61glZfU7BY00GnqZ3NLazAE7ferLj+EALGxB09N49JquYm0c+WecE9KDChox8qctW5MCdaQrKDljTSNdR1O3Oi7NsloAmTsNTWRnsG4Kwqr+X7/Kue4J11Mcv1ry6+UlcsMDBHQjcGhr3mefKmJsaxJk7UMU60SVJ5wKaZ7cRBJ5md/lFYA3kr0LT1tdtABTmUUDMDIPSuoqBXVgGp4PBDpUonDp5Ubg8NB+Gp2zhtOVaxGZf/aFwVotXQpIAZWIE5dQVk8plqz3E4aK+jbmEVldXgqQQZGhBrD+N8NezcNu4IYemoOxEcjRDGRUblqvFsVI3MOSdBT3DsE1xoUbCT0AG5J5DUe4HOlotZEvZIqf7A8CGLxLKwJFu01waSC4KhQfdiBzKc9qFxZzCANRJ8iPLzovsrxHEWu+GHtNdLBGYLbdyndElXlNVjM3rJrUHsRPGMDfwl8kEg+KGU6FSWQ/LQgjkZFQ7Ekk9atnac4hT/EuWLwc97mtsrwzAKZK/CzBFkGCcq9KrL4knQUrSKRbY5wk2kfvLyG4qgkWwYDt/LmPJefUxHOl4nFFrhuW0KMbjOAhIFtWPgRY+ECY9IobDozGANfoB1o1MKQszAO++4J38/wBam5pHRDTznweLhbt1gQuZjuMyTMnTQ68qklwl7DsrPaK7xnTwtuCNdDzBFRmGLL4hpB3+tbZ2ZFjHcPbDXiFLABHP8jkA228tSoP+qOdMpJollxSg0ZlgvhC5QIJMx4tQBE8xpPkSetWbD4DN3YICsTmkECQ5kZgNFiT8iByqFOFezcezdGV0JVh0I3jqOYPMEVYuGYdHtkNnzSFAiVYQdDB3JgR8ztTPbcjG5bE7gOGDTIXOZWScxYsQFiI0aGGk6EAc6c7QcAtlbdyHE5AdQDA0iPxEAUZ2Nuw7w8EHIqgAhZ8TSD7QPOrF2h4G72AyHJctEOgXaVbMP+Omlc830y9nk64e1Hplw2YzjOB3LVwXgMyhw1skZpbQr4TvrEipDtKzXLzXrjFi0jXaVnbTb02mr6xS0LaAm4FtocxXK3eZQAZbUMZBJ5H2qrcS4STD5QyDQwTIIOsxznn51SGT+5UyMsX9jtIr2Ew6sozRA8tT6+Wv2p2xdyXQdTBMjnqDtyOh+lSfFb7BJ7tEU6KqCAFG2syzaySSSTVf4jYuMubxAEA5tQdPnrtVbJ0J42jA5pbKx10P2qFxOXLGx1nqf0q0dprd1rVo2xoyhjyIzBTEfs1WcBw3EXsSllEzXZBjkI8WZidlG5JrBSBHwpRoIIOh186kcNiHstmtPlaCMw0IDDWDuD5jWieLoC7mArSTudJMgEE9CNqjlvALqAdtQT7feshXuLtgEyxJJOsHefX70RjEHiIjTfUTPMefr5UCl94/Ucq5n139aaxGjyCa9XDqPWl98B096ScWo0gfnWNTHu71OlNOGIOQAHzI+1I/vE7UrMaAVFjtuxoJfXnC/wBa6m8ref1rq1jdJvKYwBhPMfapOxxARVGxWM8KN0JHuJ/Kn7XFhHStRCi63r4YVTO2HARiR3iQLiqdPxAageo1j1pz/q9Q/He1AsoYguRprtOmafKmqhe5TbWBlo05n5DUn086lO+tYXDXbSkXLj9y73F28Lh+7U81GUSeZJ8qZxqDD4HM2t/EMAdNbdsQ2TXZmEM3QOg5moQYbMmZbgJ/CfCfbnWK15gGLYB7gB0UsB6age4p3sj2ou8Pvm7a1DrkdCSFYcifMaketRuIuENJE/8AFDX4IBEDQ6T0P9PrU2Xigji/EWxFwvGUEk5RoqyToo2AiK7B8OLkbCg7VwTrpRpxwS34D4m6GCsbn1NQyOfCO7TxxLefBP3MOlhFCgPcDIWBkc1YAnoR96uNvh9i5hVGWHcqwWORiTPODNZrh+MsBq8kgFp1PhOUKCeeXXnoa0TgGPwvdhLasGyZhvqS0rOsagj5Ga8XXYskIp73fKPoNNqMWR1j9Nvj9sicR2VP92uso8Vu6w8yApI+4obslxdrFzu31RxlYdN1B+pB9dxWhY25btFXMsGu2dPxF2tZfqPb1qjdqOAsuKKrALOACSFXxQTJOgAzazy9KX8N17lLpn33+lkNbgWaDcVul8ic7Z2TdNnF2pdVtql9gJylDCO7D8QaJ/8AD5UDwjiGsSTmBHXUagnrJ+9T/ZPEK1nFYe6VJey9hgsNNxCVzowOVlK3FOh//WTVEwV17TFHUq6tqD1EHTlERrsZBFfRco+Wi+mW5rfYrEIQqys9NP5mBkknePrWhZZWJnSKxLguIWziR4gtu6AysTAQQSRmGwBDD26Vslq83d6gBiOsgEzAnSY2qMppb+hfpa2KZxzAnvCEYADWI33I15Goq5cddLek6HQGBvA9d9OtXPjQRT4l1Ikx6Rv05VX8Rw+UU94e7U5pnwidDB5xBGlX2kqZzW4y2IX/AKWL7aMAUUllk6/6Z0BkbVD422xzZ0gA5VWOY1Op1mNZOlTmKxNoMuXM5MAab89xVfxuORzlxKlXAjMBBgExP4h60m8fVFbU+dn8huwhbC5TBZM0kHbI2YCecKQPQGmMBi7mHDtbhXe2yGVkwTtO/p00p3gOKC3BbKyl1oVwRAJEAH1MChL1wgurSCJXfXTlHyqkWmick06IHidvOxYzJygb7xEVENbI51MY7UxrppUVfmes/f5VmwqNnjsoXQ6+lMdzcbVVYjqAY96ITOpgCCP8uo+ZEg08bNy4ZYlo/ESY+ZNaxlECbDHYwPmD9q7Ko8/lR9y1oAYEedNIoOxBPlQsdQGM5GwpDXn2zEemn2ojErlWYmossxMkn5aUrkMoD5Brq4Xx0PuP0rq3UbpNNvYzMhAjcHT99Jpm3eI3modTmYlRHOBJj86dtuw51RSZGWJXwSwxVB4uxZwlsXb1vvLzksltpCrb/kcgH4m1IB5QY1p/htybtvvCMmdM8/hzDN9JqQXhv/UOM4hbgGVGuuw5EWiLdsE9Iy+1GxOiiocX7R3cSp7xTqQQZzQFjKJOukvzOjxyqEu3GiI3j35R71f+1uDtozQoUjYACJj9dPlVR71WbTQwfeDQsNEDdTcc9OfLnp++ddbRQrZlliAFJmFPWOehnyjSrF2b4V311wQSqqzGOcKSF8pimu0uBFohSTnIllyxvPP1BEUKD1FSK044mNRtPTmacdROsj0pi70BnWlHF4bBO75FBJ1OnIDU1I2sZetqEERbnLoAwkkkTEkSSYJ50NwniF3DuL1tgGEjUBgQdwQdxUk/FO8Bz27YYmZSVO28GZpXXDGXUvaj2JHhvbK54EvvmVXRvENVKEMsMo5EefpVwvcfwvELdxc4S6zZ0DaGSoDLOwHhO5HxVkb4ZpJA6nTXnSZKnb7iuDN+HYZtSiqa7o7sGvyQftOy8cG4wMKSlwMoVtGgkKZnWB9Oh8qtHbbCZzbu2GVz3eS9lHw5f4iyWG0B4YbxHlWcYntEXQW3TRTIAOgc6M2Q7t6nTWrX2H7VWz/9rir7LZuShYkAAPqCxcgrlYAgqTykc67sTlVSRyaqMOvqxv8Ag8wYdmS3IyhgSTMKGGoJidMxmJ1B33reuD4a7bs2rbfyKFk6khQNT5zVZ4b2Qwd3D2ntxJINx7b585AIYBiTCyZ06CrhYxgFtS5CTlXxH+YjQTzNCSvYlF9wKzhCGuKRmBUwxOpzE5gTzggelVrGFshtFAcoOgIgkmdRt5/WrPjsUUuAFZBQnSf5fEdI8jVYx9+3cZWYEEkiFMMYU6a6bjmedT8Tw5Oy8MEs0bXYo2NxoeQnidSytb5qVP8AKoHjGgMjWq5xJrhbMxnbU+Wms1Z+K46xhsQj4XDEakl7zFmz7tlytpExvVcxNzM8+ZMevKqwk5conkgo8MmeDW2GUk2mDqDlEABuQIWIYU1xQAl3BBO5U6kdSJ0ahuGY3Ldtq0ZM4DHYgEwSDyjcelSvF+HoC2Vs0O6EEQVKROuxGu/lsK3HcK3dVsVIpmDHpB+sfnQ64QsYirjwbh1u8zo5KllYBvOJEjntTacDdDBEroQynl1B/KoyzJOmduPStq0QFrhpHlRLIQTJExHwr+Q1PnvVgtcFRfE7yJjQc/nRdvCYdTpbL+bT7EbUPHRSOkd8FRTCKSIST++tFvwi9lhLTAeSwNfM6VeuHWyx8FpU9ABUR2htXCYZ/uftQWdFHpGUzF8CfL/EuIo/DnDH2SR7moDE4HLMbVZuM2yhAUsSRqxAX1AAJ089PSoq7YJUU3ipknp2iE7quqS/u1dW8RA8Bljt4K6pkKw9JqQGFusBmDn11+tWDhXDn/mLVdeEcGDLJE/MiknqnF1SZ0ZdJhxx6m2vQzSxw24w0tu0bwpMe1M8Ox97A33ZVH8RMjhgRI0Ig7qQQPLyrUsRgzbaBK+h9qhu1OA7y3Lanqd9KrDUuXK2OOWhjL2oSMx49xZ77GdBMx/URUIE5nep6/gRNNtw4V0Jo83ol3C8Pwm5h8LZx1t/HcdwBuAFzKcw5yVPtUH2px7YlxdZcpygR/KCNyD0Jk69ee9aRYwRHBkU6A3XIP8AkZ8pjoSc3ynrUXxLspYHDu/UOXKg6tpOYBoAG0ZqVzS5GjjZk1zYiicfhiRbbTxJb0ED4yY/9h1qwYnDhmVzu3y1I1+tA4zChQu/hFrnyQ3Qfqaj4seo7ngn4e3d/T/0hb5uBFQue7OZlWfDMxmjYtrvvRHaS0qugVUgKIZQyswgAFlfUGBPzo6/g1YW0B1QOpjWIbSRTnaTDZ3tlg092g8RkxEL4o1kQdetJHOm6f3uWzaGSipR42+iK7acxE7GdAAfcanWpjgbC5dVHAIMgllJbIJzxqNhnOhGx5xS+DWCl3vFLLAjQxKn4geoIkR50ThrAzC42fOrMQQxAGYltOniJO8HmOrPNDuyC0ebmKJu5hjiFWzh7Nq1ZZM4Tu0LknkXI1OgOYkaRQHaXs3h8PiMKLiNZtX1hzbfMAwYAupcGV8QkAabidqkbPETOaTO4PM/SguNI+LcNcZiBooMaSZJ23NThnw41USktDqcjuRrv9n3YleHHEFcS13vAgyZQgSBm1CkhnKldYGg86smJwltwwdMwZcrZhrlmY8tedQv9n3FDiO+LgLlFmPNUVlDMebQBJ9KtV+zqABIJ19Kp4qatHLLE4TqXJEXsDktLbWSHYh5YlgLgiQzTB1A061Qsbeez3lt1Qgqwncqx0DKwEyIHrr1rR+NHJa8J+EoBtM5htPMDXaqBxW1Oc5vESfCB4dSTOlQyZI9W72O7R4ZOLcUZ5xR7maW+GJDDbUcv3zoABpBMQRvyk1ZuI8LUswXNyideXUb86RZ7PAxLGOlM9ZjXceP4Xnk+Cv4ckayIjUGfpWu9oMHbu4JMTbULnKO+msug+sxPWqfb7PppvWqcHwTHCWrBJyhACWEto0gTOwAAHlUHrYSug59HLT9LnXJmGEwT5g4kFSCNDGkHU1OcHzW7hkSrT4SZEDl+U1cB2SA2YgTMAf1oo9mUNzOSeWwA5VCU5y/pfwLx1Omiqsg8N2fS9L2zlY6lG1UzvB6eRpwdnDPwkH6e9WvD8KRNaOArox6aT95UccvxCafs8EFwXgYtyWA1qm9pAneNpsTFaXibwQTVNw2CGIvEGBueu3TzoaiKjUIcltFnblLLk4ozy9wt7rhihy8hBiKGxPBMnmD9K0zinBxabW6ADqNCWPlA0HrUdd4WjjMDkGnifSdOSiSTUFcdnyd/j4501wZyOFCva0pOztqBNw/7Ovzryn3+7E8fH9oEsY+f5U9jU1heNtbAEJHlNV/hXDyxieY0/X3qztwVlHiqj0ae9iZc+Cb6ZIcHETcgso+tK4hbzW/5dOk/nTC2PpRDMIInpv15CumOBKOzOF5YxmlFVTM17R8P7ppHwtt+lQ2erN2wxWe4AB8Ijb51WLzRVIS9nc5c0V1trgt2H4gLvCmtAw1h5jaUZs0/wC4kfIUzY4hbPDTbZ9ULrlnWG8YMbwSzD5Gqth8QQZUkHqDB96M4HiLIxC9+V7oyHLbagxMa7ge1aTFiqK/jLgAUayPtNR+IxGY6gxrp5Fs2vzqZ4thLTXrgw8Nbk5DMECBOjatGvrpUHesn+WSOvy1qEkdsMtKglceMykIqhUK7b6zOnPU03j8fn030AkzoBsNdYoVDA15zziIjy1pF+4AR4p26VDwknZ6S1kpY3F1X+Ca4fjiQfCNPwwunt60bxjC3EyMUZbdxVZSdVPxRDDTYgx51X8O+jHZdAT7mPU/lWidje09h7P92uA57aECdVdBooOhkiQIj+k1huWyHza6SxpSZV8FampfDYYVHCwbFl7gyslq89m44cHXNNto/CykDTmDtTA7U215j71HJgyt1FFMWtwKNyZqH9n7Zb5Q7PbIjrEMPpmrRcsQByrAeyPbdRi7EzBuKh05Ock/+qt1fHLy1rt02PJDHU1vZ4X4hlx5c3Vje1AfaHhy3bRMHNbPeCNyQDI03lZHtVMuW0VZJB05ndd9/OrxcxrZiAukDWD11rOv7TLt4NZeSso6NtDZCDmjoc+29bJpnkdp0HTap4o9L3Q1de0HJIA8tP3/AM0VhXtZS8AIurtIhRMAt0E6VQsYl187tLTmtuonwsBmBE7bCPQqOlHvxe2q2GWLTphzh7vi0uqDoWUA5tDz5ztpXDl0P/bc9XHq55FSjS87LrZ7QcOQy15THJVzfarJwjtbYvPksrceBJMBQFBAkknzrHOGpaP+Hbnzy6f7nq/9grFwYgFoUZDA1M7QNY+3Kkw4I4cqau/WvoLqNJGWF5JStpf4+JO3u11w/DZC/wCoyfYUPc7Q4k5SIEzooBBg676ikY3AotxwxJ8RIGgWDqB57ij8JioQItkAg6a6Q3Pr03p8ubJb3ZJwwRinCCf6/wAklh8TeyyxAk/zbgegopcevWfPl/Wg8QhFrxEEwDA209KjUufi25fvpTweTqVs4Vijkt/QL41xEeEbhuhE5diZgxQOExthNVzI06ZmGpPL50w9pn8R1IMR5fsfWhMRwwOCGAAPKjPE5y6mdmPDjUOmyU4hi7b+Ji87HQcvU0xc4jaNoI5JWfCAIIj8Wn2qEs8Jv2Se7u94jbow1GmhB66f0oqxwq651Rhv6dKtHD6sTJ0QVLsEHGWOl76fpXUYnZS5Hxj6/pXlW/L+rOX80iv9l+OLbbxpz35j9a0NuIJctt3ZBMTH751imDw9wCdBHUiprhmKdSD3qA+v6CvQjjdUceSdysuH98Yzp9KBv45joGjXy3+enSjsPxR2SO/9k199Kisa4A0L+kRJ+1CGHI1uHLqMaa/crvae8oulTuoA9/F+dVPHXxv0qxdryDcRgD47SEzzZZQnT/SPeoDh2HDM126Js2Vzsv42mLdr/uaJ6KHPKgsNEJZ22C8VZbKWg0h2QXGHQPJQEdcoDf8Ad6V3ErdxLajQK0Nq2r6DxBd8g5E76kaGhMKjYzGF7pB1N152aCDlM6BToI5KI2Ehvj2JLOzBt94GhPsJrLEgvM0R1ziBU9COY3/rQ44nB3MHeNPnHKgr8zvQzit4cUN4kmG3MQdgTv1/KjMFjIMhLekfETEA6++g06dTNQ07Gn103Py2+tTnBNHTp8zjLcIuYpmeMwyzMLoswZIHWBE1OcB4hhVNwXAC7ZcrMAcsanJzBP126VXLFgtmNtT4QD8pCmferLwjGXjh2w9xrZw6k3MjFcymJlDBYAZdgRuetNFxiJljlyu/v5isGT32KsoC1rEJfB8JKoyvcNhp5RC+Ix8Z6TVWW3prp5Vpf9mXFMOFxWGZZbEWXt5yYCgW7hghjpqQBEb+2fW8aABlQD5SfrTOTfCJ+FFOpuvmP8PtsGDKGJUggjTUajX1r6kW+jW1uCArKr69GE/avlf+9u27H0/pW4dk7l29w/CkAwid2c2n+GSg89lHvSZbq26DGMb9hNll4v2uwuGVHvOwVzC5bbtJif5VMaa61RO3Xa2xibapazC4j5v4ltl8JUhvjAMzl5U/2t4apwjd47XCjK4CDXWUifLMfarRevg+EIvLQgMfrp5fOuXxIr1O/HpcrSfBmCcLvXyxLMqlRlYkKpIAKK3nAI0HxR505guC2VEkl20+HQf7m19qdu41FUvcuZiAugOYkiAB+EHnz51B4vtEx0QBB5at78vlU7y5No7I9RYtLpt8r6n8S1HE27AHw2x5fEfzongPaZVxFrLpLBcx1Pj8O3LfnNZl/fiSZOvXrXtvH5CCCQw1BidQfXSmho1F9T3ZHN+KKacIxpGy9puIZL+Yn4lB130006bCm8BxYsGC6ArO/TXes7492tGIKlVZcswSQd4mRHl9aRw/tE6bZT5kddOtGWCN2SjqW4qPkbVwHE94hUmSNP8AcP8AmicNibR0jX5T7a1kXDu1d21ORomJ0HLbf1qSwfbF12IBMyYGs+RED5RRSUUJ0uTbNZgQCBEEHXT5eYp25aFwfCeY8MLB+dU3sp2ia+5Qwxy5hPkdYj1FXFDcb4nCDooA+po3Zz5IuL5PMNwUDxXCDGvp89KKbiti2Izgxp4fF9qGW02UhfFO5YlvvQJ4EgM3nY+Q0FUg64RzZHe8mHN2nsDn9R+teUMDhF0yW9OuWuqts57Rh/ftGx96fweIadx96dGBY8gPWpDh/BpI1J65QT9dq9NJnA2iV4fiWVtWMH5VP27aNrqZH3qOw3B0X+Vv+5o+1TOCdEIEj5fqaamSkvIqvaLC/wAO3p8JuL7ww+5qs3rTOvdqI1Q9fhDLt1OcfM+davxLhZv2yEXWQRp5R+f3obs52QAbNeAJD/DOwCyDpuZOx9eVcc5xTqzrx45tXRn/ABns+MFatLmIuMue6RofEAVWdwoHIDUztpFK4ncLtm30A9AoyqPYCtS/tCxeH7187O5zHwrCjTlPOs2xmPtmclsL0/mP1qSyN8JnX+XjFXKS/TlkBcsk7A+1C3sOZ1IFG4i+x50BcrO2ZOC43PYUbyfpTiPm+ED7/KmCJ5Aen9TRnD8MzaAf80HFdxozk37C3E4XGPbcNqRqCv4lO4/flTNsXAcxDBesHLrtuINS6YNEMu/yGpqa4TxpFIt9yLlpjDBtTBMmD/KZ1B5GKXqj/Sjo8DI98sq+b+C/2RPZrAC42UlrcunjAOqtIuA6jQCDprvGppKcItp8dyROgXeOUnapXtHg2w+IyrcY23RblqfiNu6umYAAA/Gp9DUVmC9B66n2qTlkfp+h1Qw6eG6V/r+y/wBsOw7on+FbUf5m1P1rR+wuPJwtxHbNluZpOgAZRoOolW96yZscBqBJ6t+lKTjWIQMbd1lLAAgcxyFL4DY09bjSrn0WyNV7R8btW7F6fFKEAbAtEKOp1jaoy92na6ZDgrp8MR5THnG9VDiuOs3bbOILEwPCMwIK5h1Agn3FRvC8QULCBDqV29vQ6A+qinjgjE5MmunP0BhiTqBMa/qPTYe1eX7mo0gwAflsfmI9d+dWC/wW1h0wl8XGy38yOxiLZnKQRGumYa+vKh+1XZXEYC4q3hmBiI3yyQAY5wF1/wAwFHHnhJ0vX5bP6E8mOaj1NkEp8Q89Pfb60zeY5jTl4DUDXXQjmORHQ15xK5nus2XJJJy9OtWasgpUxoXKeW/FCEUoUjiWWQkLeKNF2sUah0oqyYpHjH8ei79kOIOt+2U3G3n1HzEj51sOHxMAXCyt5Zo08up2086wvsvjxbxFpm2DKT6SJ+k1s97FqQBlQCNMo5cvpWWMlPO2TuF4uXJVQCeQBB942qP4nxMlQxAgzl3EkfKovvFOikJ1MqPzn5Gm7llRvfJ9JP30qkYHNOZ499ydGAHQCa8puVGneN7gV1VpELZB2StwW2sWiXIIuAKYzKdHnbxA7ToQal8JZvDcpb9TJ9hJqut2lzCAzEdF0H6UmzxNz8Kgee5/So/mNTLhV9+v7HrflNHD3nZc7OFt7s73D0HhHvvRtvG27ey208zqfrVJW/cbd29Bp9qLwtnnW8LJL35ff36A8XBDbHAtGL7QMQQG5HlA01r3gvECMPib2Y5vCo6iAdY/7t6q+NuZeddhsU4wV4DU3byW1A38MO3oIgfOrqEYrY87JOcplK7T4o3LhLElvMz8qqt3erFxbDHO0nWdfXnUPeyjlNDq8hoYn32IwpO1ef3fqaMZGO21eCyOdI2XjFdlYGQBsPen2zqozSARI5SNqfuJA0gefOh796YDFmgQJJIHoOQpaLKVcsaSW2BP2qZ7PYNXuqLlxgpOq2wJjpJNC4l9NCIGmUcq94Hje7uqw/EP0OvoTTKHmSnqNvZJLtutyzfRe8Ny0bKNh362WllH+4tPr8hWs3vWi/2vIrLhLyFihFxdRCp4LBRFgbFQWHqekDOY0plFIg8kpLcUDSrbaR0/MgfOKbBpSvEkeX3n8qIqYZh0ESZJMk7RroTXMo5aHl6jWa8tDMCxBnYctiCTHv714LoPLUUBrDn4t3mEOECZma4HQj+Qj4hHmJ9zV37X3BxPhOFx6aXsMTYv6wYEamN/ELbD/WazS6RlEfECPENNIMj5mNfLzNFYPE3FtPaDMtt8pKzoXXVSVnWVET1I6VzvF0u4+d/S/kdPi9UUpdvtff6eQybBJkiNzHrSMRZ2NPZ43OvSisUUFhwAM5ggyZ0OsctprpOZ8kLeAmmxSRqd6OFy2ugTMerE/YUo1UCZqWLhp44idkQeiAn3MkUlVJ3oMI5hbxDD1H3rWBxgmARIGwhjAGnly86zLh9kZgSQB56fWrha4uqhMoBBkErqwIA5aiDrRQslZabWMsc7Zn98qf7y3OZUg+RP/FV+ziCSGLP6GPrpRD46BsfpRJtEm18fhX5711QZxB/y/Suogog8BZMirNw+xrrpUXYQgxoPSp7h7qkGATymY+ulZTS4O7wW+SXw+AnZTvudvOjv+jGPiHoN6FtcVYiZ22hv60Xhb9y5trPMsBW6mzKEU6W4BiOH7jKCfMzFSnF8Vas4W0oUqSgggbsQQ2vI5gZ/1Ch71gAQSNNdCD+e9M8bBK2beUZRaWC2kNcLNpGsiEoNpIEscm6WxmuLwpdmMZQJJk7fqaEsWFNxAdsyySNAMwn6VIY7EA/GxMctI+g3oD+/7qqSG0Gp0J56bmlts3RCHP8AIxjLEM4JAykj2MVHPdy7UXjbgLud5Yn3JoK4J6UVHzIyzeQNfctqTSbFsF1B1BMf0ojuvKmyka9CKeiDk2MYh9IHL3+dM2iZr3ELrSEtnrA/flSj9jS8dxuxi8CbF0/4FhSCBOW49xVQAaScxQt5M3Ss2mtA7M8Dw1zD5BdQs5MvlYFXh1t5iywqBipJkyaoV/DtbdkdSroxVlO4ZTBHyINMIJmuI0PT9n8q9ivUt5tJAJIidvmeVBhQnC3cpgnQ/sGiCd6FvWYMfvTeiGEH9/OgMzi8ToDpz+486YN4061CTWGQ8jGaXdJPX9+VNriCBy9qK4Xw+7ibnd2hJgsZMAAaSSfUCiAEAFOIpbYE+gmp3/6KxPW1r/4g/TyNKHYzFjYoNOVyNOug2oBINVPSixaWJz8pijx2VxMSHtEame9HLc16vZTEfisbT/ijbrttQMRm23uameD4sLIA3ifUfbevbfZXEHZrJ0B/xAdDsfTUe9GYbsriAdTb/wD6CtQWwpL8042JA0pVvs3fIBBt/wC8EU4nZ2+N2t/7xRQjAjivKvaObspfP4f939K6mFoXhXMnU0YDqK6uqcOT0svBM8KGtS7sRtp6V1dQl7xXF/xDdsTE/iFB8WY5PS/cA8gM0AdAK6urS94Vf8bMtc6fIU0p8X7869rqqeUwe9SErq6sKPj4TTF8aV5XURCNx29NoK6upWXjwXDs7cIwuKgkRZzCDEMty0VYdCDqDyqL7bH/APIYv/z7n/urq6iT7kNSTXV1AKPbfxL6/pROI+JvU11dWQzGXoRtzXV1YaJ6o1HqKvH9ng/j3f8Ay/8A5LXtdWCy+ZANgKbW0v4R7CurqAT2K9CjeBPWurqxhQtjoPanAg00GldXUABNq2Og9qcVB0Fe11EAuvK6urBP/9k='}} style={{height:110,width:110,marginTop:5,marginRight:5}}></Image>

</TouchableOpacity>




<TouchableOpacity>

</TouchableOpacity>




</View>

<View style={{flexDirection:'row',marginLeft:5}}>
<TouchableOpacity>
<Image source={{uri :'data:image/jpeg;base64,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'}} style={{height:110,width:110,marginTop:5,marginRight:5}}></Image>

</TouchableOpacity>
<TouchableOpacity>
<Image source={{uri :'http://rjwattenhofer.com/products/gaming-desktop-wallpapers-backgrounds/downloads/cs-go-800x600-14.jpg'}} style={{height:110,width:110,marginTop:5,marginRight:5}}></Image>

</TouchableOpacity>
<TouchableOpacity>
<Image source={{uri:'http://wallpapers99.com/Prototype_Game--w1024x768--0--0--images/wallpaper/1024x768/Prototype_Game_10415.jpg'}} style={{height:110,width:110,marginTop:5,marginRight:5}}></Image>

</TouchableOpacity>


</View>


</View>






<View style={{flex:1 ,alignItems:'center'}}>


    <TouchableOpacity>


        <Image source={{uri:'https://cdn.allwallpaper.in/wallpapers/2560x1440/685/asus-rog-republic-of-gamers-2560x1440-wallpaper.jpg'}} style={{height:200,width:340 , marginLeft:5,marginRight:5,marginBottom:5,marginTop:5}}>

            
        </Image>
    </TouchableOpacity>
</View>









</ScrollView>
</View>
<View style={{alignItems:'center'}}>
<View style={{flexDirection:'row',marginLeft:5}}>
<TouchableOpacity>

<Image source={{uri :'https://i.ytimg.com/vi/gZeV4Girjgs/maxresdefault.jpg'}} style={{height:110,width:110,marginTop:5,marginRight:5}}></Image>
</TouchableOpacity>
<TouchableOpacity>

<Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnO9BgTCloGJjUzDKZAzTX7xGdibmAJln3RANjhJEZxnrFjMt9QA'}} style={{height:110,width:120,marginTop:5,marginRight:5}}></Image>

</TouchableOpacity>

<TouchableOpacity>
<Image source={{uri :'http://usc.pnpcorp.biz:18801/Images/Download/Wallpaper/ibp_howling/howling-800X600.jpg'}} style={{height:110,width:110,marginTop:5,marginRight:5}}></Image>

</TouchableOpacity>





</View>
<View style={{flex:1 ,alignItems:'center',marginTop:5}}>


    <TouchableOpacity>


        <Image source={{uri :'https://www.jooomshaper.com/data/out/6/IMG_85794.png'}} style={{height:200,width:340 , marginLeft:5,marginRight:5,marginBottom:5,marginTop:5}}>

            
        </Image>
    </TouchableOpacity>
</View>



</View>
        </ScrollView>
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
        ,width:100
        ,marginTop:10
        ,marginLeft:10
        ,borderRadius:10
        ,borderColor:'rgb(230, 26, 95)'
        ,borderWidth:1
        ,
    
    
    }
      
    
    
    
    })
    
     