import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { CustomButton, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '' };
  onButtonPress() {
    const { email, password } = this.state;
    const { firebaseApp } = this.props;

    this.setState({ error: '' });

    const auth = getAuth(firebaseApp);
    signInWithEmailAndPassword(auth, email, password).catch((error) => {
      console.log(error);

      createUserWithEmailAndPassword(auth, email, password).catch((error) => {
        console.log(error);

        this.setState({ error: 'Authentication Failed' });
      });
    });
    // firebase
    //   .auth()
    //   .signInWithEmailAndPassword(email, password)
    //   .catch(() => {
    //     firebase
    //       .auth()
    //       .createUserWithEmailAndPassword(email, password)
    //       .catch(() => {
    //         this.setState({ error: 'Authentication Failed' });
    //       });
    //   });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={(email) => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry={true}
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
          />
        </CardSection>

        {this.state.error ? (
          <Text style={styles.error}>{this.state.error}</Text>
        ) : null}

        <CardSection>
          <CustomButton title="Login" onPress={this.onButtonPress.bind(this)} />
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  error: { fontSize: 20, alignSelf: 'center', color: 'red' },
});

export default LoginForm;
