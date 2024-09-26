import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { CustomButton, Header, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

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

    const firebaseApp = initializeApp(firebaseConfig);

    this.auth = getAuth(firebaseApp);

    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        // User is signed out
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={styles.buttonContainer}>
            <CustomButton title="Logout" onPress={() => signOut(this.auth)} />
          </View>
        );

      case false:
        return <LoginForm auth={this.auth} />;

      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header title="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 5,
    flexDirection: 'row',
  },
});

export default App;
