import React, {FC} from "react";
import { SafeAreaView, Text, View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Colors from "../../styles/Colors";


interface IButtonProps{
    onPress : ()=>void;
}

const FloatingButton: FC<IButtonProps> = ({onPress}) => {
    return(
        <TouchableWithoutFeedback onPress={onPress}>
            <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.icon}>+</Text>
            </View>
        </SafeAreaView>
        </TouchableWithoutFeedback>
        
    );
}


const styles = StyleSheet.create({
    container:{
        position: "absolute",
        color : Colors.greenColor,
        borderRadius: 2,
        height:60,
        width:60,
        justifyContent:'center',
        alignItems: 'center',
        right: 15,
        top: 650
    },
    icon:{
        fontSize:35,
        color: Colors.greenColor
    }
});

export default FloatingButton;