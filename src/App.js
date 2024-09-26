import React, { Component } from 'react';
import { View } from 'react-native';
import { initializeApp } from 'firebase/app';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentDidMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyDWTaiykqeJD3FfaTcGwyD1XHzz2JKtZJU',
      authDomain: 'auth-bbbbc.firebaseapp.com',
      projectId: 'auth-bbbbc',
      storageBucket: 'auth-bbbbc.appspot.com',
      messagingSenderId: '1053163474661',
      appId: '1:1053163474661:web:ab779a6a156111cb240e0c',
      measurementId: 'G-J8LDRQP5DE',
    };

    initializeApp(firebaseConfig);
  }
  render() {
    return (
      <View>
        <Header title="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
