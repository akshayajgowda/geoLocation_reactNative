import React, {Component} from 'react';
import {StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  ToastAndroid } from 'react-native';
  import {loginUser} from '../services/Services'
  const Toast = (props) => {
      if (props.visible) {
        ToastAndroid.showWithGravityAndOffset(
          props.message,
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50,
        );
        return null;
      }
      return null;
    };



export default class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible:false,
            message:'User Logged In',
           user:{  password: '', email:""}
        }

        this.login=this.login.bind(this);
        this.handleChange=this.handleChange.bind(this)
    }
    static navigationOptions = ({ navigation }) => {
        navigation.title = "LoginComponent"     
    }
    
    login(){
        loginUser(this.state.user).then(result=>{
            this.setState({message:'User Logged Successfully',visible:true});
        }).catch(err=>{
            this.setState({message:err.message,visible:true});
        });
    }
    handleChange(e,fieldName){
        let currentState=this.state;
        currentState.user[fieldName]=e.nativeEvent.text;
        this.setState(currentState);
    }


  render() {
    return (
        <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Bhilwara Attendence App</Text>
        <Text style={styles.welcome}>Login</Text>
  <View style={styles.inputContainer}>
        <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
        <TextInput style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid='transparent'
            onChange={(e)=>{
                this.handleChange(e,'email')
            }}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
        <TextInput style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid='transparent'
            onChange={(e)=>{
                this.handleChange(e,'password')
            }}/>
      </View>
      

      <TouchableHighlight>
        <Button title="Sign up" style={styles.signUpText} onPress={this.login}>Sign In</Button>
      </TouchableHighlight>
      <Toast visible={this.state.visible} message={this.state.message} />
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});