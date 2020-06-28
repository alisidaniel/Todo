import React from "react";
import {View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity} from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";
import colors from '../Colors';

export default class AddListModal extends React.Component{

    render(){
        return(
           <KeyboardAvoidingView style={styles.container} behavior="padding">
               <TouchableOpacity style={{position: "absolute", top: 64, right: 32}} onPress={this.props.closeModal}>
                   <AntIcon name="close" size={24} color={colors.black}/>
               </TouchableOpacity>
           </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});