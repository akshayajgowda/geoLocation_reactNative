import React, {Component} from 'react';
import {StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert} from 'react-native';
  import LandingComponent from '../components/LandingComponent'

  export default class Landing extends Component {
    constructor(props) {
        super(props);   
    }       

    render(){
        return(
            <LandingComponent navigation={this.props.navigation} />
        )
    }
}