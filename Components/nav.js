import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Ifeeds from './Ifeeds'
import Ihome from './Ihome'
import Follow from './follow'
import Search from './search'
import Add from './add'

const HomeRoute = () => <Ifeeds></Ifeeds>;

const ProfileRoute = () => <Ihome></Ihome>;

const SearchRoute = () => <Search></Search>;

const AddRoute = () => <Add></Add>;

const FollowRoute = ()=><Follow></Follow>

export default class Nav extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'Home', title: 'Home', icon: 'home',color:'white',},
      { key: 'Search', title: 'Search', icon: 'search',color:'white'},
      { key: 'plus', title: 'Add', icon: 'add-box',color:'white',},


      { key: 'follow', title: 'follow', icon:'favorite-border', color:'white',badge:3},
      { key: 'profile', title: 'profile', icon: 'person',color:'white'},
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    Home: HomeRoute,
    profile: ProfileRoute,
    Search: SearchRoute,
    plus : AddRoute,
    follow: FollowRoute,
  },
 );

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
        activeColor='black'
        inactiveColor="grey"
        shifting={true}
      />
    );
  }
}