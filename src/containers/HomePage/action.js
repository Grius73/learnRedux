import axios from 'axios';


export const setListAction = (list) => ({
     type:'SET_LIST',
     data:list           
})

// export const getFromGithub = (username) =>({
//      type:'GET_LIST',
//      data:username
// })

export const getFromGithub = (username)=>{
     return (dispatch)=>{
          axios.get(`https://api.github.com/users/${username}/repos?type=all&sort=updated`).then(res=>{
               dispatch(setListAction(res.data))
             })      
     }
}