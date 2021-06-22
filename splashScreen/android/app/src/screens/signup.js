
import React from 'react';
import { Container, Content, Header, Form, Input, Item, Button, Label, Link } from 'native-base';
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

export default class signup extends React.Component {
  state = { email: '', password: '', errorMessage: null }

  funcSignUp = () => {
    firebaseAuth.createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate('main'))
      .catch(error => this.setState({ errorMessage: error.message }));
  }

  render() {
    return (
      <Container style={styles.container}>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <Form>
          <View >
            <Text
              style={{ textAlign: 'center', color: 'blue', fontSize: 25, marginBottom: 20 }}
              underlineColorAndroid='#fff'
            >SIGN UP</Text>

          </View>

          <Item floatingLabel>
            <Label>E-mail</Label>
            <Input onChangeText={email => this.setState({ email })}
              value={this.state.email}
              autoCorrect={false} autoCapitalize="none" />
          </Item>

          <Item floatingLabel>
            <Label>Password</Label>
            <Input onChangeText={password => this.setState({ password })}
              value={this.state.password}
              autoCorrect={false} autoCapitalize="none"
              secureTextEntry={true} />
          </Item>


          <Button style={{ marginTop: 50 }}
            full rounded
            onPress={this.funcSignUp}
          >
            <Text style={{ color: '#fff' }}>Sign Up</Text>
          </Button>


          <Button
            style={{ marginTop: 20 }}
            full rounded
            onPress={() => this.props.navigation.navigate('login')}
          >

            <Text
              style={{ color: '#fff', textAlign: 'center' }}>
              Do you have an account? Sign In
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
