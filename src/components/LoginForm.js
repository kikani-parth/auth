import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { CustomButton, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '' };

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

        <CardSection />

        <CardSection>
          <CustomButton title="Login" />
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create();

export default LoginForm;
