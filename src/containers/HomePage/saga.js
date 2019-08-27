import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios';
import { setListAction } from './action';

function* gitGithub(action){
    
    const data = yield call(getData,action.data)
    yield put(setListAction(data));
}
const getData = function(username){
   return axios.get(`https://api.github.com/users/${username}/repos?type=all&sort=updated`).then(res=>{
        return res.data;
      })    
}
function* homeSaga(){
    yield takeEvery("GET_LIST",gitGithub)
}

export default homeSaga;