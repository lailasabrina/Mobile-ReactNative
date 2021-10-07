import React, { Component } from 'react';
import { StyleSheet, Text, View, Switch, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '',
      status2: 0,
    };
  }

  async componentDidMount() {
    await AsyncStorage.getItem('status').then((value) => {
      this.setState({ status: JSON.parse(value) });
    });

    await AsyncStorage.getItem('status2').then((value2) => {
      this.setState({ status2: JSON.parse(value2) });
    });
  }

  async componentDidUpdate(_, prevState) {
    const status = this.state.status;
    const status2 = this.state.status2;

    await AsyncStorage.setItem('status', JSON.stringify(status));
    await AsyncStorage.setItem('status2', JSON.stringify(status2));
  }

  render() {
    return (
      <View
        style={{
          backgroundColor: `${this.state.status == 1 ? 'black' : 'white'}`,
          paddingTop: 50,
        }}>
        <ScrollView>
          <Text
            style={{
              backgroundColor: `${this.state.status == 1 ? 'white' : 'black'}`,
              color: `${this.state.status == 1 ? 'black' : 'white'}`,
              textAlign: 'center',
              fontSize: 30,
              fontWeight: 'bold',
              paddingTop: 35,
              padding: 10,
            }}>
            Frases
          </Text>
          <Text
            style={{
              fontSize: `${this.state.status2 == 1 ? 35 : 25}`,
              textAlign: 'center',
              color: `${this.state.status == 1 ? 'white' : 'black'}`,
              marginTop: 10,
            }}>
            <Octicons
              style={{
                marginRight: 10,
                color: 'purple',
              }}
              name="heart"
              size={20}
            />{' '}
            Bem-Vindos(as) a Magic Shop!
            <Octicons
              style={{
                marginLeft: 10,
                color: 'purple',
              }}
              name="heart"
              size={20}
            />
          </Text>

          <View style={styles.inline}>
            <View style={{ flexDirection: 'row' }}>
              <MaterialCommunityIcons
                style={{
                  marginRight: 10,
                  color: `${this.state.status == 1 ? 'white' : 'black'}`,
                }}
                name="weather-night"
                size={35}
              />
              <Switch
                value={this.state.status == 1 ? true : false}
                onValueChange={(valorSwitch) =>
                  this.setState({ status: valorSwitch ? 1 : 0 })
                }
                thumbColor={this.state.status == 0 ? 'black' : 'white'}
              />
            </View>

            <View style={{ flexDirection: 'row' }}>
              <Octicons
                style={{
                  marginRight: 10,
                  color: `${this.state.status == 1 ? 'white' : 'black'}`,
                }}
                name="text-size"
                size={35}
              />
              <Switch
                value={this.state.status2 == 1 ? true : false}
                onValueChange={(valorSwitch) =>
                  this.setState({ status2: valorSwitch ? 1 : 0 })
                }
                thumbColor={this.state.status2 == 0 ? 'black' : 'white'}
              />
            </View>
          </View>
          <Text
            style={{
              fontSize: `${this.state.status2 == 1 ? 20 : 15}`,
              color: `${this.state.status == 1 ? 'white' : 'black'}`,
              textAlign: 'center',
              fontStyle: 'italic',
            }}>
            "Mesmo que você não seja perfeito, é edição limitada."{'\n'}
          </Text>
          <Text
            style={{
              fontSize: `${this.state.status2 == 1 ? 20 : 15}`,
              color: `${this.state.status == 1 ? 'white' : 'black'}`,
              textAlign: 'center',
              fontWeight: '700',
              marginBottom: 30,
            }}>
            - Kim Namjoon
          </Text>

          <Text
            style={{
              fontSize: `${this.state.status2 == 1 ? 20 : 15}`,
              color: `${this.state.status == 1 ? 'white' : 'black'}`,
              textAlign: 'center',
              fontStyle: 'italic',
            }}>
            “You gave me the best of me{'\n'}
            So you'll give you the best of you{'\n'}
            nal chajanaetjana nal arajwotjana{'\n'}
            You gave me the best of me{'\n'}
            So you'll give you the best of you{'\n'}
            neon chajanael geoya ne ane itneun galaxy"{'\n'}
          </Text>
          <Text
            style={{
              fontSize: `${this.state.status2 == 1 ? 20 : 15}`,
              color: `${this.state.status == 1 ? 'white' : 'black'}`,
              textAlign: 'center',
              fontWeight: '700',
              marginBottom: 30,
            }}>
            - BTS
          </Text>

          <Text
            style={{
              fontSize: `${this.state.status2 == 1 ? 20 : 15}`,
              color: `${this.state.status == 1 ? 'white' : 'black'}`,
              textAlign: 'center',
              fontStyle: 'italic',
            }}>
            “Like an echo in the forest{'\n'}
            Haruga doraogetji{'\n'}
            Amu ildo eopdan deusi{'\n'}
            Yeah life goes on{'\n'}
            Like an arrow in the blue sky{'\n'}
            Tto haru deo naragaji{'\n'}
            On my pillow, on my table{'\n'}
            Yeah life goes on{'\n'}
            Like this again" {'\n'}
          </Text>
          <Text
            style={{
              fontSize: `${this.state.status2 == 1 ? 20 : 15}`,
              color: `${this.state.status == 1 ? 'white' : 'black'}`,
              textAlign: 'center',
              fontWeight: '700',
              marginBottom: 30,
            }}>
            - BTS
          </Text>

          <Text
            style={{
              fontSize: `${this.state.status2 == 1 ? 20 : 15}`,
              color: `${this.state.status == 1 ? 'white' : 'black'}`,
              textAlign: 'center',
              fontStyle: 'italic',
            }}>
            “I wanna dance{'\n'}
            The music's got me going{'\n'}
            Ain't nothing that can stop how we move, yeah{'\n'}
            Let's break our plans{'\n'}
            And live just like we're golden{'\n'}
            And roll in like we're dancing fools" {'\n'}
          </Text>
          <Text
            style={{
              fontSize: `${this.state.status2 == 1 ? 20 : 15}`,
              color: `${this.state.status == 1 ? 'white' : 'black'}`,
              textAlign: 'center',
              fontWeight: '700',
              marginBottom: 30,
            }}>
            - BTS
          </Text>

          <Text
            style={{
              fontSize: `${this.state.status2 == 1 ? 20 : 15}`,
              color: `${this.state.status == 1 ? 'white' : 'black'}`,
              textAlign: 'center',
              fontStyle: 'italic',
            }}>
            “Shine, dream, smile{'\n'}
            Oh, let us light up the night {'\n'}
            ulin ulidaelo bichna{'\n'}
            Shine, dream, smile{'\n'}
            Oh, let us light up the night{'\n'} 
            uli geu jachelo bichna{'\n'}
            Tonight"{'\n'}
          </Text>
          <Text
            style={{
              fontSize: `${this.state.status2 == 1 ? 20 : 15}`,
              color: `${this.state.status == 1 ? 'white' : 'black'}`,
              textAlign: 'center',
              fontWeight: '700',
              marginBottom: 30,
            }}>
            - BTS
          </Text>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    backgroundColor: '#ff087f',
    color: 'white',
    fontWeight: 'bold',
    paddingTop: 35,
    padding: 15,
  },
  inline: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 50,
    paddingBottom: 50,
  },
});

export default App;
