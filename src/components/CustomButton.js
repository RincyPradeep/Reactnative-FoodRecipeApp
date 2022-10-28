import React from 'react'

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'


const CustomButton = ({buttonText,colors,onPress}) => {
    if(colors.length>0){
        return (
            <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
                <LinearGradient
                    start={{x:0,y:0}}
                    end={{x:1,y:0}}
                    colors={colors}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>{buttonText}</Text>
                </LinearGradient>
            </TouchableOpacity>
        )
    }

    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    buttonContainer:{
        
    },
    button:{
        width:'80%',
        borderColor:'green',
        borderWidth:2,
        borderRadius:10,
        marginTop:20,
        paddingVertical:10,
        justifyContent:'space-between'
    },
    buttonText:{
        color:'#fff',
        textAlign:'center',
        fontSize:24,
        fontWeight:'500'   
    }
})