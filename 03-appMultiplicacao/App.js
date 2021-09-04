import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput} from 'react-native';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: '',
      input2: '',
      result: '_'
    };
  }

  mult() {
    this.setState({
      result: this.state.input1 * this.state.input2,
    });
  }



  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Multiplicador de Números</Text>
        <TextInput 
          keyboardType='numeric'
          style={styles.input}
          placeholder="Digite o primeiro número"
          onChangeText={(n1) => this.setState({ input1: n1 })}
        />
        <TextInput 
          keyboardType='numeric'
          style={styles.input}
          placeholder="Digite o segundo número"
          onChangeText={(n2) => this.setState({ input2: n2 })}
        />

        <Button color="#FFE1A0" title="Calcular" onPress={this.mult.bind(this)} />

        <Text style={styles.texto}> Resultado: {this.state.result} </Text>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF999B',
  },
  titulo: {
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: '#FFE1A0',
    color: 'white',
    fontWeight: 'bold',
    paddingTop: 35,
    padding: 15,
  },
  input:{
    width: '100%',
    height: 60,
    borderWidth: 2,
    borderColor: '#FFE1A0',
    borderRadius: 30,
    marginTop: 15,
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 30,
    padding: 10,
    color: 'white',
    backgroundColor: '#FFE1A0',
  },
  texto: {
    textAlign: 'center',
    fontSize: 50,
    color: 'white',
    marginTop: 95,
  },
  botao: {
    backgroundColor: '#FFE1A0',
    color: 'white',
  }
})

export default App;