import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import {url} from './types';


export const login = (email, password,Ip)=> {    
    return  (dispatch, getState)=> {
        dispatch({
            type:'USER_LOADING'
        })

    const config = {
        headers : {
            'Content-type' : 'Application/json' 
        }
    }
    const body = JSON.stringify({
        email,
        password,
        ip:Ip
    })
    console.log(body)
    axios.post(`${url}/user/login`, body, config)
    .then(res=>
            dispatch ({
                type : 'LOGIN_SUCCESS',
                payload : res.data
        })
    )
    .catch(err => {
         console.log("hello",err)
    });
};
}

export const loadUser = (token) => {       
    return(dispatch,getState)=> {
        dispatch({
            type: 'USER_LOADING',
        });
       
    const config = {
        headers : {
          'Content-type':'Application/json',
          'auth': token
        }
    }
    axios.get(`${url}/user/auth`, config)
    .then(res=>{
      
        dispatch({
            type:'USER_LOADED',
            payload:res.data

        })
    })        
    .catch(err => {
       // console.log(err.response.data);
    })
    }
}


// export const signOut = () => (dispatch,getState) =>{
   
//     dispatch({
//         type:'SIGN_OUT'
//     })
//   }
  
export const tokenConfig = async (getState) => {
    const token = await AsyncStorage.getItem('userToken');
    const comfig = {
        headers: {
            'content-type':'Application/json'
        }
    }
    if(token){
        config.headers['auth'] = token;
    }
    return config;
}