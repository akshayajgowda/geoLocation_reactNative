import React from "react";
import { createStackNavigator,createAppContainer } from "react-navigation";


import LandingComponent from '../components/LandingComponent';
import RegistrationComponent from '../components/RegistrationComponent';
import LoginComponent from '../components/LoginComponent';
import ProfileComponent from '../components/ProfileComponent';




const Route = createStackNavigator(
    {

        RegistrationComponent: RegistrationComponent,
        LoginComponent: LoginComponent,
        LandingComponent: LandingComponent,
        ProfileComponent:ProfileComponent


    },
    {
        initialRouteName: "LandingComponent"
    },

);
const RouterConfig = createAppContainer(Route);

export default RouterConfig;