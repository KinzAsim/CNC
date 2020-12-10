import React from 'react';
import {View, Text, ScrollView, StyleSheet,FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Item from './LogsItem';
import {getLogs} from '../../../redux/action/cncAction';
import {connect} from 'react-redux';

class LogsScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            DATA:[{color:'red', duration:34},
            {color:'green', duration:44},
            {color:'yellow', duration:54},
            {color:'red', duration:64},
            {color:'green', duration:44},
            {color:'yellow', duration:54}]
        }        
      }
     
    render(){
        const{DATA} = this.state;
        const{logs,logsLoading} = this.props;
        console.log('logs',logs)
        
        return( 
            // <LinearGradient colors={["#141746","#00608a","#506591","#141746"]}  style={{flex:1}}>
            //     <Text>GraphScreen</Text>
            // </LinearGradient>
            <View style={{flex:1,backgroundColor:'#141746'}}>
            <FlatList
                data={this.state.DATA}
                renderItem={({item}) => <Item color={item.color} duration={item.duration}/>}
                keyExtractor={(item, index) => index.toString()}
            />
            </View>
          
        );
    }
}
const mapStateToProps = (state) => ({
    logs : state.cnc.logs,
    logsLoading: state.cnc.logsLoading
})

export default connect(mapStateToProps,{getLogs})(LogsScreen);