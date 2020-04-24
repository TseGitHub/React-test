import { createStore,bindActionCreators } from 'redux'
import  * as actionType from './action-type'
import * as getActions from './number-function'


function reduce(state,action) {
    switch(action.type){
        case actionType.NUM_ADD:
            return state + 1;
        case actionType.NUM_JIAN: 
            return state - 1;
        case actionType.NUM_SET: 
            return action.payload
        default:
            return state;
    }
}

//使用方法一
// const store = createStore(reduce,10)
// console.log(store.getState())

// store.dispatch({type: actions.NUM_ADD})
// store.dispatch({type: actions.NUM_ADD})

// console.log(store.getState())

// store.dispatch({type: actions.NUM_JIAN})
// store.dispatch({type: actions.NUM_JIAN})

// console.log(store.getState())

//使用方法二
// const store = createStore(reduce,10)

// console.log(store.getState())

// store.dispatch(getActions.addNum())
// store.dispatch(getActions.addNum())

// console.log(store.getState())

// store.dispatch(getActions.addJian())
// store.dispatch(getActions.addJian())

// console.log(store.getState())

// store.dispatch(getActions.setNum(5))

// console.log(store.getState())


//使用方法三

const store = createStore(reduce,10)

const actionFn = bindActionCreators(getActions,store.dispatch)

console.log(store.getState())

actionFn.addNum();
actionFn.addNum();

console.log(store.getState())

actionFn.addJian()
actionFn.addJian()
console.log(store.getState())

actionFn.setNum(3)
console.log(store.getState())