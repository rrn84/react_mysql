import React, { Component } from 'react'; 
import { StyleSheet, TextInput, View, Alert, TouchableOpacity, Text } from 'react-native'; 
import api from './api';

export default class App extends Component {
 
  constructor(props) {
    super(props) 
    this.state = {
      uname: '',
      email: '',
      password: ''
    }
  }
 
  register= async ()=> 
{
    let data = await api.registerData(this.state.email, this.state.user, this.state.pass)
    if(data ==1)
    {
        Alert.alert("Registro Exitoso")
    }else{
        Alert.alert("Error")
    }
}


  render() {
    return ( 
      <View style={styles.MainContainer}> 
        <Text style={{ fontSize: 20, color: "#DD2C00", textAlign: 'center', marginBottom: 15 }}>Registro Usuarios</Text> 
        <TextInput
          placeholder="Nombre"
          onChangeText={(user) => this.setState({user})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}          
        />
 
        <TextInput
          placeholder="Correo Electronico"
          onChangeText={(email) => this.setState({email})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />
 
        <TextInput
          placeholder="Contraseña"
          onChangeText={(pass) => this.setState({pass})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.button} onPress={this.register} >         
        <Text style={styles.text}>Registrar </Text> 
        </TouchableOpacity> 
      </View>
 
    );
  }
}
 
const styles = StyleSheet.create({ 
  MainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 10
  },
 
  TextInputStyleClass: { 
    textAlign: 'center',
    marginBottom: 7,
    height: 40,
    width: '80%',
    borderWidth: 1,
    borderColor: '#DD2C00',
    borderRadius: 5,
  },
 
  button: { 
    width: '80%',
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: '#DD2C00',
    borderRadius: 3,
    marginTop: 20
  },
 
  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    padding: 5
  }
 
});