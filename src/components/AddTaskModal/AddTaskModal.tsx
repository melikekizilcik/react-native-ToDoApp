import React, { FC } from 'react';
import {SafeAreaView, Text, View, StyleSheet, Dimensions, TextInput, TouchableWithoutFeedback} from 'react-native';
import Modal from 'react-native-modal';
import Colors from '../../styles/Colors';


interface IModalProps{
    isVisible: boolean;
    onClose : () => void;
  }


const AddTaskModal: FC<IModalProps> = ({isVisible, onClose}) => {
    return(
        <Modal isVisible={isVisible} style={styles.modalContainer} onBackdropPress={onClose}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>Add a task your list</Text>
                <TextInput style={styles.input} placeholder="Task..." placeholderTextColor='white' multiline={true} ></TextInput>
                <TouchableWithoutFeedback>
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonPlaceholder}> 
                        Add task
                    </Text>
                </View>
                </TouchableWithoutFeedback>
            </View>
        </Modal>
    );
}

const deviceSize = Dimensions.get('window');

const styles = StyleSheet.create({
    modalContainer:{
        justifyContent: 'flex-end',
        margin: 0,


    },
    innerContainer:{
        backgroundColor: Colors.greyColor,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: deviceSize.height / 2,
        padding:10
    },
    title:{
        color: Colors.whiteColor,
        textAlign:'center'
    },
    input:{
        borderWidth: 1,
        borderRadius:10,
        borderColor:'white',
        marginTop: 30,
        color: 'white'
    },
    buttonContainer:{
        backgroundColor:Colors.greenColor,
        borderRadius:50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        padding:10
    },
    buttonPlaceholder:{
        color:Colors.darkColor,
        fontSize: 15
    }
});


export default AddTaskModal;