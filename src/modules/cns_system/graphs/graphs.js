import React from 'react';
import {View, Text, ScrollView, StyleSheet,Dimensions,TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {BarChart} from 'react-native-animated-charts'

let WIDTH = Dimensions.get('window').width;
let HEIGHT = Dimensions.get('window').height;


class GraphScreen extends React.Component{
    constructor() {
        super()

        this.state = {
            dataY:[10,2,1.2,4.5,3],
            labels:['10k','2k','1.2k','4.5k','3k']
        }
    }

    recalculate = ()=>{
        let values = Array.from({length: 5}, () => Math.round(10*Math.random() * 5)/10)
        this.setState({
            dataY:values,
            labels: values.map(v=>(Math.round(v*10)/10)+'k')
        })
    }
    render(){
        return(
            <LinearGradient colors={["#141746","#00608a","#506591","#141746"]}  style={{flex:1}}>
                 <View style={styles.container}>
                    <BarChart 
                        labels={this.state.labels} 
                        dataY={this.state.dataY} 
                        color={'#a7bd4f'} 
                        height={HEIGHT * .6}
                        containerStyles={styles.barChart}
                    />
                    <TouchableOpacity onPress={this.recalculate} style={styles.button}>
                        <Text style={styles.buttonText}>Recalculate</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
           
          
        );
    }
}

export default GraphScreen;

const styles = StyleSheet.create({
    container: {
        alignItems:"center"
    },
    button: {
        backgroundColor:"#a7bd4f",
        marginTop:30,
        width:WIDTH*.4,
        height:40, 
        borderRadius:30,
        alignItems:"center",
        justifyContent:"center"
    },
    buttonText: {
        color:"white",
        fontSize:18
    },
    barChart: {
        backgroundColor:"transparent",
        height:HEIGHT*.6,
        width:WIDTH,
        marginTop:20
    },
});


            // <View style={{flex:1,backgroundColor:'#141746'}}>
            // <View style={{backgroundColor:"#076ca5",flex:0.2,borderTopStartRadius:40,borderBottomEndRadius:40}}></View>
            // <View style={{backgroundColor:"#409ecb",flex:0.2,borderTopStartRadius:40,borderBottomEndRadius:40}}></View>
            // <View style={{backgroundColor:"#417cac",flex:0.2,borderTopStartRadius:40,borderBottomEndRadius:40}}></View>
            // <View style={{backgroundColor:"#0094ac",flex:0.2,borderTopStartRadius:40,borderBottomEndRadius:40}}></View>
            // <View style={{backgroundColor:"#2d4c70",flex:0.2,borderTopStartRadius:40,borderBottomEndRadius:40}}></View>
            // </View>