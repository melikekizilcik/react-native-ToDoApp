import React from 'react';
import {SafeAreaView, Text,View, StyleSheet} from 'react-native';
import FloatingButton from './src/components/FloatingButton';
import Colors from './src/styles/Colors';

const App = () => {
  return(
   
    <SafeAreaView style={styles.container}>
        <View>
            <Text style={styles.title}>My To-Do List</Text>
        </View>
        <View>
        <FloatingButton></FloatingButton>
        </View>
    </SafeAreaView>
   
  );
};


const styles = StyleSheet.create({
  container:{
    backgroundColor: Colors.greyColor,
    flex:1 
  },
  title:{
    color: Colors.greenColor,
    fontSize: 32
  }
});


export default App;