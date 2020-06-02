import React from 'react';
import '../index.css';
import { combineReducers } from 'redux';


let jsonObj = ["This is message number one!", "This is another message!", "I love cats!",
    "Could probably die for them", "How do people come up with messages...?"];

const counterReducer = (list = jsonObj, action) => {
    if (action.type === 'ADD_MSG') {
        return [...list, action.addMsg];
    }
    if (action.type === 'DELETE_MSG') {
        return list.filter((item, index) => index !== action.deleteMsg);
    }
    return list;
};

const selector = (msgId = 0, action) => {
    if (action.type === 'SELECT_MSG') {
        return action.selectMsg;
    }
    return msgId;
};

export default combineReducers({
    list: counterReducer,
    msgId: selector
});



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

