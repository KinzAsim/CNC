import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import home from '../modules/cns_system/overview/overview';
import login from '../modules/auth/login';
import AttTabNavigator from './AttTabNavigator';
import AuthLoadingScreen from '../modules/auth/authLoadingScreen';

const Auth_Stack = createStackNavigator({
    auth: {
        screen: login,        
    },   
   
},
{
    defaultNavigationOptions:()=>({
        headerShown:false
    })
});

const App_Stack = createStackNavigator({
    // pusher:{
    //     screen:NotificationPusher
    // },
    home: {
        screen: AttTabNavigator        
    }, 
    },
    {
        defaultNavigationOptions: ({navigation}) =>({
         title: 'CNC',
    
        headerTitleStyle: {
         color:'#fff',
         alignSelf:'center',
         justifyContent:'center'
        },
         headerShown:true,
         
         headerBackImage:()=>false,
    
         headerStyle: {
            backgroundColor:'#141746',
        },          
       // headerRight:()=>  <NotificationIcon navigationProps={navigation}/>,
    //headerLeft:()=>  <ProfileIcon navigationProps={navigation}/>               
        }),
    },
    {
        initialRouteName:"home",
    },
);



export default createAppContainer(
    createSwitchNavigator(
        {
        AuthLoading:AuthLoadingScreen,    
        auth:Auth_Stack,   
        App:App_Stack,
        },
        {
            initialRouteName:'App',
        }
 )
);
