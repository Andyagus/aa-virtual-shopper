import React from 'react'
import {  AppRegistry,
    StyleSheet,asset, VrButton, Text, View} from 'react-360'
import Entity from 'Entity'

export default class Heels extends React.Component{
    
    state = {
        infotainer: false
    }
    
    handleClick = () => {
        this.setState({infotainer: !infotainer})
    }
    
    render(){
        return(
          <View>  
           <VrButton onClick={() => {this.handleClick()}}>
            <Entity 
                source={{
                    obj: asset('heels.obj'),
                    mtl: asset('heels.mtl')
                }}
                
                style={{transform:[
                    {scaleX: 0.05 },
                    { scaleY: 0.05 },
                    { scaleZ: 0.05 },

                ]}}
                />

            </VrButton> 
           
        </View>

        )
    }
}

