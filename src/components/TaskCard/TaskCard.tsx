import React, {FC} from 'react';
import { SafeAreaView, Text, View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Colors from '../../styles/Colors';

interface ICardProps{
    isCompleted: Boolean,
    item:any;
    onDelete: ()=>void;
}



const TaskCard: FC<ICardProps> = ({isCompleted, item, onDelete}) => {
    return(
        isCompleted ? 
        <TouchableWithoutFeedback onLongPress={onDelete}>
            <View style={styles.completedContainer}>
                <Text style={styles.completedTaskText}>{item.task}</Text>
            </View>
        </TouchableWithoutFeedback>
        :
        <TouchableWithoutFeedback onLongPress={onDelete}>
            <View style={styles.container}>
                <Text style={styles.taskText}>{item.task}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

const baseStyle = StyleSheet.create({
    container:{
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
    },
    taskText:{
        fontSize:17,
    }
});

const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.greenColor,
        ...baseStyle.container, // 3 nokta ile baseStyle ı burada kullanabiliriz
    },
    taskText:{
        color: Colors.darkColor,
        ...baseStyle.taskText,
    },
    completedContainer:{
        ...baseStyle.container,
        backgroundColor: Colors.greyColor
    },
    completedTaskText:{
        ...baseStyle.taskText,
        color: 'white',
        textDecorationLine: 'line-through'
    }
});


export default TaskCard;