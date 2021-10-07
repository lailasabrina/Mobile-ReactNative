import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';
 
class App extends Component{
  render(){
 
    let nome = 'Laila Sabrina Alves Silva de Lima';
    let email = 'ladysam.asl@hotmail.com';
    let dataNasc = '09/10/95';
    let git = 'https://github.com/lailasabrina';
    let img = 'https://avatars.githubusercontent.com/u/58498480?v=4';
 
    return(
      <View>
        <Text style={{backgroundColor: '#957DAD', color: 'white', fontSize: 25, marginTop: 20, padding: 10, textAlign: 'center', fontWeight: 'bold'}}>
          Meu Perfil
        </Text>
 
        <Image
          source={{ uri: img }}
          style={{ width: 200, height: 200, borderRadius: 200/ 2, marginLeft: 'auto', marginRight: 'auto', marginTop: 15, marginBottom: 15}}
        />
        <Text style={{ fontSize: 20, backgroundColor: '#957DAD', color: 'white', padding: 5, marginBottom: 10 }}> Dados Pessoais</Text>
        <Text style={{ fontSize: 15, marginLeft: 15, color: '#957DAD', fontWeight: 'bold' }}>{nome}</Text>
        <Text style={{ fontSize: 15, marginLeft: 30, color: '#957DAD'  }}>{dataNasc}</Text>
        <Text style={{ fontSize: 15, marginLeft: 30, color: '#957DAD', marginBottom: 10   }}>{email}</Text>

        <Text style={{ fontSize: 20, backgroundColor: '#957DAD', color: 'white', padding: 5, marginBottom: 10 }}> Formação</Text>
        <Text style={{ fontSize: 15, marginLeft: 15, color: '#957DAD', fontWeight: 'bold' }}>• Licenciatura em Pedagogia</Text>
        <Text style={{ fontSize: 15, marginLeft: 30, color: '#957DAD', marginBottom: 5  }}>Unip - Santos/Rangel</Text>
        <Text style={{ fontSize: 15, marginLeft: 15, color: '#957DAD', fontWeight: 'bold' }}>• Pós - graduação em Educação Especial e Inclusiva</Text>
        <Text style={{ fontSize: 15, marginLeft: 30, color: '#957DAD', marginBottom: 5 }}>Faculdade São Luís - EAD</Text>
        <Text style={{ fontSize: 15, marginLeft: 15, color: '#957DAD', fontWeight: 'bold' }}>• Tecnólogo em Sistemas para Internet</Text>
        <Text style={{ fontSize: 15, marginLeft: 30, color: '#957DAD'  }}>Fatec - Santos/Rubens Lara</Text>
        <Text style={{ fontSize: 15, marginLeft: 30, color: '#957DAD', marginBottom: 10  }}>6º semestre</Text>

        <Text style={{ fontSize: 20, backgroundColor: '#957DAD', color: 'white', padding: 5, marginBottom: 10 }}> Projetos</Text>
        <Text style={{ fontSize: 15, marginLeft: 15, color: '#957DAD', fontWeight: 'bold' }}>Disponíveis no meu perfil do GitHub:</Text>
        <Text style={{ fontSize: 15, marginLeft: 30, color: '#957DAD', marginBottom: 5  }}>{git}</Text>
  
 
      </View>
    )
  }
}
 
export default App;