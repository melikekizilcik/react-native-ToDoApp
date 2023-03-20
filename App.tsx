import React, {useState} from 'react';
import {SafeAreaView, Text,View, StyleSheet} from 'react-native';
import FloatingButton from './src/components/FloatingButton';
import Colors from './src/styles/Colors';
import AddTaskModal from './src/components/AddTaskModal';


const App = () => {
 
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  function handleModalVisible(){
    setModalVisible(!modalVisible);
  }
 
  return(
   
    <SafeAreaView style={styles.container}>
        <View>
            <Text style={styles.title}>My To-Do List</Text>
        </View>
        <View>
        <FloatingButton onPress={handleModalVisible}></FloatingButton>
        <AddTaskModal isVisible={modalVisible} onClose={handleModalVisible}></AddTaskModal>
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