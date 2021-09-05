import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Pressable} from 'react-native';
 
class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      result: '',
    };
  }

  verify() {
    this.setState({
     result: Math.floor(Math.random() * 10)
    });

  }


  render(){

 
 
    return(
      <View style={styles.container}>
        <Text style={styles.titulo}>Jogo do Nº Aleatório</Text>
 
        <Imagem />

        <Text style={styles.texto}> Pense em um número de 0 a 10. </Text>
        <Text style={styles.texto2}>{this.state.result} </Text>

        <Pressable style={styles.botao} onPress={this.verify.bind(this)}> 
        <Text style={styles.botaotext}>Descobrir</Text>
        </Pressable>
 
      </View>
    )
  }
}

 
class Imagem extends Component {
  render(){
    
    let img = 'https://img.icons8.com/color/480/dice.png';
 
    return(
        <Image
        source={{ uri: img }}
        style={{ width: 250, height: 250, marginLeft: 'auto', marginRight: 'auto', marginTop: 30, marginBottom: 5}}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    backgroundColor: '#558b2f',
    color: 'white',
    fontWeight: 'bold',
    paddingTop: 35,
    padding: 15,
  }, 
  texto: {
    textAlign: 'center',
    fontSize: 24,
    color: '#558b2f',
    marginTop: 20,
    marginBottom: 50,
  },
  texto2: {
    textAlign: 'center',
    fontSize: 70,
    color: '#558b2f',
    marginTop: 20,
    marginBottom: 50,
  },
  botao : {
    backgroundColor: '#558b2f',
    borderRadius: 200/ 2,
    width: 350,
    height: 55,
    padding: 10,
    marginLeft: 'auto', 
    marginRight: 'auto',
    marginTop: 20,
  },
  botaotext: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
  },
})
 
export default App;