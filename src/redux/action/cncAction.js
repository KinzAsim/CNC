import axios from 'axios';
import {url} from './types';


export const getLogs = (id) => (dispatch,getState) => new Promise(async function (resolve,reject){
  
    dispatch({
        type:'LOGS_LOADING'
    })
    const config = {
        headers: {
            'Content-type':'Application/json'
        }
    }
    try{
        const data = await axios.get(`${url}/led/log/${id}`,config)
        console.log('data',data.data)
        dispatch({
            type:'GET_LOGS',
            payload:data.data
        })
        resolve('done');
    }
    catch(err){
        console.log(err)
        reject(err);
    }
})


export const getCamera = (id) => (dispatch,getState) => new Promise(async function (resolve,reject){
  
    dispatch({
        type:'CAMERA_LOADING'
    })
    const config = {
        headers: {
            'Content-type':'Application/json'
        }
    }

    try{
        const data = await axios.get(`${url}/led/${id}`,config)
        //console.log('data',data.data)
        dispatch({
            type:'GET_CAMERA',
            payload:data.data
        })
        resolve('done');
    }
    catch(err){
        console.log(err)
        reject(err);
    }
})


export const getColor = (id,startDate,endDate) => async (dispatch,getState) => {
  
    dispatch({
        type:'COLOR_LOADING'
    })
    const config = {
        headers: {
            'Content-type':'Application/json'
        }
    }
    const body = {
        startDate,
        endDate
    }

    try{
        const data = await axios.post(`${url}/led/duration/${id}`,config)
        console.log('data',data.data)
        dispatch({
            type:'GET_COLOR',
            payload:data.data
        })
    }
    catch(err){
        console.log(err)      
    }
}
