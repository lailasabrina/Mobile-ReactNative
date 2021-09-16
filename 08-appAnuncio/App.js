import React, { Component } from 'react';
import { View, Text, ScrollView, Image, ImageBackground} from 'react-native';
import { styles } from './style'

class App extends Component {


  render() {
    const image = { uri: "https://pm1.narvii.com/6464/48d41b366079a1a37d7389fdfcd79e163a158d89_hq.jpg" };
    
    return (
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.imagem}>
        <View opacity={0.5} style={styles.boxtitulo}>
        <Text style={styles.titulo}>Anúncios</Text>
        </View>
        <View style={styles.box}>
          <ScrollView horizontal={true}>
            <View style={styles.borda}>
            <View opacity={0.9} style={styles.box1}>
              <Image
                source={{ uri: 'https://www.asianconnection.com.br/image/cache/catalog/products/musica/bts-army-bomb-light-stick-ver-2-520x520..jpg' }}
                style={styles.image}
              />
              <Text style={styles.texto}>ARMY BOMB</Text>
              <Text style={styles.texto2}>O lightstick, que é um símbolo de união entre o fandom e o grupo, pode ser utilizado de maneira muito além da usual. Ele, que serve para iluminar as apresentações dos grupos e trazer alegria nos shows.</Text>
              <Text style={styles.texto3}>R$153,59</Text>
            </View>
            </View>
            <View style={styles.borda}>
            <View opacity={0.9} style={styles.box2}>
            <Image
                source={{ uri: 'https://cf.shopee.com.br/file/2c0cd955ebcc4ee2c15ebdabea1c0038' }}
                style={styles.image}
              />
              <Text style={styles.texto}>MICROFONE BT21</Text>
              <Text style={styles.texto2}>Prepare-se para curtir o karaokê em casa! Com este microfone Bluetooth, sua casa se transformará em um palco! Mostre suas habilidades vocais esta noite! Conecte o microfone ao seu dispositivo.</Text>
              <Text style={styles.texto3}>R$308,00</Text>
            </View>
            </View>
            <View style={styles.borda}>
            <View opacity={0.9} style={styles.box3}>
            <Image
                source={{ uri: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/292/854/products/design-sem-nome-571-f491d073a4e83fffbd16286330179114-640-0.png' }}
                style={styles.image}
              />
              <Text style={styles.texto}>URSINHO BT21</Text>
              <Text style={styles.texto2}>Linha LINE FRIENDS; Fofo, bonito e super macio, este ursinho fica sentado sem nenhum apoio e é da edição especial baby do BT21. Personagens:	Cooky, Koya, RJ, Shooky, Mang, Chimmy e TATA. </Text>
              <Text style={styles.texto3}>R$350,00</Text>
            </View>
            </View>
            <View style={styles.borda}>
            <View opacity={0.9} style={styles.box4}>
            <Image
                source={{ uri: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/292/854/products/design-sem-nome-281-767303f227d967347e16079018303614-640-0.png' }}
                style={styles.image}
              />
              <Text style={styles.texto}>BTS - ÁLBUM BE</Text>
              <Text style={styles.texto2}>CONTEÚDO DO ÁLBUM: Photobook com 2 conceitos; Making Book; CD; 8 PHOTOCARDS; Polariod Photocard; Photo Frame; Postcard; Poster (dobrado dentro do álbum).</Text>
              <Text style={styles.texto3}>R$499,90</Text>
            </View>
            </View>
            <View style={styles.borda}>
            <View opacity={0.9} style={styles.box5}>
            <Image
                source={{ uri: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/020/933/products/whatsapp-image-2020-11-02-at-13-01-291-439c37c2790548822416043336122214-1024-1024.jpeg' }}
                style={styles.image}
              />
              <Text style={styles.texto}>RELÓGIO BT21</Text>
              <Text style={styles.texto2}>Criado em colaboração com o grupo global BTS, o BT21 está ganhando o coração de pessoas no mundo inteiro. Cada personagem representa um membro, com superpoderes e muita fofura.</Text>
              <Text style={styles.texto3}>R$405,00</Text>
            </View>
            </View>
            <View style={styles.borda}>
            <View opacity={0.9} style={styles.box6}>
            <Image
                source={{ uri: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/918/902/products/cokodive-bt21-x-royche-wireless-keyboard-ver-2-13788243427408_720x1-0b3e965bb0ba6165f416149053966311-480-0.png' }}
                style={styles.image}
              />
              <Text style={styles.texto}>BT21 - KEYBOARD</Text>
              <Text style={styles.texto2}>O teclado BT21 possui um figure keycap do personagem escolhido, manual e um adaptador USB para conexão Wireless. Além de muita fofura e doçura do seu personagem favorito.</Text>
              <Text style={styles.texto3}>R$548,00</Text>
            </View>
            </View>
            <View style={styles.borda}>
            <View opacity={0.9} style={styles.box7}>
            <Image
                source={{ uri: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/918/902/products/imagem_2021-06-15_0025361-3d61772d70b0e837db16237278418825-640-0.png' }}
                style={styles.image}
              />
              <Text style={styles.texto}>BTS - ÁLBUM BUTTER</Text>
              <Text style={styles.texto2}>CONTEÚDO DO ÁLBUM: CD; Out Box; Photobook; Lyric Cards; Instant Photocard; Photo Stand; Folded Message Card; Graphic Sticker; Photocard. Lacrado 100% Original.</Text>
              <Text style={styles.texto3}>R$214,00</Text>
            </View>
            </View>
            
          </ScrollView>
        </View>
        </ImageBackground>
      </View>
    )
  }
}

export default App;

