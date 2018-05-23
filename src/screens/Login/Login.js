import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Item, Form, Input, Button, Label, Card, CardItem, Body, Text,Left,Right } from 'native-base';
import Register from './../Register/Register';
import { KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { tryLogin } from "../../store/actions";
import {Spinner} from "../../components/common";

const ACCESS_TOKEN = '';

class Login extends Component {
    static navigatorStyle = {
        navBarHidden: true,
    }

    constructor(props){
        super(props);

        this.state = {
            username: "sigit@neo-fusion.com",
            password: "123456",
        }
    }

    authHandleLogin = () => {
        const authData = {
            username: this.state.username,
            password: this.state.password
        };
        this.props.onTryLogin(authData);
    }

    render() {

        let loginButton = (
            <Button rounded full onPress={ this.authHandleLogin } style={{backgroundColor:'purple'}}>
                <Text>Log In</Text>
            </Button>
        );

        if(this.props.isLoadingLogin) {
            loginButton = <Spinner />
        }

      return (
        <Container style={{backgroundColor: 'white',}}>
            <Image source={require('../../img/bg.jpg')} style={{width:'100%', height:'100%', position:'absolute', resizeMode:'cover'}}/>
          <Content contentContainerStyle={{justifyContent: 'center',alignItems: 'center', flex:1, marginTop:'10%'}}>
            <Card style={{width:'80%',height:'auto',paddingTop:'5%',paddingBottom:'10%'}}>
                    <Image source={require('../../img/logo.png')} style={{width: '50%', height: '50%', alignSelf:'center', resizeMode:'contain'}}/>
                    <Form>
                        <Item floatingLabel>
                        <Label>Username/Email/Phone Number</Label>
                            <Input
                                onChangeText={(text)=>this.setState({username: text})}
                            />
                        </Item>

                        <Item floatingLabel>
                        <Label>Password</Label>
                            <Input
                                onChangeText={(text)=>this.setState({password: text})}
                                secureTextEntry={true}
                            />
                        </Item>
                    </Form>

                    <CardItem>
                        {loginButton}
                    </CardItem>
                      <CardItem>
                            <Left>
                                <Text note onPress = {
                                    () => this.props.navigator.push(
                                        {
                                            screen: 'KreditPro.Forgot',
                                        }
                                    )
                                }
                                > Forgot your password</Text>
                            </Left>

                           <Right>
                            <Text note onPress = {
                                () => this.props.navigator.push(
                                    {
                                        screen: 'KreditPro.Register',
                                    }
                                )
                            }
                            > Create New Account</Text>
                            </Right>
                      </CardItem>
            </Card>
          </Content>
        </Container>
      );
    }
  }

const styles = ({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

  const mapDispatchToProps = dispatch => {
    return {
        onTryLogin: (authData) => dispatch(tryLogin(authData))
    };
  };



const mapStateToProps = state => {
    return {
        isLoadingLogin: state.ui.isLoadingLogin,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);