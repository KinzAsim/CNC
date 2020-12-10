import React from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import {Card} from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Entypo';
import DatePicker from 'react-native-datepicker';

class HomeScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {date:"2016-05-15"}
    }
    render()
    {
        return(
            <View style={{flex:1,backgroundColor:'#141746'}}>
            <View style={{backgroundColor:'transparent',alignItems:'center',justifyContent:'center',alignSelf:'center',
            borderTopRightRadius:40,borderTopLeftRadius:40,flexDirection:'row'}}>
            {/* <Text style={{color:'#fff'}}>Custom</Text> */}
            <View style={{backgroundColor:'transparent',flexDirection:'row',marginTop:hp('1%'),borderTopRightRadius:40,borderTopLeftRadius:40}}>
                <Text style={[styles.DatePickerText, { marginTop: hp('1.5%') }]}>  Start: </Text>
                <DatePicker
                style={styles.DatePicker}
                date={this.state.date}
                mode="date"
                display="default"
                placeholder="select date"
                format="YYYY-MM-DD"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                    dateInput: styles.DatePickerInput,
                    dateIcon: styles.DatePickerIcon1,
                    dateText: styles.DateText
                    ,
                // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => {this.setState({date: date})}}
                />
                </View>
                <View style={{backgroundColor:'transparent',flexDirection:'row',marginTop:hp('1%'),borderTopRightRadius:40,borderTopLeftRadius:40}}>
                <Text style={[styles.DatePickerText, { marginTop: hp('1.5%') }]}>  End: </Text>
                <DatePicker
                style={styles.DatePicker}
                date={this.state.date}
                mode="date"
                display="default"
                placeholder="select date"
                format="YYYY-MM-DD"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                    dateInput: styles.DatePickerInput,
                    dateIcon: styles.DatePickerIcon1,
                    dateText: styles.DateText
                    ,
                // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => {this.setState({date: date})}}
                />
                </View>
            </View>

            <View style={{backgroundColor:'#141746',flex:1}}>
                <ScrollView horizontal={true} style={{ marginTop:hp('3%')}}>
                <Card  containerStyle={[styles.cardMainContainer,{marginLeft:wp('3%'),backgroundColor:'#c20000',borderTopRightRadius:10,borderBottomLeftRadius:10,borderColor:'##c20000'}]}>              
                <Card.Title style={styles.card}>RED LIGHT DURATION</Card.Title>
                <Divider style={{backgroundColor:'#fff',marginRight:wp('2%'),marginBottom:hp('0.5%')}}/>
                <Text style={{fontSize:20,color:'#fff',justifyContent:'center',alignSelf:'center',paddingTop:hp('5%')}}>0 Mins</Text>
                <View style={{backgroundColor:'#fff', width:wp('15%'),height:hp('8%'),borderRadius:40,justifyContent:'center',alignSelf:'center',marginTop:hp('5%')}}>
                <Icon name="camera" size={30} color="red" style={{justifyContent:'center',alignSelf:'center'}}/>
                </View>
                </Card>

                <Card  containerStyle={[styles.cardMainContainer,{backgroundColor:'#d4a537',borderTopRightRadius:10,borderBottomLeftRadius:10,borderColor:'#d4a537'}]}>
                <Card.Title style={styles.card}>YELLOW LIGHT DURATION</Card.Title>
                <Divider style={{backgroundColor:'#fff',marginRight:wp('2%'),marginBottom:hp('0.5%')}}/>
                <Text style={{fontSize:20,color:'#fff',justifyContent:'center',alignSelf:'center',paddingTop:hp('5%')}}>0 Mins</Text>
                <View style={{backgroundColor:'#fff', width:wp('15%'),height:hp('8%'),borderRadius:40,justifyContent:'center',alignSelf:'center',marginTop:hp('5%')}}>
                <Icon name="camera" size={30} color="#d4a537" style={{justifyContent:'center',alignSelf:'center'}}/>
                </View>
                </Card>
                {/* <Divider style={{backgroundColor:'#fff',marginTop:hp('1%')}}/> */}

                <Card  containerStyle={[styles.cardMainContainer,{backgroundColor:'#00ca00',borderTopRightRadius:10,borderBottomLeftRadius:10,borderColor:'#00ca00'}]}>
                <Card.Title style={styles.card}>GREEN LIGHT DURATION</Card.Title>
                <Divider style={{backgroundColor:'#fff',marginRight:wp('2%'),marginBottom:hp('1%')}}/>
                <Text style={{fontSize:20,color:'#fff',justifyContent:'center',alignSelf:'center',paddingTop:hp('5%')}}>0 Mins</Text>
                <View style={{backgroundColor:'#fff', width:wp('15%'),height:hp('8%'),borderRadius:40,justifyContent:'center',alignSelf:'center',marginTop:hp('5%')}}>
                <Icon name="camera" size={30} color="green" style={{justifyContent:'center',alignSelf:'center'}}/>
                </View>
                </Card>

                <Card  containerStyle={[styles.cardMainContainer,{backgroundColor:'#00549e',borderTopRightRadius:10,borderBottomLeftRadius:10,borderColor:'#00549e'}]}>
                <Card.Title style={styles.card}>OFF DURATION</Card.Title>
                <Divider style={{backgroundColor:'#fff',marginRight:wp('2%'),marginBottom:hp('1%')}}/>
                <Text style={{fontSize:20,color:'#fff',justifyContent:'center',alignSelf:'center',paddingTop:hp('5%')}}>0 Mins</Text>
                <View style={{backgroundColor:'#fff', width:wp('15%'),height:hp('8%'),borderRadius:40,justifyContent:'center',alignSelf:'center',marginTop:hp('5%')}}>
                <Icon name="camera" size={30} color="#00549e" style={{justifyContent:'center',alignSelf:'center'}}/>
                </View>
                </Card> 
                </ScrollView>
            </View>

                <View style={{flex:0.7,marginTop:hp('0.5%')}}>
                <View style={{height:hp('13%'),backgroundColor:'#fff',borderTopEndRadius:50,borderBottomEndRadius:50,marginRight:wp('10%'),padding:hp('1%')}}>
                <Text style={{color:'#00cffb',fontSize:15,marginLeft:wp('5%'),marginTop:hp('1%'),fontWeight:'bold'}}>Camera Status</Text>
                <Divider style={{backgroundColor:'#00cffb',marginRight:wp('16%'),marginBottom:hp('0.3%'),marginLeft:wp('5%')}}/>
                <View style={{flexDirection:'row'}}>
                <Text style={{marginHorizontal:wp('5%'),color:'#00cffb',marginTop:hp('2%'),fontWeight:'bold'}}>OFF</Text>
                <Icon2 name="camera" size={35} color="#00cffb" style={{marginLeft:wp('55%')}}/>
                </View>                
                </View>

                <View style={{height:hp('13%'),padding:hp('1%'),backgroundColor:'#fff',borderTopStartRadius:50,borderBottomStartRadius:50,marginTop:hp('2%'),marginLeft:wp('10%'),marginBottom:hp('2%')}}>
                <Text style={{color:'#c700a6',marginLeft:wp('5%'),marginTop:hp('0.5%'),fontWeight:'bold'}}>Color</Text>
                <Divider style={{backgroundColor:'#c700a6',marginRight:wp('15%'),marginBottom:hp('0.5%'),marginLeft:wp('5%')}}/>
                <View style={{flexDirection:'row',marginBottom:wp('1%')}}>
                <Text style={{marginHorizontal:wp('5%'),color:'#c700a6',marginTop:hp('2%'),fontWeight:'bold'}}>OFF</Text>
                <Icon1 name="lightbulb-on-outline" size={40} color="#c700a6" style={{marginLeft:wp('55%')}}/>
                </View>
                </View>
                </View>
                
                {/* <View style={{flexDirection:'column',marginTop:hp('1%')}}> */}
                {/* <Card  containerStyle={[styles.cardMainContainer,{backgroundColor:'#00ca00',borderTopRightRadius:10,borderBottomLeftRadius:10,borderColor:'#00ca00'}]}>
                <Card.Title style={styles.card}>GREEN LIGHT DURATION</Card.Title>
                <Divider style={{backgroundColor:'#fff',marginRight:wp('2%'),marginBottom:hp('1%')}}/>
                <Text style={{fontSize:20,color:'#fff',justifyContent:'center',alignSelf:'center'}}>0 Mins</Text>
                <View style={{backgroundColor:'#fff', width:wp('15%'),height:hp('8%'),borderRadius:40,justifyContent:'center',alignSelf:'center',marginTop:hp('4%')}}>
                <Icon name="camera" size={30} color="green" style={{justifyContent:'center',alignSelf:'center'}}/>
                </View>
                </Card>

                <Card  containerStyle={[styles.cardMainContainer,{backgroundColor:'#00549e',borderTopRightRadius:10,borderBottomLeftRadius:10,borderColor:'#00549e'}]}>
                <Card.Title style={styles.card}>OFF DURATION</Card.Title>
                <Divider style={{backgroundColor:'#fff',marginRight:wp('2%'),marginBottom:hp('1%')}}/>
                <Text style={{fontSize:20,color:'#fff',justifyContent:'center',alignSelf:'center'}}>0 Mins</Text>
                <View style={{backgroundColor:'#fff', width:wp('15%'),height:hp('8%'),borderRadius:40,justifyContent:'center',alignSelf:'center',marginTop:hp('4%')}}>
                <Icon name="camera" size={30} color="#00549e" style={{justifyContent:'center',alignSelf:'center'}}/>
                </View>
                </Card> */}
                
                {/* <View style={{height:hp('11%'),backgroundColor:'#fff',marginTop:hp('2%'),width:wp('60%'),borderTopStartRadius:30,borderBottomStartRadius:30}}>
                <Text style={{color:'#c700a6',marginLeft:wp('5%'),marginTop:hp('0.5%')}}>Color</Text>
                <Divider style={{backgroundColor:'#c700a6',marginRight:wp('16%'),marginBottom:hp('0.3%'),marginLeft:wp('5%')}}/>
                <View style={{flexDirection:'row',marginBottom:wp('1%')}}>
                <Text style={{marginHorizontal:wp('5%'),color:'#c700a6',marginTop:hp('2%'),fontWeight:'bold'}}>OFF</Text>
                <Icon1 name="lightbulb-on-outline" size={40} color="#c700a6" style={{marginLeft:wp('15%')}}/>
                </View>
                </View> */}

                {/* <Divider style={{backgroundColor:'#fff',marginTop:hp('1%')}}/> */}
                {/* <Divider style={{backgroundColor:'#fff',marginRight:wp('5%'),marginTop:hp('3%'),marginLeft:wp('5%')}}/>
                <Text style={{color:'#c700a6',marginLeft:wp('5%'),marginTop:hp('0.5%')}}>Color</Text>
                <Divider style={{backgroundColor:'#fff',marginRight:wp('34%'),marginBottom:hp('0.5%'),marginLeft:wp('5%')}}/>
                <View style={{flexDirection:'row',marginBottom:wp('1%')}}>
                <Text style={{marginHorizontal:wp('5%'),color:'#fff',marginTop:hp('2%')}}>OFF</Text>
                <Icon1 name="lightbulb-on-outline" size={40} color="#c700a6" style={{marginLeft:wp('15%')}}/>
                </View>
                <Divider style={{backgroundColor:'#fff',marginRight:wp('5%'),marginLeft:wp('5%')}}/> */}
                {/* </View> */}
            
            {/* 7b534a */}
            </View>
          
        );
    }
}
//#00cffb,c700a6
export default HomeScreen;


const styles = StyleSheet.create({
    cardMainContainer:{
        width:wp('40%'),
        height:hp('35%'),
        marginLeft:wp('0.1%')
    },
    card: {
        color:'#fff',
        fontSize:9
    },
    DatePicker: { width: wp('37%')},
    DatePickerText: { color: "#fff", fontWeight: 'bold' },
    DatePickerInput: {  height: hp('3%') ,borderColor:'#fff'},
    DatePickerIcon: { top: hp('0%')},
    DatePickerIcon1: { top: hp('0%'),marginRight:wp('3%')},
    DateText: { color: "#fff" },
})