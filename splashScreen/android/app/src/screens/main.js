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
export default class main extends React.Component {
    componentDidMount() {
        const { currentUser } = firebaseAuth;
        this.setState({ currentUser })
    }

    funcLogout = () => {
        firebaseAuth.signOut().then(() => this.props.navigation.navigate('login'))
    }

    constructor(props) {
        super(props);
        this.state = { currentUser: null}
 }
    render() {
        const { currentUser } = this.state
        return (
            <Container>
               <Text>Welcome {currentUser && currentUser.email}!</Text>

               <Button style={{ marginTop: 50 }}
            full rounded success
            onPress={this.funcLogout}
          >
            <Text style={{ color: '#fff' }}>Logout</Text>
          </Button>
            </Container>
        )
    }
}

