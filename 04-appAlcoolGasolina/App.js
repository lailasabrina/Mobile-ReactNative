import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Pressable} from 'react-native';
 
class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      input1: '',
      input2: '',
      result: '',
      mensagem: '',
    };
  }

  verify() {
    let alcool = this.state.input1;
    let gasolina = this.state.input2;

    let calc = (alcool/gasolina).toFixed(2);
    if(calc < 0.7){
      this.setState({mensagem: 'Álcool é melhor!'});
    }
    else {
      this.setState({mensagem: 'Gasolina é melhor!'});
    }

    this.setState({result: calc})
  }


  render(){

 
 
    return(
      <View style={styles.container}>
        <Text style={styles.titulo}>Álcool ou Gasolina</Text>
 
        <Imagem />

        <TextInput 
          keyboardType='number-pad'
          style={styles.input}
          placeholder="Preço do Álcool"
          onChangeText={(n1) => this.setState({ input1: n1 })}
        />
        <TextInput 
          keyboardType='number-pad'
          style={styles.input}
          placeholder="Preço da Gasolina"
          onChangeText={(n2) => this.setState({ input2: n2 })}
        />

        <Pressable style={styles.botao} onPress={this.verify.bind(this)}> 
        <Text style={styles.botaotext}>Verificar</Text>
        </Pressable>

        <Text style={styles.texto}> Resultado: {this.state.result} </Text>
        <Text style={styles.texto}> {this.state.mensagem} </Text>
 
      </View>
    )
  }
}

 
class Imagem extends Component {
  render(){
    
    let img = 'https://meu-guia-carro.com.br/wp-content/uploads/2019/06/sentessence2.png?ezimgfmt=rs:256x256/rscb1/ng:webp/ngcb1';
 
    return(
        <Image
        source={{ uri: img }}
        style={{ width: 200, height: 200, marginLeft: 'auto', marginRight: 'auto', marginTop: 35, marginBottom: 35}}
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
    backgroundColor: '#e79911',
    color: 'white',
    fontWeight: 'bold',
    paddingTop: 35,
    padding: 15,
  }, 
  input:{
    width: 350,
    height: 45,
    borderWidth: 2,
    borderRadius: 30,
    marginBottom: 15,
    marginLeft: 'auto', 
    marginRight: 'auto',
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
    color: '#e79911',
    borderColor: '#e79911',
  },
  texto: {
    textAlign: 'center',
    fontSize: 30,
    color: '#e79911',
    marginTop: 20,
  },
  botao : {
    backgroundColor: '#e79911',
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