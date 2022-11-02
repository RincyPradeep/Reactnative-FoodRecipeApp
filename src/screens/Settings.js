import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'


const Settings = () => {
  return (
    <View style={styles.settingsContainer}>
      <Text style={styles.settingsTitle}>Settings</Text>
      <View style={styles.settingsContent}>
        <TouchableOpacity>
            <Text style={styles.settingsText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.settingsText}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.settingsText}>Bookmark</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.settingsText}>General</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.settingsText}>Notification</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
    settingsContainer:{
        paddingVertical:50,
        paddingHorizontal:20,
    },
    settingsTitle:{
        fontSize:24,
        color:"#2d3436",
        fontFamily:"Roboto-Regular",
        marginBottom:20
    },
    settingsContent:{

    },
    settingsText:{
        marginBottom:30,
        fontSize:14
    }
})