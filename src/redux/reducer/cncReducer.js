const initState = {
    logsLoading:false,
    logs:[],
    cameraLoading:false,
    camera:[],
    colorLoading:false,
    colour:[],
    sensorLoading:false,
    sensor:[]
};

const cncReducer = (state = initState, action) => {
    
    switch(action.type){
        case 'LOGS_LOADING':
            return {
              ...state,
              logsLoading: true 
            } 
        case 'GET_LOGS':
          
            return {
                ...state,
                logsLoading: false,
                logs:action.payload
            }
        case 'CAMERA_LOADING':
            return {
              ...state,
              cameraLoading: true 
            } 
        case 'GET_CAMERA':
            return {
                ...state,
                cameraLoading: false,
                camera:action.payload
            }
        case 'COLOR_LOADING':
            return {
                ...state,
                colorLoading: true 
                } 
        case 'GET_COLOR':
            return {
                ...state,
                colorLoading: false,
                colour:action.payload
                }
        case 'SENSORS-LOADING':
            return {
                ...state,
                sensorLoading:true
            }
        case 'GET_SENSORS':
            return {
                ...state,
                sensorLoading:false,
                sensor:action.payload
            }
        default: 
            return state;   
    }
}
export default cncReducer; 