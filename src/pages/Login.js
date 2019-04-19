import React, {Component} from 'react';
import {StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert} from 'react-native'
  import Logincomponent from '../components/LoginComponent'

  export default class Login extends Component {
    constructor(props) {
        super(props);   
    }       

    render(){
        return(
            <Logincomponent navigation={this.props.navigation} />
        )
    }
}