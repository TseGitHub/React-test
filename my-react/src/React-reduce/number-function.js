import * as actionType from './action-type'

export function addNum(){
    return {
        type: actionType.NUM_ADD
    }
}

export function addJian(){
    return {
        type: actionType.NUM_JIAN
    }
}

export function setNum(num){
    return {
        type: actionType.NUM_SET,
        payload: num
    }
}