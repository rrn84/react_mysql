import React, {Component} from 'react';
import {StyleSheet}from 'react-native';
import {Container, Content, Card, CardItem, Text, Body, Button, Item, Input} from 'native-base'
import {KeyboardAvoidingView, AsyncStorage, Alert}from 'react-native'
import api from '../componente/api';
import Header from '../componente/header.js';
import styles from '../componente/styleLogin.js';


class Login extends Component{

    constructor(props){
        super(props);
        this.state={
             uname:'',
             password:''
        }
    }

static navigationOptions =({navigation})=>{
    return {
        header:(<Header text='Iniciar Sesión'></Header>)
    }
}

navegar = async(param) => {
    if(param =="Loading"){
        let valLog = await api.valLog(this.state.user, this.state.pass)
        if (valLog.status == 1){
            let userLogin = {
            user: this.state.uname,
            perm: true
        }            
        AsyncStorage.setItem('userLogin',JSON.stringify(userLogin))
        this.props.navigation.navigate(param)
    }else{
        Alert.alert('Error, usuario o clave invañlido')
    }
    }else{
        this.props.navigation.navigate(param)
    }    
}
    
render(){
    return(
        <Container>
            <Content padder contentContainerStyle={styles.content}>
                <KeyboardAvoidingView behavior="padding" enabled>
                    <Card>
                        <CardItem header bordered>
                            <Text style={styles.textCenter}>Inicio de sesión</Text>
                        </CardItem>

                        <CardItem>
                            <Body style={styles.body}>
                                <Item inlineLabel>
                                    <Input placeholder='Usuario' onChangeText={(uname) => this.setState({uname})}/>
                                </Item>
                                <Item inlineLabel>
                                    <Input placeholder='Contraseña' onChangeText={(password) => this.setState({password})}/>
                                </Item>
                                </Body>
                            </CardItem>
                            <CardItem footer bordered>
                                <Button  bordered onPress={() => this.navegar('Register')}>
                                    <Text>Registro</Text>
                                </Button>
                                <Button success bordered style={styles.boton}onPress={() => this.navegar('Loading')}>
                                    <Text>Entrar</Text>
                                </Button>
                            </CardItem>
                    </Card>
                </KeyboardAvoidingView>
            </Content>
        </Container>
    );
    }
}



export default Login