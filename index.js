import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360';
import Heels from './entities/heels.js'
import HeelPanel from './HeelPanel'

export default class aa_virtual_shopper extends React.Component {
  state= {
    shoe: true
  }
  render() {

    return (
    <View>
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Heels
          </Text>
        </View>
      </View>
    </View>
    );
  }
};


const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: 'grey',
    borderColor: 'white',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('aa_virtual_shopper', () => aa_virtual_shopper);


if(1+1 == 2){
  AppRegistry.registerComponent('Heels', ()  => Heels)
 } else {
    null
}


