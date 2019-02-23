import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Yhome from './yhome'


const HomeRoute = () => <Yhome></Yhome>;

const ProfileRoute = () => <Text>Hello Follow</Text>;

const SearchRoute = () => <Text>Hello Follow</Text>;

const AddRoute = () => <Text>Hello Follow</Text>;

const FollowRoute = ()=><Text>Hello Follow</Text>;

export default class Youtube extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'Home', title: 'Home', icon: 'home',color:'black',},
      { key: 'Search', title: 'Search', icon: 'search',color:'black'},
      { key: 'plus', title: 'Add', icon: 'shop-two',color:'black',},


      { key: 'follow', title: 'follow', icon:'favorite-border', color:'black',badge:3},
      { key: 'profile', title: 'profile', icon: 'email',color:'black'},
      { key: 'profile', title: 'profile', icon: 'person',color:'black'},
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
        activeColor='red'
        inactiveColor="grey"
        shifting={true}
      />
    );
  }
}