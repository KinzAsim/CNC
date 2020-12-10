import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class GraphScreen extends React.Component{
    render(){
        return(
            // <LinearGradient colors={["#141746","#00608a","#506591","#141746"]}  style={{flex:1}}>
            //     <Text>GraphScreen</Text>
            // </LinearGradient>
            <View style={{flex:1,backgroundColor:'#141746'}}>
            <View style={{backgroundColor:"#076ca5",flex:0.2,borderTopStartRadius:40,borderBottomEndRadius:40}}></View>
            <View style={{backgroundColor:"#409ecb",flex:0.2,borderTopStartRadius:40,borderBottomEndRadius:40}}></View>
            <View style={{backgroundColor:"#417cac",flex:0.2,borderTopStartRadius:40,borderBottomEndRadius:40}}></View>
            <View style={{backgroundColor:"#0094ac",flex:0.2,borderTopStartRadius:40,borderBottomEndRadius:40}}></View>
            <View style={{backgroundColor:"#2d4c70",flex:0.2,borderTopStartRadius:40,borderBottomEndRadius:40}}></View>
            </View>
          
        );
    }
}

export default GraphScreen;