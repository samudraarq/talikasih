import {GET_DONOR_DATA} from '../actions/actionTypes'
import {GET_DONOR_COMENT} from '../actions/actionTypes'
import {POST_SHARE} from '../actions/actionTypes'



const initialState = {  
    dataDonate:[],
    dataDonateComen:[],
    dataShare:[]
}   

 const donorReducers =(state=initialState,action)=>{
switch (action.type) {
    case GET_DONOR_DATA:

        return {...state,dataDonate:action.data}
        
    case GET_DONOR_COMENT:
       
        return {...state,dataDonateComen:action.data} 

    case POST_SHARE:
       
            return {...state,dataShare:action.data} 
    
    default:return state;
}}


export default donorReducers;