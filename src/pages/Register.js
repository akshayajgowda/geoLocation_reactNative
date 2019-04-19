import React, {Component} from 'react';
import {StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert} from 'react-native';
  import RegistrationComponent from '../components/RegistrationComponent'

  export default class Register extends Component {
    constructor(props) {
        super(props);   
    }       

    render(){
        return(
            <RegistrationComponent navigation={this.props.navigation} />
        )
    }
}