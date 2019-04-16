import React, { Component } from "react";
import { Button, View, Image, TextInput, StyleSheet } from "react-native";
import { db } from "../config";

let addUser = item => {
  db.ref("/customers").push({
    Name: item.name,
    Password: item.password,
    Email: item.email,
    Phone: item.phone
  });
};

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      name: "",
      password: "",
      email: "",
      phone: ""
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.addCustomer = this.addCustomer.bind(this);
  }

  addCustomer() {
    addUser(this.state);
  }

  handleChangeName(e) {
    this.setState({ name: e.nativeEvent.text });
  }
  handleChangePassword(e) {
    this.setState({ password: e.nativeEvent.text });
  }
  handleChangeEmail(e) {
    this.setState({ email: e.nativeEvent.text });
  }
  handleChangePhone(e) {
    this.setState({ phone: e.nativeEvent.text });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.welcome}
          autoCapitalize="none"
          value={this.state.name}
          onChange={this.handleChangeName}
          placeholder="Name"
        />

        <TextInput
          style={styles.welcome}
          value={this.state.password}
          onChange={this.handleChangePassword}
          placeholder="Password"
        />

        <TextInput
          style={styles.welcome}
          value={this.state.email}
          keyboardType="email-address"
          onChange={this.handleChangeEmail}
          placeholder="Email"
        />
        <TextInput
          style={styles.welcome}
          value={this.state.phone}
          onChange={this.handleChangePhone}
          placeholder="Phone"
        />
        <Button
          style={styles.welcome}
          title="SignUp"
          onPress={this.addCustomer}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    backgroundColor: "#FFFFFF",
    borderColor: "black",
    borderWidth: 1,
    width: 250,
    padding: 8,
    marginBottom: 15,
    borderRadius: 14
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: "center"
  }
});
