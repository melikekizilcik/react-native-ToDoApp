import React, {useState} from 'react';
import {SafeAreaView, Text,View, StyleSheet, FlatList, Alert} from 'react-native';
import FloatingButton from './src/components/FloatingButton';
import Colors from './src/styles/Colors';
import AddTaskModal from './src/components/AddTaskModal';
import TaskCard from './src/components/TaskCard';


const App = () => {
 
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [toDoList, setToDoList] = useState<any>([]);

  function handleModalVisible(){
    setModalVisible(!modalVisible);
  }
  
  function addTask(taskContent:string){
    const taskContentCheck = taskContent.trim().toLowerCase();
    const checkDublicate = toDoList.find((todo:any)=>todo.task.trim().toLowerCase()===taskContentCheck);
    if(taskContentCheck==''){
      Alert.alert("Geçersiz");
    }
    else{
      if(checkDublicate){
        Alert.alert("Bu görevi daha önce eklendiniz");
      }
      else{
        const newTask={
          id: toDoList.length+1,
          task: taskContent,
          isCompleted: false,
        }
        setToDoList((oldTasks:any)=> [...oldTasks, newTask])
        setModalVisible(false);
      }
    }
    
   
  }

  function deleteTask(task:any){
    if(task.isCompleted==false){
      const newList = toDoList.map((todo:any)=>{
        if(todo.id==task.id){
          todo.isCompleted == true;
        }
        return todo;
      });
      setToDoList(newList);
  }
  else{
    setToDoList(toDoList.filter((item:any)=> item.id !== task.id));
  }
  }
  const renderToDoList = ({item} :any)  => <TaskCard item={item} isCompleted={item.isCompleted} onDelete={()=> deleteTask(item)}></TaskCard>;

  return(
    
    <SafeAreaView style={styles.container}>
        <View>
            <Text style={styles.title}>My To-Do List</Text>
        </View>
        <View>
        <FloatingButton onPress={handleModalVisible}></FloatingButton>
        <AddTaskModal isVisible={modalVisible} onClose={handleModalVisible} onAddTask={addTask}></AddTaskModal>
        <FlatList data={toDoList} renderItem={renderToDoList}/>
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