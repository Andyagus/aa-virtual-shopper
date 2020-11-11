import React from 'react'
import { AppRegistry, StyleSheet,asset, VrButton, Text, View} from 'react-360'
import Entity from 'Entity'

export default class HeelPanel extends React.Component{
    render(){
        return(
        <View style={styles.panel}>
        </View>   
        )
    }
}

const styles = StyleSheet.create({
    panel: {
      // Fill the entire surface
      width: 200,
      height: 200,
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    greeting: {
        fontSize: 30,
      },
  });
