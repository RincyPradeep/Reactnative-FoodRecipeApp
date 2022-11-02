import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import React from 'react'


const CustomButton = ({buttonText,colors,onPress}) => {
    if(colors.length>0){
        return (
            <TouchableOpacity onPress={onPress} style={styles.loginButtonContainer}>
                <LinearGradient
                    start={{x:0,y:0}}
                    end={{x:1,y:0}}
                    colors={colors}
                    style={styles.loginButton}
                >
                    <Text style={styles.buttonText}>{buttonText}</Text>
                </LinearGradient>
            </TouchableOpacity>
        )
    }

    return (
        <TouchableOpacity onPress={onPress} style={styles.signUpButton}>
            <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    loginButtonContainer:{
        width:'80%',
    },
    loginButton:{
        width:'100%',
        borderRadius:10,
        marginTop:40,
        paddingVertical:10      
    },
    signUpButton:{
        width:'80%',
        borderColor:'green',
        borderWidth:2,
        borderRadius:10,
        marginTop:20,
        paddingVertical:10
    },
    buttonText:{
        color:'#fff',
        textAlign:'center',
        fontSize:24,
        fontWeight:'500'   
    }
})