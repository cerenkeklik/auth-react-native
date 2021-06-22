import React from 'react';
import { Container, Content, Header, Form, Input, Item, Button, Label, Link } from 'native-base';
import SplashScreen from 'react-native-splash-screen';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    StyleSheet,
    useColorScheme,
    View,
} from 'react-native';
import { firebaseAuth } from '../../environment/config';

export default class login extends React.Component {
    state = { email: '', password: '', errorMessage: null }

    loginFunc = () => {
        firebaseAuth.signInWithEmailAndPassword(this.state.email, this.state.password).
            then(() => this.props.navigation.navigate('main')).catch(error => this.setState({ errorMessage: error.message }));
    }

    render() {
        SplashScreen.hide();
        return (
            <Container style={styles.container}>
                {this.state.errorMessage &&
                    <Text style={{ color: 'red' }}>
                        {this.state.errorMessage}
                    </Text>}
                <Form>

                    <View>
                        <Text
                            style={{ textAlign: 'center', color: 'green', fontSize: 25, marginBottom: 20 }}
                            underlineColorAndroid='#fff'
                        >SIGN IN</Text>

                    </View>
                    <Item floatingLabel >
                        <Label>E-mail</Label>
                        <Input onChangeText={email => this.setState({ email })}
                            value={this.state.email}
                            autoCapitalize="none"
                        />
                    </Item>

                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input onChangeText={password => this.setState({ password })}
                            value={this.state.password}
                            autoCapitalize="none" secureTextEntry
                        />
                    </Item>

                    <Button style={{ marginTop: 50 }}
                        onPress={this.loginFunc}
                        full rounded success >
                        <Text style={{ color: '#fff' }}>Sign In</Text>
                    </Button>


                    <Button
                        style={{ marginTop: 20 }}
                        onPress={() => this.props.navigation.navigate('signup')}
                        full rounded success >
                        <Text
                            style={{ color: '#fff', textAlign: 'center' }}>
                            Don't you have an account? Sign Up
                        </Text>
                    </Button>

                </Form>
            </Container>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        padding: 10,

    }
});