const initState = {
    logsLoading:false,
    logs:[]
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
        default: 
            return state;   
    }
}
export default cncReducer; 