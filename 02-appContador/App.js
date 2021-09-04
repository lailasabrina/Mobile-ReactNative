import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cont: 0
    };
  }

  mais() {
    this.setState({
      cont: this.state.cont + 1,
    });
  }

  menos() {
    if (this.state.cont > 0) {
      this.setState({
        cont: this.state.cont - 1,
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Contador de Pessoas</Text>
        <Text style={styles.texto}> {this.state.cont} </Text>
        <Button color="coral" title="+" onPress={this.mais.bind(this)} />
        <Button color="coral" title="-" onPress={this.menos.bind(this)} />
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#054f77',
  },

  titulo: {
    textAlign: 'center',
    fontSize: 30,
    backgroundColor: 'coral',
    color: 'white',
    fontWeight: 'bold',
    paddingTop: 35,
    padding: 15,
  },
  texto: {
    textAlign: 'center',
    fontSize: 100,
    color: 'white',
    marginTop: 241,
    marginBottom: 241,
  },
  botao: {
    backgroundColor: 'coral',
    color: 'white',
  }
})

export default App;