import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import GeolocationExample from './geolocation';




export default class ProfileComponent extends Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = ({ navigation }) => {
        navigation.title = "LandingComponent"     
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to Bhilwara Attendence App</Text>
                <Button title="Landing" onPress={() => this.props.navigation.navigate('LandingComponent')} />
                <Button title="Login" onPress={() => this.props.navigation.navigate('LoginComponent')} />
                <Button title="RegistrationComponent" onPress={() => this.props.navigation.navigate('RegistrationComponent')} />
                <Button title="ProfileComponent" onPress={() => this.props.navigation.navigate('ProfileComponent')} />
     <GeolocationExample/>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        // justifyContent: 'center',
        // alignItems: 'center',
        padding:10,
        
      },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});