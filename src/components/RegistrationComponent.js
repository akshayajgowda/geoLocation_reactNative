import React, {Component} from 'react';
import {StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  ToastAndroid } from 'react-native';
  import{ registerUser }from '../services/Services';
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



export default class RegistrationComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        navigation.title = "RegistrationComponent"

    }
        constructor(props) {
            super(props);
            this.state = {
                visible:false,
                message:'User Created',
            user:{ username: '', password: '', email: '', phone_number: ''}
            }

            this.handleChange=this.handleChange.bind(this);
            this.AddUser=this.AddUser.bind(this)
        }


    AddUser(){
        registerUser(this.state.user).then(result=>{
            this.setState({message:'User Created Successfully',visible:true});
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
      <View style={styles.inputContainer}>
        <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db'}}/>
        <TextInput style={styles.inputs}
            placeholder="Full name"
            keyboardType="email-address"
            underlineColorAndroid='transparent'
            onChange={(e)=>{
                this.handleChange(e,'username')
            }} />
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

      <View style={styles.inputContainer}>
        <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
        <TextInput style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid='transparent'
            onChange={(e)=>{
                this.handleChange(e,'email')
            }}/>
      </View>
      
      <View style={styles.inputContainer}>
        <Image style={styles.inputIcon} source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAVFBMVEX///9eeJHr7vFie5Serb37/PyntcNmf5equMWGmq3u8fNrg5rm6u6Zqbl+kqf29/nT2uG9yNLO1t3H0Nnc4uexvcpxiJ6Mn7C/ytN3jaKVprff5eloHJrbAAAA9ElEQVRIidXVxxKDMAxFUYu4YErooeT//zMFTCgLPWWVaM2ZCx6PUOpPptBuLGXiSkTOCITx9BpJpnsLsrhoLzMZ8dcaaZkIJUMQVKGRdCUTSJpVwMfsPwQ85mIjKIbIfUuuEGl3BPqYTSUFDzkJ4GILTCjlFtKi4HPI8G1RKl6IxkkZvgXPGCfPTPJMTeLMevsFGSvPRCTP9PJM+UXG/2ym3WWSeABMHkyuMv1cuB1PknA5abkLwE6v6DA5vzr80fSsidzReHZ/NEdCY8IZezI3rmP6k2H3+tlkHFEm3wvoh9vcwuPOd3xjDtWx1raqwcf/cx6Hkwd4CDS7+AAAAABJRU5ErkJggg=='}}/>
        <TextInput style={styles.inputs}
            placeholder="Phone"
            underlineColorAndroid='transparent'
            onChange={(e)=>{
                this.handleChange(e,'phone_number')
            }}/>
      </View>
      

      <TouchableHighlight>
        <Button title="Sign up" style={styles.signUpText}  onPress={this.AddUser}>Sign up</Button>
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