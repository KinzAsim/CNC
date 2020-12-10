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
