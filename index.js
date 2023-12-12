const redux = require('redux')
const createStore = redux.createStore

const BUY_CAKE ='BUY_CAKE'
const BUY_ICE="BUY_ICE"
const ADD='ADD'

function buyCake(){
    return {
        type: BUY_CAKE,
        info:'Firest redux action'
    }
}

function add(){
    return{
        type: ADD,
        info: "Add of two numbers"
    }
}

function byIcecream(){
    return {
        type: BUY_ICE,
        info: "second react app"
    }
}



const initialState ={
    numOfCakes: 10,
    numofICe: 20,
    firstnum: 40
}

const reducer =(state= initialState, action) =>{
    switch(action.type){
        case BUY_CAKE: 
        return{
            ...state,
            numOfCakes: state.numOfCakes -1
        }

        case BUY_ICE:
            return{
                ...state,
                numofIcecrem: state.numofICe +1
            }

        case ADD:
            return{
                ...state,
                firsNumber: state.firstnum + 40
            }

        default: return state
    }
}

const store =createStore(reducer)
console.log('initial state', store.getState())
const unSubscribe= store.subscribe(()=>console.log('Updated state', store.getState()))


store.dispatch(byIcecream())
store.dispatch(buyCake())
store.dispatch(add())

unSubscribe()

