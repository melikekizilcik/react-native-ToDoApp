import React from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import Colors from "../../styles/Colors";

const FloatingButton = () => {
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.icon}>+</Text>
            </View>
        </SafeAreaView>
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