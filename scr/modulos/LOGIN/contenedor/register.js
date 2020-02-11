import React, {Component} from 'react';
import {StyleSheet}from 'react-native';
import {Container, Content, Card, CardItem, Text, Body, Button, Item, Input} from 'native-base'
import {KeyboardAvoidingView, AsyncStorage, Alert}from 'react-native'
import api from '../componente/api';
import Header from '../componente/header.js';
import styles from '../componente/styleLogin.js';


class Register extends Component{

  constructor(props) {
    super(props) 
    this.state = {
      uname: '',
      email: '',
      password: ''
    }
  }

volver=()=> this.props.navigation.goBack()  

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

static navigationOptions =({navigation})=>{
    return {
        header:(<Header text='Registro'></Header>)
    }
}

   
render(){
    return(
        <Container>
            <Content padder contentContainerStyle={styles.content}>
            <KeyboardAvoidingView behavior="padding" enabled>
                    <Card>
                        <CardItem header bordered>
                            <Text style={styles.textCenter}>Registro de usuario</Text>
                        </CardItem>
                        <CardItem>
                            <Body style={styles.body}>
                                <Item inlineLabel>
                                    <Input placeholder="Nombre"
                                           onChangeText={(user) => this.setState({user})} 
                                           underlineColorAndroid='transparent'  
                                           style={styles.TextInputStyleClass}/>
                                </Item>
                                <Item inlineLabel>
                                    <Input placeholder="Correo Electronico"
                                           onChangeText={(email) => this.setState({email})}
                                           underlineColorAndroid='transparent'
                                           style={styles.TextInputStyleClass}/>
                                </Item>
                                <Item inlineLabel>
                                    <Input  placeholder="Contraseña"
                                            onChangeText={(pass) => this.setState({pass})}
                                            underlineColorAndroid='transparent'
                                            style={styles.TextInputStyleClass}
                                            secureTextEntry={true}/>
                                </Item>
                                </Body>
                            </CardItem>
                            <CardItem footer bordered>
                                <Button danger bordered onPress={this.volver}>
                                    <Text>Volver</Text>
                                </Button>
                                <Button success bordered style={styles.boton} onPress={this.register}>
                                    <Text>Guardar</Text>
                                </Button>
                            </CardItem>
                    </Card>
                </KeyboardAvoidingView>
            </Content>
        </Container>
    );
    }
}



export default Register