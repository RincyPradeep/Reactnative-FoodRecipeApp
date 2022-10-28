import { SafeAreaView, StyleSheet, Text, View,FlatList,Image } from 'react-native'
import React from 'react'

const Home = () => {
  const dummyData=[
    {
      id:1,
      categories:['category1','category2','category3']
    }
  ]
  const renderHeader=()=>{
    return(
      <View style={styles.header}>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>
            Hello Rincy
          </Text>
          <Text style={styles.headerDescription}>What you want to cook today?</Text>
          {/* <Image style={{width:28,height:28}} source={require('../assets/icons/home.png')} /> */}
        </View>
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dummyData.categories}
        keyExtractor={item=>item.id.toString()}
        keyboardDismissMode='on-drag'
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {renderHeader()}
          </View>
        }
      />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff"
  },
  header:{
    height:80,
    flexDirection:'row',
    marginHorizontal:20,
    alignItems:'center'
  },
  headerView:{
    flex:1
  },
  headerText:{
    color:'green',
    fontSize:26,
    fontWeight:'600'
  },
  headerDescription:{
    fontSize:16,
    marginTop:3,
    color:'gray'
  }
})