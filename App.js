import React from "react";
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer, createSwitchNavigator } from 'react-navigation';
import Login from './scr/modulos/LOGIN/contenedor/login'
import Register from './scr/modulos/LOGIN/contenedor/register'
import Inicio from './scr/modulos/PANTALLAS/contenedor/Home'
import Header from './scr/modulos/LOGIN/componente/header.js'




const LoginNavigator = createStackNavigator({
  Login:{
    screen: Login,
    navigationOptions:{
    title:'Login'
    }
  },
  Register:{
    screen: Register,
    navigationOptions:{
      title:'Registro'
    }
  },
},{defaultNavigationOptions : { header:(<Header></Header>)}});

const HomeNavigator = createStackNavigator({
  inicio:{
    screen:Inicio,
    navigationOptions:{
      title:'Bienvenido al Home'
    }
  }
})

export default createAppContainer(
  createSwitchNavigator(
    {
      UserLogin:LoginNavigator,
      Home: HomeNavigator
    },
    {
      initialRouteName: 'UserLogin',
    }
  )
);
