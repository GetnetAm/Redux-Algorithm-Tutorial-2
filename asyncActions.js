const redux = require('redux')
const createStore= redux.createStore
const applyMiddleware =redux.applyMiddleware
const thunkMiddleware =require('redux-thunk').default
const axios =require("axios")

const initialState ={
    loading: false,
    user: [],
    error: ''
}


const FETCH_USERS_REQUEST='FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS='FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE='FETCH_USERS_FAILURE'


const fetchUserRequest =()=>{
    return{
        type: FETCH_USERS_REQUEST
    }
}


const fetchUserSuccess= users =>{
    return{
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUserFailure= error =>{
    return{
        type:FETCH_USERS_FAILURE,
        payload: error
    }
}


const reducer =(state =initialState, action)=>{
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state, 
                loading:true
            }

        case FETCH_USERS_REQUEST:
            return{
                ...state,
                users: action.payload,
                error: ''
            }


        case FETCH_USERS_FAILURE:
            return{
                loading: false,
                user: [],
                error: action.payload
            }
    }

    
   
}

const fetchUsers=()=>{
    return function(dispatch){
        
    }
}


const store =createStore(reducer, applyMiddleware(thunkMiddleware))